import { Request, Response } from 'express';
import { UserType } from 'models/UserModel';
import { isValidObjectId } from 'mongoose';
import { TweetInterface, TweetModel } from '../models/TweetModel';

class TweetsController {
  async index(_: any, res: Response): Promise<void> {
    try {
      const tweets = await TweetModel.find()
        .populate('user')
        .sort('-createdAt');
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

      const tweet = await TweetModel.findById(tweetId).populate('user');

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
          // @ts-ignore
          user: user._id || '',
        };
        const tweet = await TweetModel.create(data);
        const newTweet = await TweetModel.findById(tweet._id).populate('user');

        res.status(200).json(newTweet);
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const user = req.user as UserType;
      const tweetId = req.params.id;

      const tweet = await TweetModel.findById(tweetId);
      if (tweet) {
        if (String(tweet.user) == String(user._id)) {
          await TweetModel.findByIdAndDelete(tweetId);
          res.status(200).json({ success: true });
        } else {
          res.status(403).json({ message: 'Нет доступа' });
        }
      } else {
        res.status(404).json({ message: 'Не найдено' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const user = req.user as UserType;
      const tweetId = req.params.id;
      const text = req.body.text;

      const tweet = await TweetModel.findById(tweetId).populate('user');
      if (tweet) {
        // @ts-ignore
        if (String(tweet.user._id) == String(user._id)) {
          tweet.text = text;
          tweet.save();
          res.status(200).json(tweet);
        } else {
          res.status(403).json({ message: 'Нет доступа' });
        }
      } else {
        res.status(404).json({ message: 'Не найдено' });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export const TweetsCtrl = new TweetsController();
