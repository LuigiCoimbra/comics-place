import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  background: #202020;
  display: flex;
  justify-content: space-between;
  height: 75px;
  border-bottom: 1.7px solid #393939;

  a {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 36px;
    margin-left: 15px;
    text-decoration: none;
    color: #fff;
  }

  div {
    border: none;
    margin: 15px;
    border-left: 1.7px solid #393939;
  }

  .shoppingCart {
    color: #ffffe3;
    margin: 5px;
  }
`;
