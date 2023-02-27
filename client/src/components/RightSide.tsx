import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { ChangeEvent, useState } from 'react';
import { SearchRightSide } from './SearchRightSide';
import Tags from './Tags';

const RightSide: React.FC = (): React.ReactElement => {
  const [text, setText] = useState<string>('');
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  return (
    <Stack sx={{ flex: 4, pt: 1, pl: '30px', position: 'relative' }}>
      <Box
        sx={{
          position: 'sticky',
          top: '0',
          width: '95%',
        }}
      >
        <SearchRightSide text={text} handleChange={handleChange} />
        <Tags />
        <Stack
          sx={{
            bgcolor: 'customGrey',
            borderRadius: '20px',
            mt: '20px',
            p: '5px 0',
          }}
        >
          <Typography
            variant="h6"
            fontWeight={'bold'}
            sx={{
              py: 1,
              pl: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            Кого читать
          </Typography>
          <List>
            <ListItemButton
              disableRipple
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            >
              <ListItemIcon>
                <Avatar
                  sx={{ width: '45px', height: '45px' }}
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
              disableRipple
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            >
              <ListItemIcon>
                <Avatar
                  sx={{ width: '45px', height: '45px' }}
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
