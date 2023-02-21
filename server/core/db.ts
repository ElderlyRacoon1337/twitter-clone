import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose
  .connect(
    process.env.CONNECTION_URL ||
      'mongodb+srv://admin:1488@cluster0.nu6j1es.mongodb.net/tweeter?retryWrites=true&w=majority'
  )
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database error', err));
