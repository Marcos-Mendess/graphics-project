import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import mainLogo from "../../../public/img/main-logo.png";
import { loginValidator } from "./validatorScheme";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  type FormProps = {
    login: string;
    password: string;
  };
  const [showPass, setShowPass] = React.useState(false);

  const handleSignIn = React.useCallback(() => {
    console.log("função que efetua o login");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(loginValidator) });

  return (
    <>
      <Flex flexDir="column" alignItems="center">
        <Flex mt={204}>
          <Image alt="main-logo" quality={100} src={mainLogo} />
        </Flex>
        <Box>
          <Text
            fontSize="24px"
            fontFamily="Nunito Sans"
            fontWeight={600}
            mt={42}
          >
            Entrar na plataforma
          </Text>
          <Box as="form" onSubmit={handleSubmit(handleSignIn)} w="100%">
            <FormControl fontFamily="Nunito Sans">
              <FormLabel>Login</FormLabel>
              <Input
                placeholder="Digite seu e-mail"
                autoFocus={true}
                data-testid="input-login"
                aria-label="Seu e-mail"
                isInvalid={!!(errors.login && errors.login.message)}
                {...register("login")}
                color="#333333"
              />
              <FormErrorMessage>{errors?.login?.message}</FormErrorMessage>
            </FormControl>
            <FormControl fontFamily="Nunito Sans">
              <FormLabel>Senha</FormLabel>
              <Input
                placeholder="Digite sua senha"
                autoFocus={true}
                data-testid="input-password"
                aria-label="Seu e-mail"
                isInvalid={!!(errors.password && errors.password.message)}
                {...register("password")}
                color="#333333"
              />
              <InputRightElement m={{ base: 0, sm: 2 }}>
                <IconButton
                  /*  onClick={handleShowPass} */
                  aria-label="Exibir/Ocultar Senha"
                  borderRadius="full"
                  icon={
                    showPass ? (
                      <VisiblePassword color="#043C68" />
                    ) : (
                      <HiddenPassword color="#043C68" />
                    )
                  }
                />
              </InputRightElement>
              <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </FormControl>
            <Button
              height="48px"
              background="#183B65"
              borderRadius="24px"
              padding="12px 24px"
              color="#5A4CA7"
              fontWeight="600"
              fontSize="16px"
              lineHeight="150%"
              width="100%"
              size="lg"
              type="submit"
              loadingText="Entrando..."
              aria-label="Login na Conta Justa Web"
              data-testid="submit"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
