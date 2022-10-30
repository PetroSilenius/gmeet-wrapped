import Link from 'next/link';
import { css } from '@emotion/react';
import { Grid, Link as MuiLink, Typography } from '@mui/material';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer
      css={css`
        margin-bottom: 15px;
      `}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs>
          <MuiLink component={Link} href="/privacy">
            Privacy Policy
          </MuiLink>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Typography component="span">Powered by </Typography>
          <MuiLink
            href="https://silenius.dev"
            css={css`
              vertical-align: middle;
              margin-left: 5px;
            `}>
            <Image
              src="/profileImg.png"
              alt="Petro Silenius, author of the site"
              width={32}
              height={32}
              priority
            />
          </MuiLink>
        </Grid>
        <Grid item xs textAlign="right">
          <MuiLink component={Link} href="/terms">
            Terms &amp; Conditions
          </MuiLink>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
