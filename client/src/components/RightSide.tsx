import { InputAdornment, InputBase, Stack } from '@mui/material';
import { Search } from '@mui/icons-material';

const RightSide: React.FC = (): React.ReactElement => {
  return (
    <Stack sx={{ flex: 4, pt: 1 }}>
      <Stack sx={{ pl: '30px' }}>
        <InputBase
          placeholder="Поиск в Твиттере"
          sx={{
            borderRadius: '20px',
            bgcolor: '#E6ECF0',
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
      </Stack>
    </Stack>
  );
};

export default RightSide;
