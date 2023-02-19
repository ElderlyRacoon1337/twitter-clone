import { Container, Stack } from '@mui/material';
import Navigation from '../components/Navigation';
import Content from '../components/Content';
import RightSide from '../components/RightSide';

const Home: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Stack direction={'row'} sx={{ minHeight: '100vh' }}>
        <Navigation />
        <Content />
        <RightSide />
      </Stack>
    </Container>
  );
};

export default Home;
