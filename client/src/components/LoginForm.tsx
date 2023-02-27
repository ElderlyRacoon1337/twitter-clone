import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadedState } from '../redux/ducks/user/selectors';
import { fetchSigninData } from '../redux/ducks/user/actionCreators';
import { useEffect } from 'react';

const formSchema = yup
  .object({
    usernameOrEmail: yup.string().required('Введите почту или username'),
    password: yup
      .string()
      .min(8, 'Минимальная длина пароля 8 символов')
      .required('Введите пароль'),
  })
  .required();
type FormData = yup.InferType<typeof formSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const dispatch = useDispatch();
  const isSuccess = useSelector(selectIsLoadedState);

  const handleSignIn = (data: any) => {
    dispatch(fetchSigninData(data));
  };

  useEffect(() => {
    if (isSuccess) {
      reset({ usernameOrEmail: '', password: '' });
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <TextField
        {...register('usernameOrEmail')}
        helperText={errors.usernameOrEmail?.message?.toString()}
        error={errors.usernameOrEmail?.toString() ? true : false}
        autoFocus
        margin="dense"
        id="name"
        label="Адрес электронной почты или username"
        type="text"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <TextField
        {...register('password')}
        helperText={errors.password?.message?.toString()}
        error={errors.password?.message ? true : false}
        margin="dense"
        id="name"
        label="Пароль"
        type="password"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ borderRadius: 20, mt: 2, p: '10px 0' }}
        fullWidth
      >
        Войти
      </Button>
    </form>
  );
};
