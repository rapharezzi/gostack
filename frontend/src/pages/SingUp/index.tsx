import React, { useCallback, useRef } from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { Container, Content, Background } from "./styles";
import logo from "../../assets/logo_2.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório!"),
        email: Yup.string()
          .required("E-mail obrigatório!")
          .email("Informe um e-mail válido!"),
        password: Yup.string().min(6, "Senha mínimo 6 digitos!"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (exception) {
      formRef.current?.setErrors(getValidationErrors(exception));
    }
  }, []);

  return (
    <Container>
      <Background></Background>
      <Content>
        <img src={logo} alt="Massas" height="150" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
