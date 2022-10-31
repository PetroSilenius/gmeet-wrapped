import { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useLocalStorage from '../hooks/useLocalStorage';

import Footer from 'components/Footer';
import { CalendarSelector } from 'components/CalendarSelector';
import { SignToGoogle } from 'components/SignToGoogle';
import Image from 'next/image';

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
          <Grid
            item
            container
            xs
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={6} sx={{ marginTop: '30px' }}>
              <Typography component="h1" variant="h3" sx={{ mb: '30px' }}>
                Your Google meet year {new Date().getFullYear()} wrapped
              </Typography>

              {calendars && calendars.length ? (
                <CalendarSelector calendars={calendars} />
              ) : (
                <SignToGoogle setAccessToken={(token: string) => setAccessToken(token)} />
              )}
            </Grid>

            <Grid item xs="auto">
              <Image
                src="/astronaut.png"
                alt="Astronaut walking on the moon with a laptop"
                width={300}
                height={300}
                priority
                style={{ borderRadius: '10px' }}
              />
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
