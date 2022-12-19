import { useQuery } from "react-query";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { getAvatarImage } from "../../services/auth";

export const useGetAvatarImage = () => {
  const toast = useToast();

  return useQuery(["avatar"], () => getAvatarImage(), {
    onError: () => {
      toast({
        title: "Erro ao carregar imagem de perfil!",
        description: "Ocorreu algum erro ao carregar a sua foto do perfil",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};
