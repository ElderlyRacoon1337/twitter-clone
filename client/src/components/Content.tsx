import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import {
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import AddTweet from './AddTweet';
import Tweet from './Tweet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoadingState,
  selectTweetsItems,
} from '../store/ducks/tweets/selectors';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { fetchTags } from '../store/ducks/tags/actionCreators';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullTweet from './FullTweet';

const Content: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoadingState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  const tweetData = {
    user: {
      fullName: 'Nigerka27',
      userName: 'nigerka1488',
      avatarUrl:
        'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-732x549.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus sint voluptate, atque ut, placeat unde explicabo, quidem cupiditate facilis quis iure id incidunt quasi corrupti est dolor magni numquam.',
    commentsCount: 2,
    retweetsCount: 1,
    likesCount: 3,
    createdAt: '17 февраля в 20:34',
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Stack sx={{ flex: 7 }}>
      <Box
        sx={{
          minHeight: '100vh',
          borderRight: '1px solid #eee',
          borderLeft: '1px solid #eee',
          position: 'relative',
        }}
      >
        <Routes>
          {/* <Route path="/" element={<>Hello world</>} /> */}
          <Route
            path="/"
            element={
              <>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    p: '10px 20px',
                    borderBottom: '1px solid #eee',
                    // position: 'fixed',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={'bold'}>
                    Главная
                  </Typography>
                  <AutoAwesomeOutlinedIcon
                    color="primary"
                    sx={{ fontSize: '30px', bgcolor: 'white' }}
                  />
                </Stack>
                <AddTweet />
                <Box sx={{ borderBottom: '13px solid #eee' }}></Box>
                <Box sx={{ position: 'relative' }}>
                  {!isLoading ? (
                    tweets.map((el) => <Tweet key={el._id} tweetData={el} />)
                  ) : (
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
                  )}
                </Box>
              </>
            }
          />
          <Route
            path="/search/*"
            element={
              <>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    p: '10px 20px',
                    borderBottom: '1px solid #eee',
                    // position: 'fixed',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 1,
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'}>
                    <IconButton sx={{ mr: '10px' }} onClick={handleClickBack}>
                      <ArrowBackIcon color="primary" />
                    </IconButton>
                    <Typography variant="h6" fontWeight={'bold'}>
                      Теги
                    </Typography>
                  </Stack>
                  <AutoAwesomeOutlinedIcon
                    color="primary"
                    sx={{ fontSize: '30px', bgcolor: 'white' }}
                  />
                </Stack>
                <AddTweet />
                <Box sx={{ borderBottom: '13px solid #eee' }}></Box>
                <Box sx={{ position: 'relative' }}></Box>
              </>
            }
          />
          <Route
            path="/tweet/:id"
            element={
              <>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    p: '10px 20px',
                    borderBottom: '1px solid #eee',
                    // position: 'fixed',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(5px)',
                    zIndex: 1,
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'}>
                    <IconButton sx={{ mr: '10px' }} onClick={handleClickBack}>
                      <ArrowBackIcon color="primary" />
                    </IconButton>
                    <Typography variant="h6" fontWeight={'bold'}>
                      Твит
                    </Typography>
                  </Stack>
                  <AutoAwesomeOutlinedIcon
                    color="primary"
                    sx={{ fontSize: '30px', bgcolor: 'white' }}
                  />
                </Stack>
                <Box>
                  <FullTweet />
                </Box>
              </>
            }
          />
        </Routes>
      </Box>
    </Stack>
  );
};

export default Content;
