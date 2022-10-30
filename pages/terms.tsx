import Head from 'next/head';
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

export const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Terms &amp; Conditions</title>
      </Head>
      <main
        css={css`
          padding: 10px;
          min-height: 100vh;
        `}>
        <Typography component="h1" variant="h3">
          Terms &amp; Conditions
        </Typography>
        <p>
          By using the Service, these terms will automatically apply to you - you should make sure
          therefore that you read them carefully before using the app. You’re not allowed to copy or
          modify the Service, any part of the Service, or our trademarks in any way. The Service
          itself, and all intellectual property rights related to it, belong to Petro Silenius.
        </p>
        <p>
          Petro Silenius is committed to ensuring that the Service is as useful and efficient as
          possible. For that reason, we reserve the right to make changes to the Service, at any
          time and for any reason.
        </p>
        <p>
          The Gmeet wrapped app stores and processes personal data that you have provided to us, to
          provide the Service. It’s your responsibility to keep your device and access to the
          Service secure.
        </p>
        <p>
          You should be aware that there are certain things that the Service will not take
          responsibility for. Certain functions of the Service will require the Service to have an
          active internet connection. The connection can be Wi-Fi, ethernet or provided by your
          mobile network provider, but the Service cannot take responsibility for the app not
          working at full functionality if you don’t have access to internet.
        </p>
        <p></p>
        <p>
          Along the same lines, the Service cannot always take responsibility for the way you use
          the Service i.e. You need to make sure that your device stays charged – if it runs out of
          battery and you can’t turn it on to avail the Service, the Service cannot accept
          responsibility.
        </p>
        <p>
          With respect to the Services responsibility for your use of the app, when you’re using the
          the Service, it’s important to bear in mind that although we endeavor to ensure that it is
          updated and correct at all times, we do rely on third parties to provide information to us
          so that we can make it available to you. The Service accepts no liability for any loss,
          direct or indirect, you experience as a result of relying wholly on this functionality of
          the Service.
        </p>
        <p>
          At some point, we may wish to update the Service. The Service is currently available at
          https://gmeet-wrapped.com, the requirements for the system(and for any additional systems
          we decide to extend the availability of the Service to) may change. We may wish to stop
          providing the Service, and may terminate use of it at any time without giving notice of
          termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and
          licenses granted to you in these terms will end.
        </p>
        <Typography component="h2" variant="h4">
          Changes to This Terms and Conditions
        </Typography>
        <p>
          The Terms and Conditions Terms and Conditions may be updated from time to time. Thus, you
          are advised to review this page periodically for any changes. The Service will notify you
          of any changes by posting the new Terms and Conditions on this page.
        </p>
        <p>These terms and conditions are effective as of 2021-12-08.</p>
        <Typography component="h2" variant="h4">
          Contact Us
        </Typography>
        <p>
          If you have any questions or suggestions about the Terms and Conditions, do not hesitate
          to contact petro.silenius@gmail.com.
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
