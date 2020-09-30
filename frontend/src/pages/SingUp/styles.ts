import styled from "styled-components";
import backgroudImg from "../../assets/massas_background.png";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #335d2d
`;

export const Content = styled.div`
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

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover{
      color: ${shade(0.3, "#f4ede8")}
    }
  }

  > a {
    color: #eaeaea;
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
      color: ${shade(0.3, "#eaeaea")}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroudImg}) no-repeat center;
  background-size: cover;
`;
