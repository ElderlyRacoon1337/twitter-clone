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
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import mediumZoom from 'medium-zoom';

const FullTweet: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const params = useParams();
  const tweetData = useSelector(selectTweetItem);
  const isLoading = useSelector(selectIsLoadingState);

  useEffect(() => {
    // @ts-ignore
    window.mediumZoom = mediumZoom;
    mediumZoom('.image', {
      background: 'rgba(147, 172, 204, 0.5)',
      margin: 100,
    });
  }, [isLoading]);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchTweet(params.id));
    }

    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, params.id]);

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
              borderBottom: '1px solid',
              borderColor: 'divider',
              cursor: 'pointer',
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
                  {'@' + tweetData.user.userName}
                </Typography>
              </Stack>
            </Stack>
            <Typography mb={'20px'} fontSize={'18px'}>
              {tweetData.text}
            </Typography>
            {tweetData.images.length ? (
              <img
                className="image"
                src={tweetData.images[0]}
                style={{
                  maxWidth: '100%',
                  borderRadius: '5px',
                  marginBottom: '10px',
                }}
              />
            ) : (
              ''
            )}
            {tweetData.images.length ? (
              <Stack
                direction={'row'}
                alignItems={'flex-end'}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
              >
                {tweetData.images.slice(1).map((image) => (
                  <img
                    src={image}
                    className="image"
                    style={{
                      marginRight: '10px',
                      flex: '0 0 30%',
                      height: '110px',
                      borderRadius: '5px',
                      marginBottom: '10px',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: 'url(' + image + ')',
                    }}
                  ></img>
                ))}
              </Stack>
            ) : (
              ''
            )}
            <Stack direction={'row'}>
              <Typography mb={'10px'} mr="5px" color={'textSecondary'}>
                {format(new Date(tweetData.createdAt), 'H:mm:ss', {
                  locale: ru,
                })}
              </Typography>
              <Typography mr="5px" color={'textSecondary'}>
                ·
              </Typography>
              <Typography mb={'10px'} color={'textSecondary'}>
                {format(new Date(tweetData.createdAt), 'dd MMM yyyy г.', {
                  locale: ru,
                })}
              </Typography>
            </Stack>
            <Box
              sx={{
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider',
                p: '10px 0',
              }}
            >
              <Typography color={'textSecondary'}>
                <Box
                  sx={{
                    display: 'inline',
                    fontWeight: 'bold',
                    marginRight: '5px',
                    color: 'text.primary',
                  }}
                >
                  {tweetData.likes.length}
                </Box>
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
