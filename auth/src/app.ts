import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { singupRouter } from './routes/signup';
import { errorHandler,NotFoundError } from '@amranprogramming/common';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
    // Need to set this to true so we can only receive cookie from https requests...
  })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(singupRouter);

app.get('*', (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
