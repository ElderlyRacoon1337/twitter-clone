import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Box, Stack, Typography } from '@mui/material';
import Tweet from './Tweet';

const Content: React.FC = (): React.ReactElement => {
  const tweetData = {
    user: {
      fullName: 'Nigerka27',
      userName: 'nigerka1488',
      avatarUrl:
        'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-732x549.jpg',
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minus sint voluptate, atque ut, placeat unde explicabo, quidem cupiditate facilis quis iure id incidunt quasi corrupti est dolor magni numquam.',
    commentsCount: 2,
    retweetsCount: 1,
    likesCount: 3,
    createdAt: '17 февраля в 20:34',
  };
  return (
    <Stack sx={{ flex: 7 }}>
      <Box
        sx={{
          minHeight: '100vh',
          borderRight: '1px solid #eee',
          borderLeft: '1px solid #eee',
          position: 'relative',
        }}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          sx={{
            p: '10px 20px',
            borderBottom: '1px solid #eee',
            position: 'fixed',
            // left: 0,
            width: '574px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(5px)',
            zIndex: 1,
          }}
        >
          <Typography variant="h6" fontWeight={'bold'}>
            Главная
          </Typography>
          <AutoAwesomeOutlinedIcon color="primary" sx={{ fontSize: '30px' }} />
        </Stack>
        <Box sx={{ pt: '50px' }}>
          <Tweet tweetData={tweetData} />
          <Tweet tweetData={tweetData} />
          <Tweet tweetData={tweetData} />
          <Tweet tweetData={tweetData} />
          <Tweet tweetData={tweetData} />
          <Tweet tweetData={tweetData} />
          <Tweet tweetData={tweetData} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Content;
