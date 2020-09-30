import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import logo from "../../assets/logo_2.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Massas" height="150" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background></Background>
  </Container>
);

export default SignIn;
