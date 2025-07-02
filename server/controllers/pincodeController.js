const Pincode = require ("../models/Pincode");
 const addPincodes = async (req, res) => {
     const {pincodes} = req.body;
     if (!pincodes || pincodes.length === 0) {
         return res.status(400).json({message: "Please enter pincode"});
     }
     try {
        const existingPincodes = await Pincode.find({pincode: {$in: pincodes.map((p) => p.pincode)}});
        if (existingPincodes.length > 0) {
            return res.status(400).json({message: "Some pincodes already exist"});
        }
     } catch (error) {
        return res.status(500).json({message: error.message , success : false});
     }
 }