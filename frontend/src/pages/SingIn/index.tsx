import React, { useRef, useCallback, useContext } from "react";
import { AuthContextImp } from "../../context/AuthContextImp";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import logo from "../../assets/logo_2.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../utils/getValidationErrors";
import * as Yup from "yup";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContextImp);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required("E-mail obrigatório!")
            .email("Informe um e-mail válido!"),
          password: Yup.string().required("Senha obrigatória!"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({email: data.email, password: data.password});
      } catch (exception) {
        formRef.current?.setErrors(getValidationErrors(exception));
      }
    },
    [signIn]
  );
  return (
    <Container>
      <Content>
        <img src={logo} alt="Massas" height="150" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
