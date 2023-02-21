import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './core/db';

const app: Express = express();

app.use(express.json());
dotenv.config();
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
