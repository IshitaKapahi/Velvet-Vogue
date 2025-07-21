const Admin = require("../models/Admin");
const { ROLES } = require("../utils/constants")

const bcrypt = require("bcrypt");
const changeUsername = async (req, res) => {
    if(req.role !== ROLES.admin){
        return res.status(401).json({message: "Access Denied"});
    }
    try {
        const {previousUsername , newUsername} = req.body;
        if(!newUsername){
            return res.status(400).json({success:false , message: "Please provide a new username"});
        }
        const user = await Admin.findOneAndUpdate({username: previousUsername} , {username: newUsername} , {new: true});
        if(!user){
            return res.status(404).json({success:false , message: "User not found"});
        }
        return res.status(200).json({success:true , message:`New username is ${user.username}` , user :{ username: user.username , role:user.role}});
        
    } catch (error) {
        return res.status(500).json({success:false , message: "Server Error"});
        
    }
};


const changePassword = async (req, res) => {
    if(req.role !== ROLES.admin){
        return res.status(401).json({ success: failed , message: "Access Denied"});
    }
    try {
        const{username , previousPassword , newPassword}= req.body;
        if (!previousPassword || !newPassword){
            return res.status(400).json({success:false , message: "Previous Password and New Password are required"});
        }
        let user = await Admin.findOne({username});
        if(!user){
            return res.status(404).json({success:false , message: "User not found"});
        }
         const isPasswordValid = await bcrypt.compare(previousPassword , user.password);
        if(!isPasswordValid){
            return res.status(400).json({success:false , message: "Previous Password is incorrect"});
        }
        const securePassword = await bcrypt.hash(newPassword , 10);
        user.password = securePassword;
        await user.save();
        return res.status(200).json({success:true , message: "Password changed successfully"});

    } catch (error) {
        return res.status(500).json({success:false , message: error.message});
    }
};

module.exports = {changeUsername , changePassword};