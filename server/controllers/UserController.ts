import { Request, Response } from 'express';
import { UserDocumentInterface, UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
import { generateMD5 } from '../utils/generateHash';
import { sendEmail } from '../utils/sendEmail';
import jwt from 'jsonwebtoken';
import { TweetModel } from '../models/TweetModel';

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
      const username = req.params.username;

      if (!username) {
        res.status(400).json({ message: 'Not found' });
        return;
      }

      const user = await UserModel.findOne({ userName: username });

      if (user) {
        // @ts-ignore
        const { passwordHash, confirmedHash, ...userData } = user._doc;
        const tweets = await TweetModel.find({ user: userData._id })
          .populate('user')
          .sort('-createdAt');
        res.status(200).json({ ...userData, tweets: [...tweets] });
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
      console.log(error);
    }
  }

  async getUserInfo(req: Request, res: Response): Promise<void> {
    try {
      const user = (req.user as any).toJSON();
      if (user) {
        const tweets = await TweetModel.find({ user: user._id })
          .populate('user')
          .sort('-createdAt');
        const { passwordHash, confirmedHash, ...userData } = user;
        res.status(200).json({ ...userData, tweets: [...tweets] });
      }
    } catch (error) {
      res.status(500).json(error);
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
        subject: '?????????????????????????? ?????????? Twitter Clone',
        html: `
        <div style="display:flex; flex-direction:column; align-items:center; padding-top:100px">
        <img style="margin:0 auto; height: auto; width: 50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU"/>
        <h1 style="font-family:sans-serif;text-align:center; color:#00a2ff">Twitter</h1>
        <p style="max-width:300px;font-family:sans-serif; text-align:center">?????? ????????, ?????????? ?????????????????????? ??????????, ?????????????? ???? ????????????</p>
        <a style="margin-top:10px;border-none;border-radius:10px;background-color:#00a2ff;color:#fff; padding:10px; font-family:sans-serif; color: #fff; text-decoration:none" href="http://localhost:${process.env.PORT}/users/verify?hash=${data.confirmedHash}">
        ??????????????????????
        </a>
        </div>
        `,
      });

      const _user = (user as UserDocumentInterface).toJSON();
      const { passwordHash, confirmedHash, ...userData } = _user;
      const token = jwt.sign(
        userData,
        process.env.SECRET_JWT || 'j4j4f98f34fi',
        {
          expiresIn: '30 days',
        }
      );

      res.status(201).json({ ...userData, token });
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
        res.status(404).json({ message: '???????????????????????? ???? ????????????' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async afterSignIn(req: Request, res: Response): Promise<void> {
    try {
      const user = (req.user as UserDocumentInterface).toJSON();
      const { passwordHash, confirmedHash, ...userData } = user;
      const token = jwt.sign(
        userData,
        process.env.SECRET_JWT || 'j4j4f98f34fi',
        {
          expiresIn: '30 days',
        }
      );
      res.status(200).json({ ...userData, token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }
}

export const UserCtrl = new UserController();
