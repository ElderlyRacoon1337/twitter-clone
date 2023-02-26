import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { MoreVertOutlined } from '@mui/icons-material';
import { useState } from 'react';

interface TweetProps {
  tweetData: {
    user: {
      _id: any;
      fullName: string;
      userName: string;
      avatarUrl?: string;
    };
    _id: any;
    text: string;
    comments: string[];
    retweets: string[];
    likes: string[];
    createdAt: string;
  };
}

const options = ['Редактировать', 'Удалить'];

const Tweet: React.FC<TweetProps> = ({ tweetData }): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleClickTweet = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(tweetData._id);
    navigate(`/tweet/${tweetData._id}`);
  };
  return (
    <Box
      onClick={(e) => handleClickTweet(e)}
      sx={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Stack
        direction={'row'}
        sx={{
          padding: '20px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          cursor: 'pointer',
          '&:hover': { bgcolor: 'customGrey' },
        }}
      >
        <Box>
          <Avatar
            alt="Аватарка пользователя"
            sx={{ width: '50px', height: '50px', mr: '15px' }}
            src={tweetData?.user?.avatarUrl}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction={'row'} mb="5px">
            <Typography fontWeight={'bold'} mr="10px">
              {tweetData.user.fullName}
            </Typography>
            <Typography color={'textSecondary'} mr="5px">
              {tweetData.user.userName}
            </Typography>
            <Typography color={'textSecondary'} mr="5px">
              ·
            </Typography>
            <Typography color={'textSecondary'} flex={1}>
              {formatDate(new Date(tweetData.createdAt))}
            </Typography>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={(event) => {
                event.stopPropagation();
                setAnchorEl(event.currentTarget);
              }}
              sx={{ mt: '-10px' }}
            >
              <MoreVertOutlined />
            </IconButton>
            <Menu
              onClick={(e) => e.stopPropagation()}
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={() => setAnchorEl(null)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Stack>
          <Typography>{tweetData.text}</Typography>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            maxWidth="400px"
            mt={'5px'}
            ml={'-10px'}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
              >
                <ModeCommentOutlinedIcon />
              </IconButton>
              <Typography>{tweetData.comments.length}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
              >
                <RepeatOutlinedIcon />
              </IconButton>
              <Typography>{tweetData.retweets.length}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <Typography>{tweetData.likes.length}</Typography>
            </Box>
            <IconButton
              onClick={(e) => e.stopPropagation()}
              sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
            >
              <FileUploadOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Tweet;
