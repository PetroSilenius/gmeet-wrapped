import Image from 'next/image';
import Link from 'next/link';
import { css } from '@emotion/react';
import { Grid, Link as MuiLink, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <footer
      css={css`
        margin-bottom: 15px;
      `}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <Link href="/privacy" passHref>
            <MuiLink>Privacy Policy</MuiLink>
          </Link>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <Typography component="span">Powered by </Typography>
          <MuiLink
            href="https://silenius.dev"
            css={css`
              vertical-align: middle;
              margin-left: 5px;
            `}>
            <Image src="/profileImg.png" alt="Vercel Logo" width={32} height={32} />
          </MuiLink>
        </Grid>
        <Grid item xs={3}>
          <Link href="/terms" passHref>
            <MuiLink>Terms &amp; Conditions</MuiLink>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
