import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';

passport.use(
  new LocalStrategy((usernameOrEmail: string, password: string, done: any) => {
    UserModel.findOne(
      {
        $or: [{ userName: usernameOrEmail }, { email: usernameOrEmail }],
      },
      (err: any, user: any) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: 'Incorrect username or password.',
          });
        }

        const isValidPassword = bcrypt.compareSync(password, user.passwordHash);

        if (!isValidPassword) {
          return done('Email or password is not valid');
        }

        return done(null, user);
      }
    );
  })
);

passport.use(
  new JWTstrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_JWT || 'sfj4iji4j',
    },
    (jwt_payload: any, done: any) => {
      UserModel.findById(jwt_payload._id, function (err: any, user: any) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

passport.serializeUser(function (user: any, done: any): void {
  done(null, user);
});

passport.deserializeUser(function (user: any, done: any) {
  done(null, user);
});

export { passport };
