import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { ChangeEvent, useState } from 'react';

interface AddTweetProps {
  setOpen?: any;
}

const AddTweet: React.FC<AddTweetProps> = ({ setOpen }): React.ReactElement => {
  const [text, setText] = useState<string>('');
  const textLimitPercent = (text.length / 280) * 100;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.currentTarget) {
      console.log(e.currentTarget);
      setText(e.currentTarget.value);
      e.currentTarget.focus();
    }
  };

  const handleClickAddTweet = (): void => {
    setText('');
    setOpen(false);
  };

  return (
    <Stack
      direction={'row'}
      sx={{
        padding: '20px',
      }}
    >
      <Box>
        <Avatar
          alt="Аватарка пользователя"
          sx={{ width: '50px', height: '50px', mr: '15px' }}
          src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <TextareaAutosize
          maxRows={15}
          autoFocus
          onChange={handleChange}
          value={text}
          placeholder="Что происходит?"
          maxLength={350}
          style={{
            border: 'none',
            width: '400px',
            outline: 'none',
            resize: 'none',
            fontSize: 20,
            fontFamily: 'inherit',
            marginTop: '10px',
          }}
        />
        <Stack direction={'row'} justifyContent={'space-between'} mt="30px">
          <Box>
            <IconButton
              sx={{
                mr: '5px',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <InsertPhotoOutlinedIcon />
            </IconButton>
            <IconButton
              sx={{
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
                {textLimitPercent > 100 ? (
                  <Typography
                    mr={'10px'}
                    color={'error'}
                    // sx={{ fontSize: '12px' }}
                  >
                    {280 - text.length}
                  </Typography>
                ) : (
                  <>
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
                  </>
                )}
              </>
            )}
            <Button
              onClick={handleClickAddTweet}
              variant="contained"
              sx={{ borderRadius: '20px' }}
            >
              Твитнуть
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddTweet;
