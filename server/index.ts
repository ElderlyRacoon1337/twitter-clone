import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';
import './core/db';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
