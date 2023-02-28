import {
  Avatar,
  Box,
  Button,
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
                  src="https://i.guim.co.uk/img/media/32d0849f045a9de29f3af3a12bd2d215d1dff389/0_0_1238_743/master/1238.jpg?width=465&quality=85&dpr=1&s=none"
                />
              </ListItemIcon>
              <ListItemText primary="Elon Musk" secondary="@elonmusk" />
              {/* <IconButton>
                <PersonAddOutlinedIcon color="primary" />
              </IconButton> */}
              <Button variant="contained" sx={{ borderRadius: '20px' }}>
                Читать
              </Button>
            </ListItemButton>
            <ListItemButton
              disableRipple
              sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
            >
              <ListItemIcon>
                <Avatar
                  sx={{ width: '45px', height: '45px' }}
                  src="https://image.cnbcfm.com/api/v1/image/107198138-16770781142023-02-22t143423z_43942611_rc2egz9u8tt7_rtrmadp_0_ukraine-crisis-putin-concert.jpeg?v=1677431880&w=929&h=523&vtcrop=y"
                />
              </ListItemIcon>
              <ListItemText primary="Владимир Путин" secondary="@putin67" />
              <Button variant="contained" sx={{ borderRadius: '20px' }}>
                Читать
              </Button>
            </ListItemButton>
          </List>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RightSide;
