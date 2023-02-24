import { body } from 'express-validator';

export const createTweetValidations = [
  body('text', 'Введите текст')
    .isString()
    .isLength({ max: 350 })
    .withMessage('Максимальная длина 350 символов'),
];
