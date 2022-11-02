import { Button, Tooltip, Typography } from '@mui/material';

import Layout from 'components/Layout';
import NextLink from 'next/link';

const Home = () => {
  return (
    <Layout>
      <Typography component="h1" variant="h3" sx={{ mb: '30px' }}>
        Your Google meet year {new Date().getFullYear()} wrapped
      </Typography>

      <Typography paragraph>
        Learn how much time you spent on{' '}
        <Tooltip title="Google Meet" arrow>
          <span style={{ textDecoration: 'underline dotted' }}>Gmeet</span>
        </Tooltip>{' '}
        and which were your top meets. Sign in to your Google account and select which of your
        calendars you want to see 🗓
      </Typography>

      <Typography paragraph sx={{ mt: '10px' }}>
        Gmeet Wrapped provides you with a summary of your Google meet activity in the last year
      </Typography>
      <ul>
        <li>What meets did you attend the most often?</li>
        <li>What could you have done during the time you spent on Gmeet?</li>
      </ul>
      <Typography paragraph>
        Your calendar data will be used to provide you with this information and all data handling
        will happen on your device only 💻
      </Typography>

      <Button
        component={NextLink}
        href="/login"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: '20px', px: '30px', textTransform: 'capitalize' }}>
        Get started
      </Button>
    </Layout>
  );
};

export default Home;
