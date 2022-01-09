import styled from 'styled-components';

export const Container = styled.div`
`;

export const Card = styled.section`
  .product-card {
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    justify-content: space-between;
    margin: 20px;
    position: relative;
    text-align: center;
    width: 30em;
  }

  .product-card:hover {
    outline: 3px solid rgba(0, 0, 0, 0.1);
  }

  .photo-item {
    align-self: center;
    margin-top: 1em;
    width: 300px;
    height: 300px;
  }

  .link-item {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    justify-content: space-between;
    padding: 1em 1.5em;
  }

  .title {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-decoration: none;
    color: black;
  }

  .title:hover {
    opacity: 0.8;
  }

  .price {
    color: black;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .cart-button {
    background: #e2e2e2;
    border: none;
    border-radius: 0 0 5px 5px;
    color: #2b2b2b;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    height: 3.5em;
    margin-top: auto;
    width: 100%;
  }

  .cart-button:hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  .cart-button:active {
    filter: brightness(0.95);
  }

  .at-cart {
    color: #3DDD25;
    pointer-events: none;
    position: absolute;
    right: 1.5em;
    bottom: 5em;
  }

  .at-cart-icon {
    font-size: 1.7em;
  }
`;
