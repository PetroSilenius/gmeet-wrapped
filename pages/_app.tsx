import Head from 'next/head';
import { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { CacheProvider, css } from '@emotion/react';
import createCache, { EmotionCache } from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from 'theme';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: 'css' });

const roboto = Roboto({ weight: '400' });

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Gmeet wrapped</title>
        <meta name="description" content="Your Gmeet year wrapped" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div
          className={roboto.className}
          css={css`
            background-color: ${theme.palette.background.default};
            color: ${theme.palette.text.primary};
          `}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
