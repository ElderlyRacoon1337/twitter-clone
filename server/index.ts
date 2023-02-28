import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user';
import tweetsRouter from './routes/tweets';
import express, { Express } from 'express';
import cors from 'cors';
import './core/db';
import multer from 'multer';
import { passport } from './core/signIn';
import { UploadCtrl } from './controllers/UploadController';

const app: Express = express();
app.use(express.json());
app.use(cors());
// app.use('/uploads', express.static('uploads'));

const storage = multer.memoryStorage();

const upload = multer({ storage });

app.use('/users', userRouter);
app.use('/tweets', tweetsRouter);

app.post(
  '/upload',
  // passport.authenticate('jwt', { session: false }),
  upload.single('image'),
  UploadCtrl.upload
);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
