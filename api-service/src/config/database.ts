import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB connect: ${conn.connection.host}`);
  } catch(error) {
    console.error(`Error DB: ${error}`);
    process.exit(1);
  }
};