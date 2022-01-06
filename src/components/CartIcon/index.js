import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';
// import Context from '../../context/Context';

function CartIcon({ itemCount }) {
  return (
    <Container>
      <Link
        className="cart-link"
        to="/cart"
      >
        <AiOutlineShoppingCart />
        <span>{itemCount}</span>
      </Link>
    </Container>
  );
}

export default CartIcon;
