import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTweet, setTweet } from '../redux/ducks/tweet/actionCreators';
import {
  selectIsLoadingState,
  selectTweetItem,
} from '../redux/ducks/tweet/selectors';

import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { formatDate } from '../utils/formatDate';

const FullTweet: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const params = useParams();
  const tweet = useSelector(selectTweetItem) || [];
  const tweetData = tweet[0];
  const isLoading = useSelector(selectIsLoadingState);
  console.log(isLoading);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchTweet(params.id));
    }

    return () => {
      dispatch(setTweet(undefined));
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <CircularProgress
          color="primary"
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '150px',
            ml: 'auto',
            mr: 'auto',
            height: '50px',
            width: '50px',
          }}
        />
      ) : (
        tweetData && (
          <Stack
            sx={{
              padding: '20px',
              pb: '10px',
              borderBottom: '1px solid #eee',
              cursor: 'pointer',
              // '&:hover': { bgcolor: 'rgb(245,248,250)' },
              '&:hover': { bgcolor: grey[100] },
            }}
          >
            <Stack direction={'row'} mb="10px">
              <Avatar
                alt="Аватарка пользователя"
                sx={{ width: '50px', height: '50px', mr: '15px' }}
                src={tweetData.user.avatarUrl}
              />
              <Stack mb="5px">
                <Typography fontWeight={'bold'} mr="10px">
                  {tweetData.user.fullName}
                </Typography>
                <Typography color={'textSecondary'} mr="5px">
                  {tweetData.user.userName}
                </Typography>
              </Stack>
            </Stack>
            <Typography mb={'20px'} fontSize={'18px'}>
              {tweetData.text}
            </Typography>
            <Typography mb={'10px'} color={'textSecondary'}>
              {formatDate(new Date(tweetData.createdAt))}
            </Typography>
            <Box
              sx={{
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: grey[200],
                p: '10px 0',
              }}
            >
              <Typography color={'textSecondary'}>
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginRight: '5px',
                  }}
                >
                  {tweetData.likes.length}
                </span>
                отметок «Нравится»
              </Typography>
            </Box>
            <Box>
              <Stack
                direction={'row'}
                justifyContent={'space-around'}
                // maxWidth="400px"
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
                </Box>
                <IconButton
                  sx={{ mr: '5px', '&:hover': { color: 'primary.main' } }}
                >
                  <FileUploadOutlinedIcon />
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        )
      )}
    </>
  );
};

export default FullTweet;
