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
import { Route, Routes, useNavigate } from 'react-router-dom';
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

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Stack sx={{ flex: 7 }}>
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
          <Route
            path="/"
            element={
              <>
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  sx={{
                    // position: 'fixed',
                    p: '10px 20px',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    background: 'background.default',
                    // opacity: '0.8',
                    // backdropFilter: 'blur(10px)',
                    zIndex: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={'bold'}>
                    Главная
                  </Typography>
                  <AutoAwesomeOutlinedIcon
                    color="primary"
                    sx={{ fontSize: '30px', bgcolor: 'transparent' }}
                  />
                </Stack>
                <AddTweet />
                <Box
                  sx={{ borderBottom: '13px solid', borderColor: 'divider' }}
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
                    p: '10px 20px',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    // position: 'fixed',
                    // opacity: '0.8',
                    background: 'background',
                    // backdropFilter: 'blur(5px)',
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
                    sx={{ fontSize: '30px', bgcolor: 'transparent' }}
                  />
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
                    p: '10px 20px',
                    borderBottom: '1px solid',
                    // position: 'fixed',
                    borderColor: 'divider',
                    background: 'background.default',
                    // opacity: '0.8',
                    // backdropFilter: 'blur(5px)',
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
                    sx={{ fontSize: '30px', bgcolor: 'transparent' }}
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
