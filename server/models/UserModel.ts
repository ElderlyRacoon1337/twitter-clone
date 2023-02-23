import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
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
    select: false,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmedHash: {
    required: true,
    type: String,
    select: false,
  },
  location: String,
  about: String,
  website: String,
});

export const UserModel = model('User', UserSchema);
