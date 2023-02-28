import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {
  Avatar,
  Box,
  IconButton,
  ImageListItem,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { MoreHorizOutlined, MoreVertOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTweet } from '../redux/ducks/tweets/actionCreators';
import { selectUserData } from '../redux/ducks/user/selectors';
import { removeTweetFromProfile } from '../redux/ducks/profile/actionCreators';

interface TweetProps {
  tweetData: {
    user: {
      _id: any;
      fullName: string;
      userName: string;
      avatarUrl?: string;
    };
    _id: any;
    text: string;
    comments: string[];
    retweets: string[];
    likes: string[];
    createdAt: string;
    images: string[];
  };
}

const Tweet: React.FC<TweetProps> = ({ tweetData }): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const myData = useSelector(selectUserData);

  const navigate = useNavigate();
  const handleClickTweet = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate(`/tweet/${tweetData._id}`);
  };

  return (
    <Box
      onClick={(e) => handleClickTweet(e)}
      sx={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Stack
        direction={'row'}
        sx={{
          padding: '13px',
          pb: '10px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          cursor: 'pointer',
          '&:hover': { bgcolor: 'customGrey' },
        }}
      >
        <Box>
          <Avatar
            alt="Аватарка пользователя"
            sx={{ width: '50px', height: '50px', mr: '15px' }}
            src={tweetData?.user?.avatarUrl}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction={'row'} mb="-3px">
            <Typography fontWeight={'bold'} mr="10px">
              {tweetData.user.fullName}
            </Typography>
            <Typography color={'textSecondary'} mr="5px">
              {'@' + tweetData.user.userName}
            </Typography>
            <Typography color={'textSecondary'} mr="5px">
              ·
            </Typography>
            <Typography color={'textSecondary'} flex={1}>
              {formatDate(new Date(tweetData.createdAt))}
            </Typography>
            {tweetData.user._id == myData?._id && (
              <>
                <IconButton
                  size="medium"
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={(event) => {
                    event.stopPropagation();
                    setAnchorEl(event.currentTarget);
                  }}
                  sx={{ mt: '-10px' }}
                >
                  <MoreHorizOutlined
                    fontSize="small"
                    sx={{ color: 'text.secondary' }}
                  />
                </IconButton>
                <Menu
                  onClick={(e) => e.stopPropagation()}
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null);
                      dispatch(deleteTweet(tweetData._id));
                      dispatch(removeTweetFromProfile(tweetData._id));
                    }}
                  >
                    Удалить
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
          <Typography mb={'10px'}>{tweetData.text}</Typography>
          {tweetData.images.length ? (
            <ImageListItem
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '15px',
                maxWidth: '100%',
                marginBottom: '10px',
              }}
            >
              <img
                style={{
                  borderRadius: '15px',
                  maxWidth: '100%',
                }}
                src={tweetData.images[0]}
              />
            </ImageListItem>
          ) : (
            ''
          )}
          {tweetData.images.length ? (
            <Stack
              direction={'row'}
              alignItems={'flex-end'}
              flexWrap={'wrap'}
              justifyContent={'space-between'}
            >
              {tweetData.images.slice(1).map((image) => (
                <Box
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    mr: '10px',
                    flex: '0 0 30%',
                    height: '100px',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: 'url(' + image + ')',
                  }}
                ></Box>
              ))}
            </Stack>
          ) : (
            ''
          )}
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            maxWidth="450px"
            ml={'-10px'}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{
                  mr: '5px',
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <ModeCommentOutlinedIcon fontSize="small" />
              </IconButton>
              {tweetData.comments.length ? (
                <Typography color={'textSecondary'}>
                  {tweetData.comments.length}
                </Typography>
              ) : (
                ''
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{
                  mr: '5px',
                  color: 'text.secondary',
                  '&:hover': { color: '#69ff91' },
                }}
              >
                <RepeatOutlinedIcon fontSize="small" />
              </IconButton>
              {tweetData.retweets.length ? (
                <Typography color={'textSecondary'}>
                  {tweetData.retweets.length}
                </Typography>
              ) : (
                ''
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{
                  mr: '5px',
                  color: 'text.secondary',
                  '&:hover': { color: '#ff0090' },
                }}
              >
                <FavoriteBorderOutlinedIcon fontSize="small" />
              </IconButton>
              {tweetData.likes.length ? (
                <Typography color={'textSecondary'}>
                  {tweetData.likes.length}
                </Typography>
              ) : (
                ''
              )}
            </Box>
            <IconButton
              onClick={(e) => e.stopPropagation()}
              sx={{
                mr: '5px',
                color: 'text.secondary',
                '&:hover': { color: 'primary.main' },
              }}
            >
              <FileUploadOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Tweet;
