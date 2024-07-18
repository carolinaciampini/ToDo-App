import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv';

//dotenv.config();

const app = express();

const allowedOrigins = [
  'https://to-do-client-eight.vercel.app',
  'https://to-do-client-git-main-carolinas-projects-916ee369.vercel.app',
  'https://to-do-client-r0x9756vs-carolinas-projects-916ee369.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('Origin:', origin);
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
       console.log('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', tasksRoutes);

export default app;