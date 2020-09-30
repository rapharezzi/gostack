import React from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import { Container, Content, Background } from "./styles";
import logo from "../../assets/logo_2.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={logo} alt="Massas" height="150" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
