const Pincode = require ("../models/Pincode");
const { ROLES } = require("../utils/constants");
 const addPincodes = async (req, res) => {

     if (req.role !== ROLES.admin) {
         return res.status(401).json({ success: false, message: "Access Denied" });
     }
     const {pincodes} = req.body;
     if (!pincodes || pincodes.length === 0) {
         return res.status(400).json({ success: false, message: "Please enter pincode" });
     }
     try {
         const existingPincodes = await Pincode.find({ pincode: { $in: pincodes.map((p) => p.pincode) }, });
         const existingPincodeValues = existingPincodes.map((p) => p.pincode);
         const newPincodes = pincodes.filter((p) => !existingPincodeValues.includes(p.pincode));
         if (newPincodes.length === 0) {
             return res.status(400).json({ success: false, message: "All pincode already exists" });
         }
         // ✅ INSERT NEW PINCODES TO DATABASE HERE
         await Pincode.insertMany(newPincodes);
         return res.status(200).json({ success: true, message: "Pincodes added successfully" });

     } catch (error) {
        return res.status(500).json({message: error.message , success : false});
     }
 };
 const getPincode = async (req, res) => {
     const {pincode} = req.params;
     try {
        const existingPincode= await Pincode.find({pincode});
        if (existingPincode.length === 0) {
            return res.status(404).json({ success: false, message: "No delivery available for this product on this pincode!"  });

        }
        return res.status(200).json({ success: true, message: "Delivery available"  });
     } catch (error) {
        return res.status(500).json({message: error.message , success : false});
     }

 };
 module.exports = {addPincodes,getPincode};