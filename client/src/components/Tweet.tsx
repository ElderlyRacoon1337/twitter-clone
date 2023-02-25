import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';

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

const Tweet: React.FC<TweetProps> = ({ tweetData }): React.ReactElement => {
  return (
    <Link
      to={`/tweet/${tweetData._id}`}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Stack
        direction={'row'}
        sx={{
          padding: '20px',
          borderBottom: '1px solid #eee',
          cursor: 'pointer',
          // '&:hover': { bgcolor: 'rgb(245,248,250)' },
          '&:hover': { bgcolor: grey[100] },
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
            <Typography mr="5px">·</Typography>
            <Typography color={'textSecondary'}>
              {formatDate(new Date(tweetData.createdAt))}
            </Typography>
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
                sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
              >
                <ModeCommentOutlinedIcon />
              </IconButton>
              <Typography>{tweetData.comments.length}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
              >
                <RepeatOutlinedIcon />
              </IconButton>
              <Typography>{tweetData.retweets.length}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <Typography>{tweetData.likes.length}</Typography>
            </Box>
            <IconButton
              sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
            >
              <FileUploadOutlinedIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Link>
  );
};

export default Tweet;
