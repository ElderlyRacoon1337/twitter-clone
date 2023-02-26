import {
  Alert,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar,
  Stack,
  TextField,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthApi } from '../services/AuthApi';
import { useState } from 'react';

const signInSchema = yup
  .object({
    username: yup.string().required('Введите почту или Username'),
    password: yup
      .string()
      .min(8, 'Минимальная длина пароля 8 символов')
      .required('Введите пароль'),
  })
  .required();
type FormData = yup.InferType<typeof signInSchema>;

const signUpSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

interface AuthModalProps {
  open: boolean;
  setOpen: any;
  isSignUp: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({
  open,
  setOpen,
  isSignUp,
}): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signInSchema),
  });

  const [errorSnack, setErrorSnack] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = async (data: any) => {
    try {
      const userData = await AuthApi.signIn(data);
      setOpen(false);
    } catch (error) {
      setErrorSnack(true);
    }
  };

  const handleCloseSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorSnack(false);
  };

  return (
    <Dialog
      open={open}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '30px',
        },
      }}
      onClose={handleClose}
    >
      <Snackbar
        open={errorSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={handleCloseSnack}
          sx={{
            width: '100%',
            bgcolor: 'error.main',
            borderRadius: '10px',
            '& .MuiAlert-icon, .MuiAlert-message, .MuiAlert-action': {
              color: 'white',
            },
          }}
        >
          Неверный логин или пароль
        </Alert>
      </Snackbar>
      <Stack
        alignItems={'center'}
        maxWidth={'400px'}
        sx={{ p: 2, pt: 3, px: 1, borderRadius: 20 }}
      >
        <TwitterIcon color="primary" sx={{ fontSize: '40px' }} />
        {isSignUp ? (
          <>
            <DialogTitle fontWeight={'bold'}>
              Создайте учетную запись
            </DialogTitle>

            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Имя"
                type="text"
                fullWidth
                variant="filled"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Адрес электронной почты"
                type="email"
                fullWidth
                variant="filled"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Пароль"
                type="password"
                fullWidth
                variant="filled"
              />
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{ borderRadius: 20, mt: 2, p: '10px 0' }}
                fullWidth
              >
                Далее
              </Button>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle fontWeight={'bold'}>Войти в Твиттер</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <TextField
                  {...register('username')}
                  helperText={errors.username?.message?.toString()}
                  error={errors.username?.toString() ? true : false}
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Адрес электронной почты или Username"
                  type="text"
                  fullWidth
                  variant="filled"
                />
                <TextField
                  {...register('password')}
                  helperText={errors.password?.message?.toString()}
                  error={errors.password?.message ? true : false}
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Пароль"
                  type="password"
                  fullWidth
                  variant="filled"
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
            </DialogContent>
          </>
        )}
      </Stack>
    </Dialog>
  );
};

export default AuthModal;
