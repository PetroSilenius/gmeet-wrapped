import Head from 'next/head';
import Link from 'next/link';
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

export const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <main
        css={css`
          padding: 10px;
          min-height: 100vh;
        `}>
        <Typography component="h1" variant="h3">
          Privacy Policy
        </Typography>
        <p>
          Petro Silenius built the Gmeet wrapped app as an Open Source app. This Service is provided
          by Petro Silenius at no cost and is intended for use as is. The source code for Gmeet
          wrapped is available at{' '}
          <a
            css={css`
              color: #00a8ff;
            `}
            href="https://github.com/PetroSilenius/gmeet-wrapped">
            https://github.com/PetroSilenius/gmeet-wrapped
          </a>
          .
        </p>
        <p>
          This page is used to inform visitors regarding the policies with the collection, use, and
          disclosure of Personal Information if anyone decided to use the Service.
        </p>
        <p>
          If you choose to use the Service, then you agree to the collection and use of information
          in relation to this policy. The Personal Information that the Service collects is used for
          providing and improving the Service. The information will not be used or shared with
          anyone except as described in this Privacy Policy.
        </p>
        <p>
          The terms used in this Privacy Policy have the same meanings as in our Terms and
          Conditions, which are accessible at{' '}
          <Link href="/terms" passHref>
            <a
              css={css`
                color: #00a8ff;
              `}>
              https://gmeet-wrapped.com/terms
            </a>
          </Link>
          .
        </p>
        <Typography component="h2" variant="h4">
          Information Collection and Use
        </Typography>
        <p>
          For a better experience, while using our Service, you are required to provide certain
          personally identifiable information, including but not limited to Internet Protocol (“IP”)
          address, e-mail, first and last name. Also in order to use the Service, you are requested
          to provide access to viewing events on all of your calendars and seeing the title
          description, default time zone and other properties of Google Calendars that you have
          access to. The information that is requested will be retained on your device and is not
          collected by the Service in any way.
        </p>
        <Typography component="h2" variant="h4">
          Log Data
        </Typography>
        <p>
          The Service may automatically collect information about your device, including, but not
          limited to, your device Internet Protocol (“IP”) address. This data is stored by a
          third-party hosting provider, Netlify for less than 30 days in the United States for issue
          troubleshooting.
        </p>
        <Typography component="h2" variant="h4">
          Cookies
        </Typography>
        <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique
          identifiers. These are sent to your browser from the websites that you visit and are
          stored on your device´s internal memory.
        </p>
        <p>
          This Service does not use these “cookies” explicitly. However, the app may use third-party
          code and libraries that use “cookies” to collect information and improve their Services.
        </p>
        <Typography component="h2" variant="h4">
          Service Providers
        </Typography>
        <p>
          The Service may employ third-party companies and/or individuals due to the following
          reasons:
        </p>
        <ul>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf or</li>
          <li>To perform Service-related Services;</li>
        </ul>
        <p>
          These third-party companies and/or individuals have access to your Personal Information
          when you use our Service. The reason is to perform the tasks assigned to them on our
          behalf. However, they are obligated not to disclose or use the information for any other
          purpose.
        </p>
        <Typography component="h2" variant="h4">
          Security
        </Typography>
        <p>
          We value your trust in providing us your Personal Information, thus we are striving to use
          commercially acceptable means of protecting it. But remember that no method of
          transmission over the internet, or method of electronic storage is 100% secure and
          reliable, and we cannot guarantee its absolute security.
        </p>
        <Typography component="h2" variant="h4">
          Links to Other Sites
        </Typography>
        <p>
          This Service may contain links to other sites. If you click on a third-party link, you
          will be directed to that site. Note that these external sites are not operated by us.
          Therefore, it is strongly advised to review the Privacy Policy of these websites. The
          Services has no control over and assumes no responsibility for the content, privacy
          policies, or practices of any third-party sites or Services.
        </p>
        <Typography component="h2" variant="h4">
          Children’s Privacy
        </Typography>
        <div>
          <p>
            The Service does not knowingly collect personally identifiable information from
            children. We encourage all children to never submit any personally identifiable
            information through the Application and/or Services. We encourage parents and legal
            guardians to monitor their children´s Internet usage and to help enforce this Policy by
            instructing their children never to provide personally identifiable information through
            the Application and/or Services without their permission. If you have reason to believe
            that a child has provided personally identifiable information to us through the
            Application and/or Services, please contact us. You must also be at least 16 years of
            age to consent to the processing of your personally identifiable information in your
            country (in some countries we may allow your parent or guardian to do so on your
            behalf).
          </p>
        </div>
        <Typography component="h2" variant="h4">
          Changes to This Privacy Policy
        </Typography>
        <p>
          This Privacy Policy may be updated from time to time. Thus, you are advised to review this
          page periodically for any changes. The Service will notify you of any changes by posting
          the new Privacy Policy on this page.
        </p>
        <p>This policy is effective as of 2021-12-08.</p>
        <Typography component="h2" variant="h4">
          Contact Us
        </Typography>
        <p>
          If you have any questions or suggestions about the Privacy Policy, do not hesitate to
          contact petro.silenius@gmail.com.
        </p>
      </main>
    </>
  );
};

export default PrivacyPolicy;
