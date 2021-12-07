import { Typography } from '@mui/material';

export const WrappedReportHeader = ({ timeSpent }: { timeSpent: number }) => {
  return (
    <>
      <Typography component="h1" variant="h3" align="center" sx={{ mb: '20px' }}>
        In {new Date().getFullYear()} you spent {timeSpent} hours in Google Meet
      </Typography>
      <Typography component="p" variant="caption" align="center">
        so {timeSpent * 60} minutes
      </Typography>
      <Typography component="p" variant="caption" align="center">
        or {timeSpent * 60 * 60} seconds
      </Typography>
    </>
  );
};

export default WrappedReportHeader;
