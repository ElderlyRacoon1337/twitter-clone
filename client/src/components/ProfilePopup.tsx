import { Menu, MenuItem, Typography } from '@mui/material';

interface PopupProps {
  anchorEl: any;
  setAnchorEl: any;
}

const ProfilePopup = ({ anchorEl, setAnchorEl }: PopupProps) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      sx={{
        position: 'absolute',
        height: '85px',
        bottom: '80px',
        top: 'auto',
        left: '90px',
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          width: '200px',
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          top: '1000px',
          bottom: 0,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleClose}>
        <Typography>Log out</Typography>
      </MenuItem>
    </Menu>
  );
};

export default ProfilePopup;
