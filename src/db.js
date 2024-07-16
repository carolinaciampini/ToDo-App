import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno
export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongoose.connect(mongoUri); // Sin opciones deprecadas
    console.log('db is connected');
  } catch (error) {
    console.error('error connecting to the database:', error);
  }
}
