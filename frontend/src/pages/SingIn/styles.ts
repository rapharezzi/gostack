import Styled from "styled-components";
import backgroudImg from "../../assets/background.png";
import { shade } from "polished";

export const Container = Styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #01271B;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #058C42;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color: 0.2s;
    &:hover{
      background: ${shade(0.2, '#01271B')}
    }
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover{
      color: ${shade(0.3, '#f4ede8')}
    }
  }

  > a {
    color: #058C42;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover{
      color: ${shade(0.3, '#058C42')}
    }
  }
`;

export const Background = Styled.div`
  flex: 1;
  background: url(${backgroudImg}) no-repeat center;
  background-size: cover;
`;
