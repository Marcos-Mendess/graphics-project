import { useQuery } from "react-query";
import { useToast } from "@chakra-ui/react";
import {
  getAvatarImage,
  getAverageDiaryTicket,
  getAverageMonthTicket,
} from "../../services/auth";

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

export const useGetAverageDiaryTicket = () => {
  const toast = useToast();

  return useQuery(["avatar"], () => getAverageDiaryTicket(), {
    onError: () => {
      toast({
        title: "Erro ao carregar ticket médio diário",
        description:
          "Ocorreu algum erro ao carregar o valor do ticket médio diário",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetAverageMonthTicket = () => {
  const toast = useToast();

  return useQuery(["avatar"], () => getAverageMonthTicket(), {
    onError: () => {
      toast({
        title: "Erro ao carregar ticket médio diário",
        description:
          "Ocorreu algum erro ao carregar o valor do ticket médio diário",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};
