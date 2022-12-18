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
import { useLogin } from "../../hooks/login";
import { Oauth } from "../../types/login";
import ErrorMessage from "../ErrorMessage";

type FormProps = {
  email: string;
  password: string;
};

const Login = () => {
  const [showPass, setShowPass] = React.useState(false);

  const handleShowPass = React.useCallback(() => {
    setShowPass(!showPass);
  }, [showPass]);

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(loginValidator),
  });

  const mutation = useLogin();

  /** Watch para o email */
  const email = watch("email");

  /** Watch para o password */
  const password = watch("password");

  const payload = React.useMemo(() => {
    if (email && password)
      return {
        email,
        password,
      };
  }, [email, password]);

  /** Realiza autorização de login */
  const handleSignIn = React.useCallback(async () => {
    if (payload) {
      const mutationResponse = await mutation.mutateAsync(payload as Oauth);
      console.log(mutationResponse.accessToken);
    }
  }, [payload, mutation]);

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
          <Box opacity="1.0">
            <Text
              fontSize="24px"
              fontFamily="Nunito Sans"
              fontWeight={600}
              mt={42}
              textAlign="center"
            >
              Entrar na plataforma
            </Text>
            <Box mt="65px" w="100%" color="#333333">
              <form
                onSubmit={(e) =>
                  handleSubmit(handleSignIn)(e).catch(() => null)
                }
              >
                <FormControl
                  fontFamily="Nunito Sans !important"
                  isInvalid={!!errors?.email}
                >
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
                    alt="Input de email"
                    isInvalid={!!(errors.email && errors.email.message)}
                    {...register("email")}
                  />
                  <Box>
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                  </Box>
                </FormControl>
                <FormControl
                  fontFamily="Nunito Sans"
                  isInvalid={!!errors?.password}
                >
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
                            <ViewIcon color="#4E5D66" />
                          ) : (
                            <ViewOffIcon color="#4E5D66" />
                          )
                        }
                      />
                    </InputRightElement>
                  </InputGroup>
                  <ErrorMessage>{errors?.password?.message}</ErrorMessage>
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
              </form>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
