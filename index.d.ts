interface GCalendar {
  id: string;
  summary: string;
  accessRole: string;
}

interface GCalendarEvent {
  id: string;
  start: { dateTime: string };
  end: { dateTime: string };
  summary: string;
}

interface SimpleEvent {
  id: string;
  title: string;
  duration: number;
}
