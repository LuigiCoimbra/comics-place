import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  text-align: center;

  .empyt-cart {
    text-align: center;
    margin-top: 50px;
    opacity: 0.8;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 5em;
    padding-bottom: 3em;
    width: 60%;
  }

  .total-price {
    align-self: flex-end;
    padding: 2em 0;
    opacity: 0.8;
  }

  .button {
    display: flex;
    justify-content: center;
  }

  .purchase {
    align-self: center;
    background: #e2e2e2;
    border-radius: 5px;
    color: #2b2b2b;
    display: flex;
    font-size: 0.8em;
    font-weight: 700;
    margin-bottom: 100px;
    padding: 1em 2em;
    text-decoration: none;
    width: max-content;
  }
  
  .purchase:hover {
  filter: brightness(0.8);
}
`;
