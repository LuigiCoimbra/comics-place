import React from 'react';

import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>
        © 2021 -
        { ' ' }
        <a
          href="https://www.linkedin.com/in/marcusrodriguesdev/"
          target="_blank"
          rel="noreferrer"
        >
          Marcus Rodrigues
        </a>
      </p>
    </Container>
  );
}

export default Footer;
