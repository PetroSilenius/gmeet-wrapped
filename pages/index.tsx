/** @jsxImportSource @emotion/react */
import { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { css } from '@emotion/react';
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

  const setAccessTokenFromGoogle = useCallback((token: string) => {
    setAccessToken(token);
  }, []);

  return (
    <div>
      <Head>
        <title>Gmeet wrapped</title>
        <meta name="description" content="Your Gmeet year wrapped" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Grid container spacing={2} direction="column" justifyContent="center" height={'100vh'}>
          <Grid item xs={11} sx={{ alignItems: 'center' }} alignItems="center">
            <main
              css={css`
                display: flex;
                height: 100%;
              `}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={5}>
                  <Typography component="h1" variant="h3" sx={{ mb: '50px' }}>
                    Your Google meet year wrapped
                  </Typography>

                  {calendars && calendars.length ? (
                    <CalendarSelector calendars={calendars} />
                  ) : (
                    <SignToGoogle setAccessToken={setAccessTokenFromGoogle} />
                  )}
                </Grid>

                <Grid item xs={12} md={7}>
                  <Card sx={{ margin: '30px', background: theme.palette.grey[800] }}>
                    <CardContent>
                      <Image
                        src="/google-meet.svg"
                        alt="Google Meet logo"
                        width="300"
                        height="300"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </main>
          </Grid>

          <Grid item xs={1}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
