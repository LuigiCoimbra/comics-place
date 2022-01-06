import styled from 'styled-components';

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
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
    margin: 10px;
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
`;
