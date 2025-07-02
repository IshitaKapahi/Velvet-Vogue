const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        if (connection.STATES.connecting) {
            console.log(`Connecting Db to ${connection.connection.host}`);
        }
        if (connection.STATES.connected) {
            console.log("Db Connected");
        }
        if (connection.STATES.disconnected) {
            console.log("Db Disconnected ");
        }
    } catch (error) {
        console.log("Error connecting to db", error);
    }
};
module.exports = connectDB;