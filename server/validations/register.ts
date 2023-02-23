import { body } from 'express-validator';

export const registerValidations = [
  body('email', 'Введите E-mail')
    .isEmail()
    .withMessage('Неверный E-mail')
    .isLength({ min: 10, max: 50 })
    .withMessage('Допустимая длина почты от 10 до 50'),

  body('fullName', 'Введите имя')
    .isString()
    .isLength({ min: 2 })
    .withMessage('Минимальная длина имени 2 символа')
    .isLength({ max: 50 })
    .withMessage('Максимальная длина имени 50 символов'),

  body('userName', 'Введите user-name')
    .isString()
    .isLength({ min: 5 })
    .withMessage("Минимальная длина user-name'a 5 символов")
    .isLength({ max: 50 })
    .withMessage("Максимальная длина user-name'a 50 символов"),

  body('password', 'Введите пароль')
    .isString()
    .isLength({ min: 8 })
    .withMessage('Минимальная длина пароля 8 символов')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Пароли не совпадают');
      } else {
        return value;
      }
    }),
];
