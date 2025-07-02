const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    otp: {
        type: String,
        default: 0,
    },
    role: {
        type: String,
        required: true,
        default: "user",
        enum: ["user"]

    },
    purchasedProducts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ]
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;