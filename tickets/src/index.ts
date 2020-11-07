import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT KEY must be defined');
  } else {
    console.log(process.env.JWT_KEY);
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    // await mongoose.connect('mongodb://localhost:27017/auth', {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // });
    console.log('Connected to MongoDb');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
