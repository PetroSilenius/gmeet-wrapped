import { useEffect, useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { Container, Grid, Typography } from '@mui/material';
import useLocalStorage from '../hooks/useLocalStorage';
import { convertToObject, getXLongestMeets } from '../utils';

import Loader from 'components/Loader';
import WrappedReportHeader from 'components/WrappedReportHeader';
import TopMeetRow from 'components/TopMeetRow';

const timeUsageScenarios = [
  { title: 'Breaths taken🫁', factor: 17 * 60 },
  { title: 'Heart beats❤️', factor: 72 },
  { title: 'Water cups drank🚰', factor: 1 / (16 / 2.5) },
];

const WrappedReport = ({
  startDay,
  endDay,
  calendarId,
}: {
  startDay: string;
  endDay: string;
  calendarId: string;
}) => {
  const [accessToken] = useLocalStorage('accessToken', undefined);

  const [meets, setMeets] = useState<Meet[]>();
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    if (accessToken) {
      if (calendarId) {
        fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMax=${endDay}&timeMin=${startDay}&maxResults=2500`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.error && data.error.code === 401) {
              console.error('Unauthorized');
              window.location.href = '/';
              return;
            }

            const items = data.items as GCalendarEvent[];
            const meetCalendarEvents = items?.filter((i) => 'conferenceData' in i);

            const [meetEventsObject, timeSpentInMeet] = convertToObject(meetCalendarEvents);

            setTimeSpent(Math.round(timeSpentInMeet));
            setMeets(getXLongestMeets(meetEventsObject, 5));
          });
      }
    } else {
      window.location.href = '/';
    }
  }, [accessToken, calendarId, endDay, startDay]);

  if (!meets) return <Loader />;

  return (
    <>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          minHeight={'100vh'}>
          <Grid item xs={4} sx={{ my: '25px' }}>
            <WrappedReportHeader timeSpent={timeSpent} />
          </Grid>
          <Grid item xs={8} sx={{ width: '100%' }}>
            <Grid container>
              <Grid item xs={6}>
                <Typography component="h2" variant="h5">
                  Top 5 meets
                </Typography>
                {meets?.map((meet) => {
                  return <TopMeetRow meet={meet} key={meet[0].id} />;
                })}
              </Grid>
              <Grid item xs={6}>
                <Typography component="h2" variant="h5">
                  What happened during those hours
                </Typography>
                {timeUsageScenarios?.map((meet) => {
                  return (
                    <div key={meet.title}>
                      <p>
                        <b>{meet.title}</b>
                      </p>
                      <p>{Math.round(timeSpent * meet.factor)}</p>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const endOfYear = new Date(new Date().getFullYear(), 11, 31);

  return {
    props: {
      startDay: startOfYear.toISOString(),
      endDay: endOfYear.toISOString(),
      calendarId: params?.id,
    },
  };
};

export default WrappedReport;
