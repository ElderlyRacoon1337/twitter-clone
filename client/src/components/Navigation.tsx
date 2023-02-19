import { Twitter } from '@mui/icons-material';
import {
  Button,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
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

const Navigation: React.FC = (): React.ReactElement => {
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
    <NavBarStyled
      sx={{
        width: 'auto',
      }}
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0,
          pr: '30px',
          position: 'fixed',
        }}
      >
        <ListItem sx={{ pt: 0, pb: 0 }}>
          <IconButton sx={{ ml: '-10px' }}>
            <Twitter fontSize="large" color="primary" />
          </IconButton>
        </ListItem>
        <ListItemButtonStyled>
          <HomeOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <NavigationText variant="h6" fontWeight={800}>
            Главная
          </NavigationText>
        </ListItemButtonStyled>
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
            variant="contained"
            sx={{
              borderRadius: '20px',
              mt: '20px',
              p: '10px 20px',
              fontWeight: 'bold',
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
    </NavBarStyled>
  );
};

export default Navigation;
