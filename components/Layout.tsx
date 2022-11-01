import { Container, Grid } from '@mui/material';

import Footer from 'components/Footer';
import Image from 'next/image';

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Container>
      <Grid container direction="column" sx={{ minHeight: '100vh' }}>
        <Grid
          item
          container
          xs
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ flexGrow: 1 }}>
          <Grid item xs={12} md={6} sx={{ marginTop: '30px' }}>
            {children}
          </Grid>

          <Grid item xs="auto">
            <Image
              src="/astronaut.png"
              alt="Astronaut walking on the moon with a laptop"
              width={300}
              height={300}
              priority
              style={{ borderRadius: '10px' }}
            />
          </Grid>
        </Grid>

        <Grid item xs={2}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
