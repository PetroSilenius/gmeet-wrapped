import { useEffect, useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import useLocalStorage from '../hooks/useLocalStorage';
import { convertToObject, getXLongestMeets } from '../utils';

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

  const [meets, setMeets] = useState<(SimpleEvent[] & { duration: number })[]>();
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

  return (
    <div>
      <h1>Your calendar wrapped</h1>
      <p>You spent {timeSpent} hours in your meetings</p>
      {meets?.map((meet) => {
        return (
          <div key={meet[0].id}>
            <h3>{meet[0].title}</h3>
            <p>{meet.duration} hours</p>
          </div>
        );
      })}
    </div>
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
