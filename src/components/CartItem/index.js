import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
// import { Container } from './styles';

function CartItem({
  id, title, prices, thumbnail, amount, removeItemFromCart, updateItemAmount,
}) {
  const [quantity, setQuantity] = useState(amount);

  const getNewQuantity = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      default:
        return state;
    }
  };

  const handleClick = (target) => {
    const {
      name,
    } = target;
    const newQuantity = getNewQuantity(quantity, name);

    if (newQuantity > 0) {
      setQuantity(newQuantity);
      updateItemAmount(newQuantity, id);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="remove-item"
        onClick={() => removeItemFromCart(id, quantity)}
      >
        <ImCross />
      </button>
      <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      <p className="item-title">{title}</p>
      <div>
        <button
          type="button"
          name="decrement"
          onClick={({ target }) => { handleClick(target); }}
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          type="button"
          name="increment"
          onClick={({ target }) => handleClick(target)}
        >
          +
        </button>
      </div>
      <p className="item-price">
        R$
        {' '}
        {prices}
      </p>
    </div>
  );
}

export default CartItem;
