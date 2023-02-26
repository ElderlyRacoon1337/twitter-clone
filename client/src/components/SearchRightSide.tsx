import { Box, InputAdornment, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

interface SearchProps {
  text: string;
  handleChange: any;
}

export const SearchRightSide: React.FC<SearchProps> = ({
  text,
  handleChange,
}): React.ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <InputBase
        value={text}
        onChange={(e) => handleChange(e)}
        placeholder="Поиск в Твиттере"
        sx={{
          width: '300px',
          borderRadius: '20px',
          bgcolor: 'customDarkGrey',
          p: '5px 15px',
          border: '1px solid',
          borderColor: 'divider',
          '&.Mui-focused': {
            '& svg': {
              color: 'primary.main',
            },
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'primary.main',
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <Search sx={{ color: 'text.secondary' }} />
          </InputAdornment>
        }
      />
    </Box>
  );
};
