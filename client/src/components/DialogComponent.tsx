import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

interface DialogProps {
  open: boolean;
  setOpen: any;
  isSignUp: boolean;
}

const DialogComponent: React.FC<DialogProps> = ({
  open,
  setOpen,
  isSignUp,
}): React.ReactElement => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack
        alignItems={'center'}
        maxWidth={'400px'}
        sx={{ pt: 2, borderRadius: 20 }}
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
                sx={{ borderRadius: 20, mt: 2 }}
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
                sx={{ borderRadius: 20, mt: 2 }}
                fullWidth
              >
                Войти
              </Button>
            </DialogContent>
          </>
        )}
      </Stack>
    </Dialog>
  );
};

export default DialogComponent;
