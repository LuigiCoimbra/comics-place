import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .product-details {
    font-size: 0.7em;
    gap: 2em;
    height: 70%;
    width: 810.594px;
    margin-bottom: 50px;
  }

  .product-detail-name {
    font-family: 'Roboto', sans-serif;
    font-size: 22.4px;
    font-weight: 700;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  .product-details > button {
    background: #e2e2e2;
    border: none;
    border-radius: 5px;
    color: #2b2b2b;
    cursor: pointer;
    font-weight: 700;
    padding: 0.8em 1.5em;
    width: max-content;
  }


  .product-details button:hover {
    filter: brightness(0.8);
  }

  .product-main-info {
    display: flex;
  }

  .product-main-info img {
    width: 35%;
  }

  .product-attributes {
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    gap: 1em;
    padding-left: 3em;
    width: 50%;

    h2 {
      color: #000000;
      font-size: 29.12px;
    }

    p {
      opacity: 0.8;
    }

    button {
      font-size: 15px;
      height: 30px;
    }

    button:hover {
      cursor: pointer;
    }
  }

  .product-price {
    opacity: 0.8;
  }

  .descripton {
    font-size: 14px;
  }

  .product-attributes p {
    font-weight: 700;
  }
`;
