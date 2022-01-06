import styled from 'styled-components';

export const Container = styled.nav`
  align-items: center;
  background: #E2E2E2;
  display: flex;
  justify-content: space-between;
  height: 75px;
  border-bottom: 1.7px solid #CBCBCB;

  a {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 36px;
    margin-left: 15px;
    text-decoration: none;
    color: #2B2B2B;
  }

  div {
    border: none;
    margin: 15px;
    border-left: 1.7px solid #CBCBCB;
  }

  .link {
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: #2b2b2b;
    display: grid;
    font-size: 2em;
    height: 1.5em;
    place-items: center;
    position: fixed;
    right: 0.8em;
    top: 0.5em;
    width: 1.5em;
    z-index: 2;
  }
`;
