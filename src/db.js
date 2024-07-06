import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://carolinaciampini02:hejUfKqzaJLDmiHb@cluster0.aksptne.mongodb.net/');
    console.log('db is connected')
  } catch (error) {
    console.log('error')
  }
 
};
