import { Typography } from '@mui/material';

import Layout from 'components/Layout';
import LogInToGoogle from 'components/LogInToGoogle';

const Login = () => {
  return (
    <Layout>
      <Typography component="h1" variant="h3" sx={{ mb: '30px' }}>
        Step 1. Log in
      </Typography>

      <Typography paragraph>
        View access to your calendars is used to list available calendars and the selected calendar
        will be used to gather the Google Meet events.
      </Typography>
      <LogInToGoogle />
    </Layout>
  );
};

export default Login;
