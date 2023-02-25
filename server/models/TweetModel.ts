import { Document, model, Schema } from 'mongoose';

export interface TweetInterface {
  _id?: string;
  text: string;
  user: Schema.Types.ObjectId;
  likes: string[];
  comments: string[];
  retweets: string[];
}

export type TweetDocumentInterface = TweetInterface & Document;

const TweetSchema = new Schema<TweetInterface>(
  {
    text: {
      required: true,
      type: String,
    },
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: {
      type: [String],
      default: [],
    },
    retweets: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export const TweetModel = model('Tweet', TweetSchema);
