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
} from '../redux/ducks/tweets/selectors';
import { fetchTweets } from '../redux/ducks/tweets/actionCreators';
import { fetchTags } from '../redux/ducks/tags/actionCreators';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FullTweet from './FullTweet';
import Profile from './Profile';

const Content: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoadingState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
  }, [dispatch]);

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Stack sx={{ flex: 6.5 }}>
      <Box
        sx={{
          minHeight: '100vh',
          borderRight: '1px solid',
          borderLeft: '1px solid',
          borderColor: 'divider',
          position: 'relative',
        }}
      >
        <Routes>
          {/* <Route path="/" element={<>Hello world</>} /> */}
          <Route path="/" element={<Navigate to={'/home'} />} />
          <Route
            path="/home"
            element={
              <>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    position: 'sticky',
                    top: '0',
                    p: '7px 20px',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'prozr',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={'bold'}>
                    Главная
                  </Typography>
                </Stack>
                <AddTweet />
                <Box
                  sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
                ></Box>
                <Box sx={{ position: 'relative' }}>
                  {!isLoading ? (
                    // @ts-ignore
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
                    position: 'sticky',
                    top: '0',
                    p: '5px 10px',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'prozr',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1,
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'}>
                    <IconButton sx={{ mr: '10px' }} onClick={handleClickBack}>
                      <ArrowBackIcon fontSize="small" sx={{ color: 'logo' }} />
                    </IconButton>
                    <Typography variant="h6" fontWeight={'bold'}>
                      Теги
                    </Typography>
                  </Stack>
                </Stack>
                <AddTweet />
                <Box
                  sx={{ borderBottom: '13px solid', borderColor: 'divider' }}
                ></Box>
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
                    position: 'sticky',
                    top: '0',
                    p: '5px 10px',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'prozr',
                    backdropFilter: 'blur(10px)',
                    zIndex: 1,
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'}>
                    <IconButton sx={{ mr: '10px' }} onClick={handleClickBack}>
                      <ArrowBackIcon fontSize="small" sx={{ color: 'logo' }} />
                    </IconButton>
                    <Typography variant="h6" fontWeight={'bold'}>
                      Твит
                    </Typography>
                  </Stack>
                </Stack>
                <Box>
                  <FullTweet />
                </Box>
              </>
            }
          />
          <Route
            path="/:username"
            element={<Profile handleClickBack={handleClickBack} />}
          />
        </Routes>
      </Box>
    </Stack>
  );
};

export default Content;
