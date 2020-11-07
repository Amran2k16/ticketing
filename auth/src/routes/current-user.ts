import express from 'express';
import jwt from 'jsonwebtoken';
import { currentUser } from "@amranprogramming/common"

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  console.log('current user called');
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
