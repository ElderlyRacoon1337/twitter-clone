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
import UploadImages from './UploadImages';
import { DeleteOutline } from '@mui/icons-material';
import { uploadImage } from '../utils/uploadImage';

interface AddTweetProps {
  setOpen?: any;
  open?: boolean;
}

export interface ImageObj {
  blobUrl: string;
  file: File;
}

const AddTweet: React.FC<AddTweetProps> = ({
  setOpen,
  open,
}): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
  const textLimitPercent = (text.length / 280) * 100;
  const [openSnack, setOpenSnack] = useState(false);
  const [errorSnack, setErrorSnack] = useState<boolean>(false);

  const isSuccess = useSelector(selectIsAddedTweet);
  const isError = useSelector(selectIsErrorAddedTweet);
  const isLoading = useSelector(selectIsLoadingAddedTweet);
  const userData = useSelector(selectUserData);
  const [images, setImages] = useState<ImageObj[]>([]);

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

  const removeImage = (obj: ImageObj) => {
    setImages((prev) => prev.filter((_obj) => _obj.blobUrl !== obj.blobUrl));
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
      e.currentTarget.focus();
    }
  };

  const handleClickAddTweet = async () => {
    dispatch(setFormLoadingState(LoadingState.LOADING));
    const urls: string[] = [];
    for (let i = 0; i < images.length; i++) {
      const url = await uploadImage(images[i].file);
      urls.push(url);
    }
    if (urls.length > 0) {
      dispatch(fetchAddTweet({ text, imageUrls: urls }));
      setImages([]);
    } else {
      dispatch(fetchAddTweet({ text, imageUrls: [] }));
    }
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
          autoFocus={open ? true : false}
          maxRows={15}
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
          <Stack>
            <Stack direction={'row'} flexWrap={'wrap'}>
              {images.map((obj) => (
                <Box
                  key={obj.blobUrl}
                  sx={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                    borderRadius: '10px',
                    marginRight: '15px',
                    marginBottom: '10px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(' + obj.blobUrl + ')',
                  }}
                >
                  <DeleteOutline
                    onClick={(e) => removeImage(obj)}
                    sx={{
                      position: 'absolute',
                      color: 'white',
                      top: '-5px',
                      right: '-10px',
                      backgroundColor: '#fc5549',
                      p: '5px',
                      borderRadius: '50%',
                    }}
                  />
                </Box>
              ))}
            </Stack>
            <Stack direction={'row'} mb="10px">
              <UploadImages setImages={setImages} />
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
            </Stack>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            {text && (
              <>
                {text.length > 350 ? (
                  <Typography mr={'10px'} color={'error.light'}>
                    {280 - text.length}
                  </Typography>
                ) : textLimitPercent > 100 && text.length <= 350 ? (
                  <Typography mr={'10px'} color={'warning.light'}>
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
              disabled={(!text || text.length > 350) && !images.length}
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
