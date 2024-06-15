import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import profileRouter from './routes/profileRoute.js'
import { Profile } from './models/profileSchema.js';

const app = express();

dotenv.config({path: "./config/config.env"});

// app.use(
//     cors({
//         origin: [process.env.FRONTEND_URL],
//         methods: ["POST"],
//         credentials: true,
//     })
// );
app.use(cors())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}, {limit: '50mb'}))

app.use('/profile', profileRouter)

dbConnection();

app.use(errorMiddleware)

export default app;


