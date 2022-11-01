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
        calendars you want to see
      </Typography>

      <Button
        component={NextLink}
        href="/signin"
        variant="contained"
        color="primary"
        size="large"
        sx={{ px: '30px', textTransform: 'capitalize' }}>
        Get started
      </Button>
    </Layout>
  );
};

export default Home;
