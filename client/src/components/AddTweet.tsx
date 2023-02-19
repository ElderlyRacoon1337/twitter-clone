import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  TextareaAutosize,
} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

const AddTweet = () => {
  const StyledInput = styled(TextareaAutosize)({
    border: 'none',
    width: '400px',
    outline: 'none',
    resize: 'none',
    fontSize: 20,
    fontFamily: 'inherit',
    marginTop: '10px',
  });
  return (
    <Stack
      direction={'row'}
      sx={{
        padding: '20px',
        borderBottom: '10px solid #eee',
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
        <StyledInput placeholder="Что происходит?" />
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
          <Button variant="contained" sx={{ borderRadius: '20px' }}>
            Твитнуть
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddTweet;
