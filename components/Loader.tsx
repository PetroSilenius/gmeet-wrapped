/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, Typography } from '@mui/material';

export const Loader = () => {
  return (
    <Grid container sx={{ height: '100vh' }} justifyContent="center" alignItems="center">
      <Grid item>
        <img
          src="/loader.svg"
          alt="Loading..."
          height="64"
          width="64"
          css={css`
            width: 100%;
          `}
        />
        <Typography component="h1" variant="h5">
          Analysing your past Meets
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Loader;
