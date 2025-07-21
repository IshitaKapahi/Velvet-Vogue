const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "admin",
        enum: ["admin"],

    },
    phone: {
        type: String,
        unique: true,
    }
    ,
}, { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;