import { Request, Response } from 'express';
import { UserType } from 'models/UserModel';
import { isValidObjectId } from 'mongoose';
import { TweetInterface, TweetModel } from '../models/TweetModel';

class TweetsController {
  async index(_: any, res: Response): Promise<void> {
    try {
      const tweets = await TweetModel.find();
      res.status(200).json(tweets);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async show(req: Request, res: Response): Promise<void> {
    try {
      const tweetId = req.params.id;

      if (!isValidObjectId(tweetId)) {
        res.status(404).json({ message: 'Not found' });
        return;
      }

      const tweet = await TweetModel.findById(tweetId);

      if (tweet) {
        res.status(200).json(tweet);
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const user = req.user as UserType;
      if (user) {
        const data: TweetInterface = {
          text: req.body.text,
          userId: user._id || '',
        };
        const tweet = await TweetModel.create(data);
        res.status(200).json(tweet);
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export const TweetsCtrl = new TweetsController();
