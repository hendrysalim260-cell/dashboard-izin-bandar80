import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI must be set in .env file.");
}

mongoose.set("strictQuery", true);

export const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI as string, {

      maxPoolSize: 20,
      minPoolSize: 5,

      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,

      maxIdleTimeMS: 30000,

      retryWrites: true,

      autoIndex: true

    });

    console.log("✅ MongoDB Connected");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB Error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB Disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("MongoDB Reconnected");
    });

  } catch (error) {

    console.error(error);
    process.exit(1);

  }
};
