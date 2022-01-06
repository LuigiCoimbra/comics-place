import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { Container } from './styles';

function HomeIcon() {
  return (
    <Container>
      <Link className="home-icon" to="/">
        <AiOutlineHome />
      </Link>
    </Container>
  );
}

export default HomeIcon;
