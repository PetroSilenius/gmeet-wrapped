/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import { css } from '@emotion/react';

export const Footer = () => {
  return (
    <footer
      css={css`
        text-align: center;
      `}>
      Powered by{' '}
      <a href="https://silenius.dev">
        <Image src="/profileImg.png" alt="Vercel Logo" width={32} height={32} />
      </a>
    </footer>
  );
};

export default Footer;
