import {
  Alert,
  Dialog,
  DialogContent,
  DialogTitle,
  Snackbar,
  Stack,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsAuthError,
  selectIsLoadedState,
} from '../redux/ducks/user/selectors';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

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
  const [errorSnack, setErrorSnack] = useState(false);
  const isSuccess = useSelector(selectIsLoadedState);
  const isError = useSelector(selectIsAuthError);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setErrorSnack(true);
      setTimeout(() => {
        setErrorSnack(false);
      }, 3000);
    }
  }, [isError]);

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
      transitionDuration={0}
      sx={{
        backgroundColor: 'rgba(147, 172, 204, 0.5)',
        '& .MuiPaper-root': {
          borderRadius: '30px',
          bgcolor: 'background',
          backgroundImage: 'none',
        },
      }}
      onClose={handleClose}
    >
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={errorSnack}
        onClose={handleCloseSnack}
      >
        <Alert
          severity="warning"
          onClose={handleCloseSnack}
          sx={{
            width: '100%',
            bgcolor: 'error.dark',
            borderRadius: '10px',
            '& .MuiAlert-icon, .MuiAlert-message, .MuiAlert-action': {
              color: 'white',
            },
          }}
        >
          {!isSignUp ? 'Неверный логин или пароль' : 'Ошибка регистрации'}
        </Alert>
      </Snackbar>
      <Stack
        alignItems={'center'}
        maxWidth={'500px'}
        sx={{ p: 2, pt: 3, px: 1, pb: 0.5, borderRadius: 20 }}
      >
        <TwitterIcon color="primary" sx={{ fontSize: '40px' }} />
        {isSignUp ? (
          <>
            <DialogTitle fontWeight={'bold'}>
              Создайте учетную запись
            </DialogTitle>

            <DialogContent>
              <RegisterForm />
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle fontWeight={'bold'}>Войти в Твиттер</DialogTitle>
            <DialogContent>
              <LoginForm />
            </DialogContent>
          </>
        )}
      </Stack>
    </Dialog>
  );
};

export default AuthModal;
