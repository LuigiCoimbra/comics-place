import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Container } from './styles';
import Context from '../../context/Context';

function CartIcon() {
  const { itemsCart } = useContext(Context);
  const { products } = itemsCart;
  return (
    <Container>
      <Link
        className="cart-link"
        to="/cart"
      >
        <AiOutlineShoppingCart />
        <span>{products.length}</span>
      </Link>
    </Container>
  );
}

export default CartIcon;
