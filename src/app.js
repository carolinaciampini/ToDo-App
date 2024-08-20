import express from "express";
import morgan from "morgan";
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const allowedOrigins = [
  'https://to-do-server-peach.vercel.app',
  'https://to-do-server-carolinas-projects-916ee369.vercel.app',
  'https://to-do-server-git-main-carolinas-projects-916ee369.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
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