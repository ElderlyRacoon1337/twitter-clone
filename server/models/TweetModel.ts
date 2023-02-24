import { Document, model, Schema } from 'mongoose';

export interface TweetInterface {
  _id?: string;
  text: string;
  userId: string;
}

export type TweetDocumentInterface = TweetInterface & Document;

const TweetSchema = new Schema<TweetInterface>({
  _id: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
    ref: 'User',
  },
});

export const TweetModel = model('Tweet', TweetSchema);
