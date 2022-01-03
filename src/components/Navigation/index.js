import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { Container } from './styles';

function Navigation({ title, home }) {
  return (
    <Container>
      <Link to="/">{title}</Link>
      <div>
        { home ? (
          <Link to="/shopping-cart">
            <FaShoppingCart
              size={25}
              className="icon"
            />
          </Link>
        ) : (
          <Link to="/">
            <FaHome
              size={27}
              className="icon"
            />
          </Link>
        ) }
      </div>
    </Container>
  );
}

export default Navigation;
