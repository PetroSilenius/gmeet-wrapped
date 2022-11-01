import { useState } from 'react';
import NextLink from 'next/link';
import { Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

export const CalendarSelector = ({ calendars }: { calendars: GCalendar[] }) => {
  const [selectedCalendar, setSelectedCalendar] = useState(calendars[0].id);

  return (
    <>
      <FormControl variant="outlined" fullWidth sx={{ marginBottom: '20px' }}>
        <InputLabel id="calendar-select-label">Select calendar</InputLabel>
        <Select
          value={selectedCalendar}
          onChange={(event) => setSelectedCalendar(event.target.value as string)}
          labelId="calendar-select-label"
          label="Select calendar">
          {calendars.map((calendar: GCalendar) => (
            <MenuItem value={calendar.id} key={calendar.id}>
              {calendar.summary}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        component={NextLink}
        href={`/${selectedCalendar}`}
        variant="contained"
        color="primary"
        size="large"
        sx={{ px: '30px', textTransform: 'capitalize' }}>
        Wrap your year
      </Button>
    </>
  );
};
