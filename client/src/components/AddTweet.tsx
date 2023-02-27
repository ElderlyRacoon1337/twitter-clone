import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  Stack,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAddTweet,
  setFormLoadingState,
} from '../redux/ducks/tweets/actionCreators';
import {
  selectIsAddedTweet,
  selectIsErrorAddedTweet,
  selectIsLoadingAddedTweet,
} from '../redux/ducks/tweets/selectors';
import { LoadingState } from '../redux/ducks/tweets/contracts/state';
import { selectUserData } from '../redux/ducks/user/selectors';

interface AddTweetProps {
  setOpen?: any;
}

const AddTweet: React.FC<AddTweetProps> = ({ setOpen }): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
  const textLimitPercent = (text.length / 280) * 100;
  const [openSnack, setOpenSnack] = useState(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);

  const isSuccess = useSelector(selectIsAddedTweet);
  const isError = useSelector(selectIsErrorAddedTweet);
  const isLoading = useSelector(selectIsLoadingAddedTweet);
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (isSuccess) {
      setOpenSnack(true);
      dispatch(setFormLoadingState(LoadingState.NEVER));
      setTimeout(() => {
        setOpenSnack(false);
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setErrorSnack(true);
      dispatch(setFormLoadingState(LoadingState.NEVER));
      setTimeout(() => {
        setErrorSnack(false);
      }, 3000);
    }
  }, [isError]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
    setErrorSnack(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
      e.currentTarget.focus();
    }
  };

  const handleClickAddTweet = (): void => {
    dispatch(fetchAddTweet(text));
    setText('');
    if (setOpen) {
      setOpen(false);
    }
  };

  return (
    <Stack
      direction={'row'}
      sx={{
        padding: '20px',
      }}
    >
      <Snackbar open={openSnack} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          sx={{
            width: '100%',
            bgcolor: 'primary.main',
            borderRadius: '10px',
            '& .MuiAlert-icon, .MuiAlert-message, .MuiAlert-action': {
              color: 'white',
            },
          }}
        >
          Твит успешно опубликован
        </Alert>
      </Snackbar>
      <Snackbar open={errorSnack} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          sx={{
            width: '100%',
            bgcolor: 'error.main',
            borderRadius: '10px',
            '& .MuiAlert-icon, .MuiAlert-message, .MuiAlert-action': {
              color: 'white',
            },
          }}
        >
          Ошибка при публикации твита
        </Alert>
      </Snackbar>
      <Box>
        <Avatar
          alt="Аватарка пользователя"
          sx={{ width: '50px', height: '50px', mr: '15px' }}
          src={userData?.avatarUrl}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <TextareaAutosize
          maxRows={15}
          autoFocus
          onChange={handleChange}
          value={text}
          placeholder="Что происходит?"
          // maxLength={350}
          style={{
            border: 'none',
            width: '400px',
            outline: 'none',
            resize: 'none',
            fontSize: 20,
            fontFamily: 'inherit',
            marginTop: '10px',
            backgroundColor: 'transparent',
            color: 'inherit',
          }}
        />
        <Stack direction={'row'} justifyContent={'space-between'} mt="30px">
          <Box>
            <IconButton
              sx={{
                mr: '5px',
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <InsertPhotoOutlinedIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'primary.main',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <SentimentSatisfiedOutlinedIcon />
            </IconButton>
          </Box>
          <Stack direction={'row'} alignItems={'center'}>
            {text && (
              <>
                {text.length > 350 ? (
                  <Typography mr={'10px'} color={'error.light'}>
                    {280 - text.length}
                  </Typography>
                ) : textLimitPercent > 100 && text.length <= 350 ? (
                  <Typography
                    mr={'10px'}
                    color={'warning.light'}
                    // sx={{ fontSize: '12px' }}
                  >
                    {280 - text.length}
                  </Typography>
                ) : (
                  <CircularProgress
                    variant="determinate"
                    value={textLimitPercent}
                    size={20}
                    sx={{
                      mr: '10px',
                      zIndex: 1,
                      color: 'primary.main',
                    }}
                  />
                )}
              </>
            )}
            <Button
              onClick={handleClickAddTweet}
              disabled={!text || text.length > 350}
              variant="contained"
              sx={{ borderRadius: '20px', width: '110px', height: '40px' }}
            >
              {!isLoading ? (
                <>Твитнуть</>
              ) : (
                <CircularProgress
                  size={20}
                  sx={{
                    color: 'white',
                  }}
                />
              )}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddTweet;
