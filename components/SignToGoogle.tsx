import { Typography, Button, Tooltip } from '@mui/material';

export const SignToGoogle = ({ setAccessToken }: { setAccessToken: (token: string) => void }) => {
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
        });
    });
  };

  return (
    <>
      <Typography paragraph>
        Learn how much time you spent on{' '}
        <Tooltip title="Google Meet" arrow>
          <span style={{ textDecoration: 'underline dotted' }}>Gmeet</span>
        </Tooltip>{' '}
        and which were your top meets. Sign in to your Google account and select which of your
        calendars you want to see.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={signInToGoogle}
        size="large"
        sx={{ px: '30px', textTransform: 'capitalize' }}>
        Get started
      </Button>
    </>
  );
};
