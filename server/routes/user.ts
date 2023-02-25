import express from 'express';
import { registerValidations } from '../validations/register';
import handleValidationErrors from '../middleware/handleValidationErrors';
import { UserCtrl } from '../controllers/UserController';
import { passport } from '../core/signIn';

const router = express.Router();

router.get('/', UserCtrl.index);
router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  UserCtrl.getUserInfo
);
router.get('/verify', UserCtrl.verify);
// router.patch('/users', UserCtrl.update);
// router.delete('/users', UserCtrl.delete);
router.post(
  '/signup',
  registerValidations,
  handleValidationErrors,
  UserCtrl.create
);
router.post(
  '/signin',
  passport.authenticate('local', {
    session: false,
  }),
  UserCtrl.afterSignIn
);
router.get('/:id', UserCtrl.show);

export default router;
