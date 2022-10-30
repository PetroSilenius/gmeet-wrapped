import { useEffect, useState } from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useLocalStorage from '../hooks/useLocalStorage';

import Footer from 'components/Footer';
import { CalendarSelector } from 'components/CalendarSelector';
import { SignToGoogle } from 'components/SignToGoogle';

const Home = () => {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');
  const [calendars, setCalendars] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    if (accessToken) {
      fetch(`https://www.googleapis.com/calendar/v3/users/me/calendarList?minAccessRole=writer`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setCalendars(data.items);
          console.log(data.items);
        });
    }
  }, [accessToken]);

  return (
    <>
      <Container>
        <Grid container direction="column" sx={{ minHeight: '100vh' }}>
          <Grid item container xs alignItems="center" sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={5} sx={{ marginTop: '30px' }}>
              <Typography component="h1" variant="h3" sx={{ mb: '30px' }}>
                Your Google meet year wrapped
              </Typography>

              {calendars && calendars.length ? (
                <CalendarSelector calendars={calendars} />
              ) : (
                <SignToGoogle setAccessToken={(token: string) => setAccessToken(token)} />
              )}
            </Grid>

            <Grid item xs={12} md={7}>
              <Card sx={{ margin: '30px', background: theme.palette.grey[800] }}>
                <CardContent>
                  <img src="/google-meet.svg" alt="Google Meet logo" width="300" height="300" />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
