import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user';
import tweetsRouter from './routes/tweets';
import express, { Express } from 'express';
import cors from 'cors';
import './core/db';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/tweets', tweetsRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
