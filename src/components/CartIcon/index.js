import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';

function CartIcon() {
  return (
    <Container>
      <Link
        className="cart-link"
        to="/cart"
      >
        <AiOutlineShoppingCart />
      </Link>
    </Container>
  );
}

export default CartIcon;
