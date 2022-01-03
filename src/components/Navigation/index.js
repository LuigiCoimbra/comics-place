import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';

function Navigation({ title }) {
  return (
    <Container>
      <Link to="/">{title}</Link>
      <div>
        <Link to="/shopping-cart">
          <FaShoppingCart
            size={25}
            className="shoppingCart"
          />
        </Link>
      </div>
    </Container>
  );
}

export default Navigation;
