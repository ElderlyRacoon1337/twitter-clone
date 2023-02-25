import express from 'express';
import { createTweetValidations } from '../validations/cteateTweet';
import handleValidationErrors from '../middleware/handleValidationErrors';
import { TweetsCtrl } from '../controllers/TweetsController';
import { passport } from '../core/signIn';

const router = express.Router();

router.get('/', TweetsCtrl.index);
router.get('/:id', TweetsCtrl.show);
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  TweetsCtrl.delete
);
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  createTweetValidations,
  handleValidationErrors,
  TweetsCtrl.update
);
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createTweetValidations,
  handleValidationErrors,
  TweetsCtrl.create
);

export default router;
