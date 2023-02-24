import express from 'express';
import { registerValidations } from '../validations/register';
import handleValidationErrors from '../middleware/handleValidationErrors';
import { UserCtrl } from '../controllers/UserController';
import { passport } from '../core/signIn';

const router = express.Router();

router.get('/users', UserCtrl.index);
router.get(
  '/users/me',
  passport.authenticate('jwt', { session: false }),
  UserCtrl.getUserInfo
);
router.get('/users/verify', UserCtrl.verify);
router.get('/users/:id', UserCtrl.show);
// router.patch('/users', UserCtrl.update);
// router.delete('/users', UserCtrl.delete);
router.post(
  '/auth/signup',
  registerValidations,
  handleValidationErrors,
  UserCtrl.create
);
router.post(
  '/auth/signin',
  passport.authenticate('local', {
    session: false,
  }),
  UserCtrl.afterSignIn
);

export default router;
