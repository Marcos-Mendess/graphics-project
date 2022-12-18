import { useQuery, useMutation } from "react-query";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { loginOauth } from "../../services/auth";
import { Oauth } from "../../types/login";
import React from "react";

export const useLogin = () => {
  const toast = useToast();
  const router = useRouter();

  return useMutation(
    "login",
    (payload: Oauth) => loginOauth(payload as Oauth),
    {
      onSuccess: () => {
        router.push("/painel");
      },
      onError: (error: AxiosError) => {
        toast({
          title: "Erro no login!",
          description: "Seu e-mail ou senha está incorreto",
          status: "error",
          duration: 5000,
          position: "bottom-left",
        });
      },
    }
  );
};
