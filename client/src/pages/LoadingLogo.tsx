import { Twitter } from '@mui/icons-material';
import { Box } from '@mui/material';

const LoadingLogo = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Twitter color="primary" sx={{ fontSize: '100px' }} />
    </Box>
  );
};

export default LoadingLogo;
