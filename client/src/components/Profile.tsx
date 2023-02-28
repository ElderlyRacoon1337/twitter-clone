import {
  ArrowBack,
  LocationOnOutlined,
  MoreHorizOutlined,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Link,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileData } from '../redux/ducks/profile/actionCreators';
import {
  selectIsMyProfile,
  selectProfileData,
} from '../redux/ducks/profile/selectors';
import Tweet from './Tweet';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Profile: React.FC<any> = ({ handleClickBack }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabPanelStyled = styled(TabPanel)({
    '.MuiBox-root': { padding: 0 },
  });

  const params = useParams();
  const username = params.username;
  const dispatch = useDispatch();
  const profileData = useSelector(selectProfileData);
  const isMyProfile = useSelector(selectIsMyProfile);

  useEffect(() => {
    dispatch(fetchProfileData(username));
  }, [username]);

  return (
    <Box sx={{ position: 'relative' }}>
      {profileData ? (
        <Stack>
          <Stack
            direction={'row'}
            alignItems={'center'}
            sx={{
              position: 'sticky',
              top: '0',
              p: '0px 10px',
              borderBottom: '1px solid',
              borderColor: 'divider',
              background: 'background.default',
              bgcolor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 1,
            }}
          >
            <IconButton sx={{ mr: '20px' }} onClick={handleClickBack}>
              <ArrowBack fontSize="small" sx={{ color: 'white' }} />
            </IconButton>
            <Stack>
              <Typography fontWeight={'800'} sx={{ fontSize: '22px' }}>
                {profileData?.fullName}
              </Typography>
              <Typography
                fontWeight={'bold'}
                color={'textSecondary'}
                fontSize={'13px'}
              >
                {'Твиты: ' + profileData.tweets?.length}
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              bgcolor: 'customGrey',
              backgroundImage:
                'url(https://pbs.twimg.com/profile_banners/3814210037/1675669753/1500x500)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></Box>
          <Stack p={'20px'}>
            <Stack
              direction={'row'}
              justifyContent="space-between"
              position={'relative'}
            >
              <Avatar
                src={profileData.avatarUrl}
                sx={{
                  position: 'absolute',
                  height: '140px',
                  width: '140px',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  top: '-90px',
                  left: '0px',
                  borderRadius: '50%',
                  border: '3px solid black',
                }}
              ></Avatar>
              <Box />

              <Stack direction={'row'}>
                <IconButton
                  size="small"
                  sx={{ border: '1px solid', borderColor: 'divider' }}
                >
                  <MoreHorizOutlined />
                </IconButton>
                {!isMyProfile ? (
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: '20px',
                      ml: '10px',
                    }}
                  >
                    Читать
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: '20px',
                      ml: '10px',
                    }}
                  >
                    Редактировать профиль
                  </Button>
                )}
              </Stack>
            </Stack>
            <Typography mt={'20px'} fontWeight={'bold'} fontSize={'22px'}>
              {profileData.fullName}
            </Typography>
            <Typography fontSize={'15px'} sx={{ color: 'text.secondary' }}>
              {'@' + profileData.userName}
            </Typography>
            <Stack direction={'row'} mt={'10px'} alignItems={'center'}>
              {profileData.location ? (
                <>
                  <LocationOnOutlined
                    fontSize="small"
                    sx={{ color: 'text.secondary' }}
                  />
                  <Typography
                    mr={'10px'}
                    fontSize={'15px'}
                    sx={{ color: 'text.secondary' }}
                  >
                    {profileData.location}
                  </Typography>

                  <LinkIcon
                    fontSize="small"
                    sx={{ color: 'text.secondary', mr: '2px' }}
                  />
                </>
              ) : (
                ''
              )}
              {profileData.website ? (
                <Link
                  href="/"
                  mr={'10px'}
                  fontSize={'15px'}
                  sx={{ textDecoration: 'none' }}
                >
                  {profileData.website}
                </Link>
              ) : (
                ''
              )}
              <CalendarMonthOutlinedIcon
                fontSize="small"
                sx={{ color: 'text.secondary', mr: '2px' }}
              />
              <Typography
                mr={'10px'}
                fontSize={'15px'}
                sx={{ color: 'text.secondary' }}
              >
                {'Зарегистрировался ' +
                  new Date(profileData.createdAt).toLocaleDateString('ru')}
              </Typography>
            </Stack>
            <Stack mt={'10px'} direction={'row'}>
              <Typography fontSize={'14px'} mr={'3px'} fontWeight="bold">
                785
              </Typography>
              <Typography color={'textSecondary'} fontSize={'14px'} mr={'10px'}>
                В читаемых
              </Typography>
              <Typography fontSize={'14px'} mr={'3px'} fontWeight="bold">
                91.6K
              </Typography>
              <Typography fontSize={'14px'} color={'textSecondary'} mr={'10px'}>
                Читателей
              </Typography>
            </Stack>
          </Stack>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="fullWidth"
              >
                <Tab label="Твиты" {...a11yProps(0)} />
                <Tab label="Ответы" {...a11yProps(1)} />
                <Tab label="Медиа" {...a11yProps(2)} />
                <Tab label="Лайки" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanelStyled value={value} index={0}>
              {profileData?.tweets?.map((el) => (
                // @ts-ignore
                <Tweet key={el._id} tweetData={el} />
              ))}
            </TabPanelStyled>
            <TabPanel value={value} index={1}>
              {/* Ответы */}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* Медиа */}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {/* Лайки */}
            </TabPanel>
          </Box>
        </Stack>
      ) : (
        <CircularProgress
          color="primary"
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '150px',
            ml: 'auto',
            mr: 'auto',
            height: '50px',
            width: '50px',
          }}
        />
      )}
    </Box>
  );
};

export default Profile;
