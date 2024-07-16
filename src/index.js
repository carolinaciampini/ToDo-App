import app from './app.js'
import { connectDB } from './db.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

connectDB();
app.listen(port);
console.log('server linstening on port', 3002)
