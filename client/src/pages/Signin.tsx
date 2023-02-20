import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import DialogComponent from '../components/DialogComponent';

const Signin = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          flex: 1,
          bgcolor: 'primary.light',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <TwitterIcon
          color="primary"
          sx={{ position: 'absolute', fontSize: '2000px' }}
        />
        <List sx={{ color: 'white' }}>
          <ListItem sx={{ mb: '10px' }}>
            <ListItemIcon>
              <SearchIcon sx={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <Typography variant="h6">
              Читайте о том, что вам интересно.
            </Typography>
          </ListItem>
          <ListItem sx={{ mb: '10px' }}>
            <ListItemIcon>
              <GroupIcon sx={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <Typography variant="h6">Узнайте, о чем говорят в мире.</Typography>
          </ListItem>
          <ListItem sx={{ mb: '10px' }}>
            <ListItemIcon>
              <MessageIcon sx={{ color: 'white', fontSize: '30px' }} />
            </ListItemIcon>
            <Typography variant="h6">Присоединяйтесь к общению</Typography>
          </ListItem>
        </List>
      </Stack>
      <Stack alignItems={'center'} justifyContent={'center'} sx={{ flex: 1 }}>
        <Box sx={{ maxWidth: '380px' }}>
          <TwitterIcon color="primary" sx={{ fontSize: 50, mb: '10px' }} />
          <Typography variant="h4" fontWeight={'bold'} sx={{ mb: '50px' }}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography fontWeight={500} mb="20px">
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Stack>
            <Button
              variant="contained"
              sx={{
                borderRadius: '20px',
                color: 'white',
                mb: '20px',
                p: '10px 0',
              }}
              onClick={(e) => {
                handleClickOpen();
                setIsSignUp(true);
              }}
            >
              Зарегистрироваться
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: '20px', p: '10px 0' }}
              onClick={(e) => {
                handleClickOpen();
                setIsSignUp(false);
              }}
            >
              Войти
            </Button>
          </Stack>
        </Box>
      </Stack>
      <DialogComponent setOpen={setOpen} open={open} isSignUp={isSignUp} />
    </Box>
  );
};

export default Signin;
