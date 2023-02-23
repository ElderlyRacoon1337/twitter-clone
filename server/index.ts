import dotenv from 'dotenv';
dotenv.config();

import { registerValidations } from './validations/register';
import { UserCtrl } from './controllers/UserController';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import './core/db';
import handleValidationErrors from './middleware/handleValidationErrors';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/users', UserCtrl.index);
app.get('/users/:id', UserCtrl.show);
app.post(
  '/users',
  registerValidations,
  handleValidationErrors,
  UserCtrl.create
);
app.get('/users/verify', UserCtrl.verify);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
