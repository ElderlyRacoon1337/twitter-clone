import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadedState } from '../redux/ducks/user/selectors';
import { fetchSignupData } from '../redux/ducks/user/actionCreators';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formSchema = yup
    .object({
      password: yup
        .string()
        .min(8, 'Минимальная длина пароля 8 символов')
        .required('Введите пароль'),
      userName: yup.string().required('Введите username'),
      fullName: yup.string().required('Введите имя'),
      email: yup
        .string()
        .email('Неверный формат почты')
        .required('Введите почту'),
      password2: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Пароли не совпадают')
        .required('Повторите пароль'),
    })
    .required();
  type FormData = yup.InferType<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const isSuccess = useSelector(selectIsLoadedState);

  const handleSignUp = (data: any) => {
    dispatch(fetchSignupData(data));
  };

  useEffect(() => {
    if (isSuccess) {
      reset({
        userName: '',
        password: '',
        email: '',
        password2: '',
        fullName: '',
      });
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <TextField
        {...register('fullName')}
        helperText={errors.fullName?.message?.toString()}
        error={errors.fullName?.toString() ? true : false}
        autoFocus
        margin="dense"
        id="name"
        label="Имя"
        type="text"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <TextField
        {...register('email')}
        helperText={errors.email?.message?.toString()}
        error={errors.email?.toString() ? true : false}
        margin="dense"
        id="name"
        label="Адрес электронной почты"
        type="email"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <TextField
        {...register('userName')}
        helperText={
          errors?.userName?.message?.toString()
            ? errors.userName?.message?.toString()
            : 'username будет отображаться с символом @ в начале'
        }
        error={errors.userName?.toString() ? true : false}
        margin="dense"
        id="name"
        label="Username"
        type="text"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <TextField
        {...register('password')}
        helperText={errors.password?.message?.toString()}
        error={errors.password?.toString() ? true : false}
        margin="dense"
        id="name"
        label="Пароль"
        type="password"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <TextField
        {...register('password2')}
        helperText={errors.password2?.message?.toString()}
        error={errors.password2?.toString() ? true : false}
        margin="dense"
        id="name"
        label="Повторите пароль"
        type="password"
        fullWidth
        variant="filled"
        sx={{ mb: '20px' }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ borderRadius: 20, mt: 2, p: '10px 0' }}
        fullWidth
      >
        Далее
      </Button>
    </form>
  );
};
