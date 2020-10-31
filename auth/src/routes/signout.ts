import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  console.log('hit');
  req.session = null;
  res.send({});
  //   res.send('test');
});

export { router as signoutRouter };
