import { Document, model, Schema } from 'mongoose';

export interface UserType {
  _id?: string;
  email: string;
  fullName: string;
  userName: string;
  passwordHash: string;
  confirmed: boolean;
  confirmedHash: string;
  location?: string;
  about?: string;
  website?: string;
}

export type UserDocumentInterface = UserType & Document;

const UserSchema = new Schema<UserType>({
  email: {
    unique: true,
    required: true,
    type: String,
  },
  fullName: {
    required: true,
    type: String,
  },
  userName: {
    unique: true,
    required: true,
    type: String,
  },
  passwordHash: {
    required: true,
    type: String,
    // select: false,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmedHash: {
    required: true,
    type: String,
    // select: false,
  },
  location: String,
  about: String,
  website: String,
});

export const UserModel = model('User', UserSchema);
