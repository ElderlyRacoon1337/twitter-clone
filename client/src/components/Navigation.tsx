import { Twitter } from '@mui/icons-material';
import {
  Button,
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

const Navigation: React.FC = (): React.ReactElement => {
  const ListItemButtonStyled = styled(ListItemButton)({
    transition: '0.15s all ease-in-out',
    marginTop: '10px',
    borderRadius: '30px',
    '&:hover': { color: lightBlue[600] },
  });

  return (
    <Stack sx={{ flex: 3, width: 'auto' }}>
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
          <Typography variant="h6" fontWeight={800}>
            Главная
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <TagIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <Typography variant="h6" fontWeight={500}>
            Поиск
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <NotificationsOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <Typography variant="h6" fontWeight={500}>
            Уведомления
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <MailOutlineIcon
            fontSize="large"
            sx={{ mr: '15px', fontSize: '30px' }}
          />
          <Typography variant="h6" fontWeight={500}>
            Сообщения
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <BookmarkBorderIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <Typography variant="h6" fontWeight={500}>
            Закладки
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <ArticleOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <Typography variant="h6" fontWeight={500}>
            Списки
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <PersonOutlinedIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <Typography variant="h6" fontWeight={500}>
            Профиль
          </Typography>
        </ListItemButtonStyled>
        <ListItemButtonStyled>
          <MoreHorizIcon sx={{ mr: '15px', fontSize: '30px' }} />
          <Typography variant="h6" fontWeight={500}>
            Еще
          </Typography>
        </ListItemButtonStyled>
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
      </List>
    </Stack>
  );
};

export default Navigation;
