import mongoose from "mongoose";
import { DB_NANME } from "../constants";

const connecionDB = async () => {
    try {

        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NANME}`)

        console.log(`\MongoDb connected !! DB Host: ${connectionInstance.connection.host}`)

    } catch (error) {

        console.log("Mongoodb connection error", error);
        process.exit(1);

    }
}

export default connecionDB;