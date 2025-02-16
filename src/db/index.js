import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Database connected successfully on host: ${connectionInstance.connection.host}`);
        console.log("connectionInstance: ", connectionInstance);
    } catch (error) {
        console.log("MongoDB Connection Error", error);
        process.exit(1)
    }
}

export default connectDB;