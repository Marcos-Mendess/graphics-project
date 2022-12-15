import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import mainLogo from "../../../public/img/main-logo.png";
import { loginValidator } from "./validatorScheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  type FormProps = {
    login: string;
    password: string;
  };
  const [showPass, setShowPass] = React.useState(false);

  const handleSignIn = React.useCallback(() => {
    console.log("função que efetua o login");
  }, []);

  const handleShowPass = React.useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: yupResolver(loginValidator) });

  return (
    <>
      <Box
        position="sticky"
        w="894px"
        h="1080px"
        m="auto"
        backgroundColor="#FFFFFF"
        zIndex={999}
      >
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
              textAlign="center"
            >
              Entrar na plataforma
            </Text>
            <Box
              mt="65px"
              as="form"
              onSubmit={handleSubmit(handleSignIn)}
              w="100%"
              color="#333333"
            >
              <FormControl fontFamily="Nunito Sans !important">
                <FormLabel
                  fontFamily="Ubuntu"
                  fontSize="18px"
                  fontWeight={400}
                  ml="10px"
                  mb="4px"
                >
                  E-mail
                </FormLabel>
                <Input
                  variant="loginVariant"
                  backgroundColor="#F3F5F6"
                  placeholder="Digite seu e-mail"
                  autoFocus={true}
                  data-testid="input-login"
                  aria-label="Seu e-mail"
                  isInvalid={!!(errors.login && errors.login.message)}
                  {...register("login")}
                />
                <FormErrorMessage>{errors?.login?.message}</FormErrorMessage>
              </FormControl>
              <FormControl fontFamily="Nunito Sans">
                <FormLabel
                  fontFamily="Ubuntu"
                  fontSize="18px"
                  fontWeight={400}
                  ml="10px"
                  mt="40px"
                  mb="4px"
                >
                  Senha
                </FormLabel>
                <InputGroup size="lg">
                  <Input
                    variant="loginVariant"
                    backgroundColor="#F3F5F6"
                    placeholder="Digite sua senha"
                    autoFocus={true}
                    data-testid="input-password"
                    size="lg"
                    type={showPass ? "text" : "password"}
                    aria-label="Seu e-mail"
                    isInvalid={!!(errors.password && errors.password.message)}
                    {...register("password")}
                  />
                  <InputRightElement m={{ base: 0, sm: 2 }}>
                    <IconButton
                      mb="14px"
                      ml="16px"
                      onClick={handleShowPass}
                      aria-label="Exibir/Ocultar Senha"
                      borderRadius="full"
                      icon={
                        showPass ? (
                          <ViewIcon color="#043C68" />
                        ) : (
                          <ViewOffIcon color="#043C68" />
                        )
                      }
                    />
                  </InputRightElement>
                </InputGroup>

                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Box w="100%" display="flex" justifyContent="center">
                <Button
                  alignItems="center"
                  mt="48px"
                  height="40px"
                  w="120px"
                  background="#5A4CA7"
                  color="#FFFFFF"
                  borderRadius="8px"
                  fontFamily="Ubuntu"
                  fontWeight="600"
                  fontSize="20px"
                  type="submit"
                  loadingText="Entrando..."
                  aria-label="Login na plataforma"
                  data-testid="submit"
                >
                  Entrar
                </Button>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
