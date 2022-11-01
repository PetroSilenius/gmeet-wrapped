import { useEffect, useState } from 'react';
import { Tooltip, Typography } from '@mui/material';

import Layout from 'components/Layout';
import { CalendarSelector } from 'components/CalendarSelector';
import useLocalStorage from 'hooks/useLocalStorage';

const SignIn = () => {
  const [accessToken] = useLocalStorage('accessToken', '');
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    if (accessToken) {
      fetch(`https://www.googleapis.com/calendar/v3/users/me/calendarList?minAccessRole=writer`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setCalendars(data.items);
        });
    }
  }, [accessToken]);

  return (
    <Layout>
      <Typography component="h1" variant="h3" sx={{ mb: '30px' }}>
        Step 2. Select a calendar
      </Typography>

      <Typography paragraph>
        Pick a calendar you want to inspect. If you want to analyse multiple, you can revisit this
        page later
      </Typography>
      <div>{Boolean(calendars.length) && <CalendarSelector calendars={calendars} />}</div>
    </Layout>
  );
};

export default SignIn;
