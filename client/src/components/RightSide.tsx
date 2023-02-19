import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const RightSide: React.FC = (): React.ReactElement => {
  return (
    <Stack sx={{ flex: 4, pt: 1, pl: '30px' }}>
      <Box sx={{ position: 'fixed' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <InputBase
            placeholder="Поиск в Твиттере"
            sx={{
              width: '300px',
              borderRadius: '20px',
              // bgcolor: '#E6ECF0',
              bgcolor: grey[200],
              p: '5px 15px',
              border: '1px solid',
              borderColor: 'white',
              '&.Mui-focused': {
                '& svg': {
                  color: 'primary.main',
                },
                bgcolor: 'white',
                border: '1px solid',
                borderColor: 'primary.main',
              },
            }}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
          />
        </Box>

        <Stack
          sx={{
            bgcolor: grey[100],
            borderRadius: '20px',
            mt: '20px',
            p: '5px 0',
          }}
        >
          <Typography variant="h6" fontWeight={'bold'} sx={{ pt: 2, pl: 2 }}>
            Актуальные темы
          </Typography>
          <List>
            <ListItemButton
              sx={{ borderBottom: '1px solid', borderColor: grey[300] }}
            >
              <ListItemText
                primary="Санкт Петербург"
                secondary="Твитов: 1 488"
              />
            </ListItemButton>
            <ListItemButton
              sx={{ borderBottom: '1px solid', borderColor: grey[300] }}
            >
              <ListItemText
                primary="Санкт Петербург"
                secondary="Твитов: 1 488"
              />
            </ListItemButton>
            <ListItemButton
              sx={{ borderBottom: '1px solid', borderColor: grey[300] }}
            >
              <ListItemText
                primary="Санкт Петербург"
                secondary="Твитов: 1 488"
              />
            </ListItemButton>
          </List>
        </Stack>

        <Stack
          sx={{
            bgcolor: grey[100],
            borderRadius: '20px',
            mt: '20px',
            p: '5px 0',
          }}
        >
          <Typography variant="h6" fontWeight={'bold'} sx={{ pt: 2, pl: 2 }}>
            Кого читать
          </Typography>
          <List>
            <ListItemButton
              sx={{ borderBottom: '1px solid', borderColor: grey[300] }}
            >
              <ListItemIcon>
                <Avatar
                  sx={{ width: '40px', height: '45px' }}
                  src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                />
              </ListItemIcon>
              <ListItemText
                primary="Санкт Петербург"
                secondary="Твитов: 1 488"
              />
              <IconButton>
                <PersonAddOutlinedIcon color="primary" />
              </IconButton>
              {/* <Button variant="contained" sx={{ borderRadius: '20px' }}>
                Читать
              </Button> */}
            </ListItemButton>
            <ListItemButton
              sx={{ borderBottom: '1px solid', borderColor: grey[300] }}
            >
              <ListItemIcon>
                <Avatar
                  sx={{ width: '40px', height: '45px' }}
                  src="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                />
              </ListItemIcon>
              <ListItemText
                primary="Санкт Петербург"
                secondary="Твитов: 1 488"
              />
              <IconButton>
                <PersonAddOutlinedIcon color="primary" />
              </IconButton>
              {/* <Button variant="contained" sx={{ borderRadius: '20px' }}>
                Читать
              </Button> */}
            </ListItemButton>
          </List>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RightSide;
