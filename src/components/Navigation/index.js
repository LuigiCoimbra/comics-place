import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHome } from 'react-icons/ai';
import { Container } from './styles';

function Navigation({ title, home }) {
  return (
    <Container>
      <Link to="/">{title}</Link>
      <div>
        { home ? (
          <Link
            to="/shopping-cart"
            className="link"
          >
            <AiOutlineShoppingCart />
          </Link>
        ) : (
          <Link
            to="/"
            className="link"
          >
            <AiOutlineHome />
          </Link>
        ) }
      </div>
    </Container>
  );
}

export default Navigation;
