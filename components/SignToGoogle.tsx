import { Button } from '@mui/material';

import useLocalStorage from 'hooks/useLocalStorage';
import { useRouter } from 'next/router';

export const SignToGoogle = () => {
  const router = useRouter();
  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const signInToGoogle = () => {
    const gapi = (window as any).gapi;

    gapi.load('client:auth2', async () => {
      gapi.client.init({
        apiKey: process.env.GOOGLE_API_KEY,
        clientId: '116870048026-03887r1h0bdmt1cm7jdhtr50qpq9hvi4.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope:
          'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly',
      });
      await gapi.auth2
        .getAuthInstance()
        .signIn()
        .then((res: any) => {
          setAccessToken(res.Bc.access_token);
          router.push('/select-calendar');
        });
    });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={signInToGoogle}
      size="large"
      sx={{ px: '30px', textTransform: 'capitalize' }}>
      Log in with Google
    </Button>
  );
};
