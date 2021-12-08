import { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

export const CalendarSelector = ({ calendars }: { calendars: GCalendar[] }) => {
  const [selectedCalendar, setSelectedCalendar] = useState(calendars[0].id);

  return (
    <>
      <div
        css={css`
          margin-bottom: 20px;
        `}>
        <FormControl variant="outlined" fullWidth>
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
      </div>
      <Link href={`/${selectedCalendar}`} passHref>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: '30px', textTransform: 'capitalize' }}>
          Wrap your year
        </Button>
      </Link>
    </>
  );
};
