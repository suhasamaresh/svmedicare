import mongoose from "mongoose";

const connectDB = async () => {
    const MONGODB_URI = process.env.MONGODB_URI;
    try{
        if (!MONGODB_URI) {
            throw new Error("MONGODB_URI environment variable is missing.");
        }
        if(mongoose.connection.readyState === 0){
            await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("db connected");
        }
    }catch(error){
        console.log(error);
    }
};

export default connectDB;
