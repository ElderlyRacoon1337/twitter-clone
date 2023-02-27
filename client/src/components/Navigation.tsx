import { MoreHorizOutlined, Twitter } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Dialog,
  Hidden,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/Person2Outlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import AddTweet from './AddTweet';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserData } from '../redux/ducks/user/selectors';

const Navigation: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const userData = useSelector(selectUserData);

  const ListItemButtonStyled = styled(ListItemButton)({
    transition: '0.15s all ease-in-out',
    marginTop: '10px',
    borderRadius: '30px',
    '&:hover': { color: lightBlue[600] },
  });

  const NavigationText = styled(Typography)(({ theme }) => ({
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    textAlign: 'center',
  }));

  const NavBarStyled = styled(Stack)(({ theme }) => ({
    flex: 3,
    [theme.breakpoints.down('md')]: {
      flex: 1,
    },
    alignItems: 'center',
  }));

  return (
    <Stack flex={3}>
      <NavBarStyled
        sx={{
          width: 'auto',
          position: 'sticky',
          top: '0',
          maxHeight: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 0,
            pr: '30px',
          }}
        >
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <Link to="/">
              <IconButton sx={{ ml: '-10px' }}>
                <Twitter fontSize="large" sx={{ color: 'logo' }} />
              </IconButton>
            </Link>
          </ListItem>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItemButtonStyled>
              <HomeOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
              <NavigationText variant="h6" fontWeight={800}>
                Главная
              </NavigationText>
            </ListItemButtonStyled>
          </Link>
          <ListItemButtonStyled>
            <TagIcon sx={{ mr: '15px', fontSize: '30px' }} />
            <NavigationText variant="h6" fontWeight={500}>
              Поиск
            </NavigationText>
          </ListItemButtonStyled>
          <ListItemButtonStyled>
            <NotificationsOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
            <NavigationText variant="h6" fontWeight={500}>
              Уведомления
            </NavigationText>
          </ListItemButtonStyled>
          <ListItemButtonStyled>
            <MailOutlineIcon
              fontSize="large"
              sx={{ mr: '15px', fontSize: '30px' }}
            />
            <NavigationText variant="h6" fontWeight={500}>
              Сообщения
            </NavigationText>
          </ListItemButtonStyled>
          <ListItemButtonStyled>
            <BookmarkBorderIcon sx={{ mr: '15px', fontSize: '30px' }} />
            <NavigationText variant="h6" fontWeight={500}>
              Закладки
            </NavigationText>
          </ListItemButtonStyled>
          <ListItemButtonStyled>
            <ArticleOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
            <NavigationText variant="h6" fontWeight={500}>
              Списки
            </NavigationText>
          </ListItemButtonStyled>
          <ListItemButtonStyled>
            <PersonOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
            <NavigationText variant="h6" fontWeight={500}>
              Профиль
            </NavigationText>
          </ListItemButtonStyled>
          <ListItemButtonStyled>
            <MoreHorizIcon sx={{ mr: '15px', fontSize: '30px' }} />
            <NavigationText variant="h6" fontWeight={500}>
              Еще
            </NavigationText>
          </ListItemButtonStyled>
          <Hidden mdDown>
            <Button
              onClick={(e) => setOpen(true)}
              variant="contained"
              sx={{
                borderRadius: '30px',
                mt: '20px',
                p: '14px 30px',
                fontWeight: '800',
                bgcolor: 'rgb(29, 155, 240)',
                boxShadow: 'rgb(0 0 0 / 8%) 0px 8px 28px',
              }}
            >
              Твитнуть
            </Button>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              sx={{ bgcolor: 'primary.main', color: 'white', width: '40px' }}
            >
              <AddIcon />
            </IconButton>
          </Hidden>
        </List>
        <ListItemButton
          sx={{
            borderRadius: '50px',
            mb: '10px',
            p: '5px 15px',
            width: '90%',
            flex: 0,
            '&:hover': {
              bgcolor: 'customGrey',
            },
          }}
        >
          <ListItemAvatar>
            <Avatar src={userData?.avatarUrl} />
          </ListItemAvatar>
          <ListItemText
            primary={userData?.fullName}
            secondary={'@' + userData?.userName}
            sx={{ overflow: 'hidden', maxWidth: '120px', mr: '15px' }}
          />
          <Icon>
            <MoreHorizOutlined />
          </Icon>
        </ListItemButton>
      </NavBarStyled>
      <Dialog
        transitionDuration={0}
        open={open}
        onClose={(e) => setOpen(false)}
        sx={{
          backgroundColor: 'rgba(147, 172, 204, 0.5)',
          transition: '0s all !important',
          '& .MuiBackdrop-root .MuiModal-backdrop .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop':
            {
              transition: '0s all !important',
            },
          '& .MuiDialog-container .MuiDialog-scrollPaper .css-hz1bth-MuiDialog-container':
            {
              transition: '0s all !important',
            },
          '& .MuiPaper-root': {
            transition: 'none',
            borderRadius: '20px',
            bottom: '100px',
            bgcolor: 'background',
            backgroundImage: 'none',
          },
        }}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          sx={{
            width: '100%',
            height: '55px',
            borderBottom: '2px solid',
            borderColor: 'divider',
          }}
        >
          <IconButton onClick={(e) => setOpen(false)} sx={{ ml: '10px' }}>
            <CloseIcon color="primary" />
          </IconButton>
        </Stack>
        <AddTweet setOpen={setOpen} />
      </Dialog>
    </Stack>
  );
};

export default Navigation;
