import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100%;
  position: absolute;
  display: flex;
  height: 80vh;

  .title-image {
    font-family: 'Fira Mono', monospace;
    text-align: center;
    img {
      box-shadow: 0 0 1em gray;
      margin-top: 15px;
      width: 500px;
      height: 500px;
    }
  }

  .price-title {
    font-family: 'Fira Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    text-align: center;

    .price {
      font-size: 26px;
    }

    div {
      margin-top: 60px;
      margin-bottom: 30px;

      p {
        font-size: 18px;
      }
    }

    .add-cart {
      border: 2px solid #555555;
      color: black;
      font-size: 15px;
      font-weight: 600;
      height: 40px;
      width: 220px;
      border-radius: 6px;
      transition-duration: 0.4s;
    }

    .add-cart:hover {
      background-color: #555555;
      color: white;
      cursor: pointer;
    }
  }
`;
