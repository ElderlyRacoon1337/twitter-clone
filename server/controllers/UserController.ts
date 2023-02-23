import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
import { generateMD5 } from '../utils/generateHash';
import { sendEmail } from '../utils/sendEmail';
import { isValidObjectId } from 'mongoose';

class UserController {
  async index(_: any, res: Response): Promise<void> {
    try {
      const users = await UserModel.find();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async show(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;

      if (!isValidObjectId(userId)) {
        res.status(400);
        return;
      }

      const user = await UserModel.findById(userId).select(
        '+passwordHash +confirmedHash'
      );

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
      console.log(error);
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const data = {
        email: req.body.email,
        userName: req.body.userName,
        fullName: req.body.fullName,
        passwordHash: hash,
        confirmedHash: generateMD5(
          process.env.SECRET_EMAIL_CONFIRMATION_KEY || Math.random.toString()
        ),
      };

      const user = await UserModel.create(data);

      sendEmail({
        emailFrom: 'admin@twitter.com',
        emailTo: data.email,
        subject: 'Подтверждение почты Twitter Clone',
        html: `
        <div style="display:flex; flex-direction:column; align-items:center; padding-top:100px">
        <img style="margin:0 auto; height: auto; width: 50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU"/>
        <h1 style="font-family:sans-serif;text-align:center; color:#00a2ff">Twitter</h1>
        <p style="max-width:300px;font-family:sans-serif; text-align:center">Для того, чтобы подтвердить почту, нажмите на кнопку</p>
        <a style="margin-top:10px;border-none;border-radius:10px;background-color:#00a2ff;color:#fff; padding:10px; font-family:sans-serif; color: #fff; text-decoration:none" href="http://localhost:${process.env.PORT}/users/verify?hash=${data.confirmedHash}">
        Подтвердить
        </a>
        </div>
        `,
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async verify(req: Request, res: Response): Promise<void> {
    try {
      const hash = req.query.hash;

      if (!hash) {
        res.status(400).json({ mesage: 'There is no hash in params' });
        return;
      }

      const user = await UserModel.findOne({ confirmedHash: hash });

      if (user) {
        user.confirmed = true;
        user.save();
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Пользователь не найден' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export const UserCtrl = new UserController();
