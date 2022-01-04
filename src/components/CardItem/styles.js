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
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 6px;
  width: 386.656px;
  margin: 10px;
  margin-bottom: 45px;

  .photo-item {
    width: 386.656px;
    height: 386.656px;
    box-shadow: 0 0 1em gray;
  }

  .link-item {
    text-decoration: none;
  }

  p {
    color: black;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.8px;
    margin-left: 5px;
    margin-top: 25px;
  }

  p:hover {
    color: #E62429;
  }
`;
