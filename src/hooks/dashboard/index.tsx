import { useQuery } from "react-query";
import { useToast } from "@chakra-ui/react";
import {
  getAvatarImage,
  getAverageDiaryTicket,
  getAverageMonthTicket,
  getConversionResume,
  getExpectedCanceledOrdersByMonth,
  getExpectedProfitPerMonth,
  getMaintenanceAlerts,
  getOrdersDoneByMonth,
  getOrdersPerMonth,
  getProducts,
  getProfileDataUser,
  getRealProfitPerMonth,
  getSellsByMonth,
  getSellsPerMonth,
} from "../../services/dashboard";
import React from "react";

export const useGetAvatarImage = () => {
  const toast = useToast();

  return useQuery(["avatar"], () => getAvatarImage(), {
    onError: () => {
      toast({
        title: "Erro ao carregar imagem de perfil!",
        description: "Ocorreu algum erro ao carregar a imagem do perfil",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetAverageDiaryTicket = () => {
  const toast = useToast();

  return useQuery(["ticket-diary"], () => getAverageDiaryTicket(), {
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

  return useQuery(["ticket-monthly"], () => getAverageMonthTicket(), {
    onError: () => {
      toast({
        title: "Erro ao carregar ticket médio mensal",
        description:
          "Ocorreu algum erro ao carregar o valor do ticket médio mensal",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetMaintenanceAlerts = () => {
  const toast = useToast();

  return useQuery(["maintenance"], () => getMaintenanceAlerts(), {
    onError: () => {
      toast({
        title: "Erro ao carregar informações de manutenção",
        description: "Ocorreu algum erro ao carregar informações de manutenção",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetOrdersDoneByMonth = () => {
  const toast = useToast();

  return useQuery(["orders-done"], () => getOrdersDoneByMonth(), {
    onError: () => {
      toast({
        title: "Erro ao carregar número de pedidos por mês",
        description:
          "Ocorreu algum erro ao carregar informações sobre o número de pedidos por mês",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetSellsByMonth = () => {
  const toast = useToast();

  return useQuery(["sells-by-month"], () => getSellsByMonth(), {
    onError: () => {
      toast({
        title: "Erro ao carregar vendas mensais",
        description:
          "Ocorreu algum erro ao carregar informações sobre vendas mensais",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetSellsPerMonth = () => {
  const toast = useToast();

  return useQuery(["sells-per-month"], () => getSellsPerMonth(), {
    onError: () => {
      toast({
        title: "Erro ao carregar vendas por mês",
        description:
          "Ocorreu algum erro ao carregar informações sobre vendas por mês",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetOrdersPerMonth = () => {
  const toast = useToast();

  return useQuery(["orders-month"], () => getOrdersPerMonth(), {
    onError: () => {
      toast({
        title: "Erro ao carregar pedidos por mês",
        description:
          "Ocorreu algum erro ao carregar informações sobre pedidos por mês",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetExpectedProfitPerMonth = () => {
  const toast = useToast();

  return useQuery(["expected-profit"], () => getExpectedProfitPerMonth(), {
    onError: () => {
      toast({
        title: "Erro ao carregar lucro esperado mensal",
        description:
          "Ocorreu algum erro ao carregar informações sobre o lucro esperado mensal ",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetRealProfitPerMonth = () => {
  const toast = useToast();

  return useQuery(["real-profit"], () => getRealProfitPerMonth(), {
    onError: () => {
      toast({
        title: "Erro ao carregar lucro real mensal",
        description:
          "Ocorreu algum erro ao carregar informações sobre o lucro real mensal ",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetCanceledOrdersByMonth = () => {
  const toast = useToast();

  return useQuery(
    ["canceled-orders"],
    () => getExpectedCanceledOrdersByMonth(),
    {
      onError: () => {
        toast({
          title: "Erro ao carregar pedidos cancelados",
          description:
            "Ocorreu algum erro ao carregar informações sobre os pedidos cancelados",
          status: "error",
          duration: 5000,
          position: "bottom-left",
        });
      },
    }
  );
};

export const useGetProfileDataUser = () => {
  const toast = useToast();

  return useQuery(["users"], () => getProfileDataUser(), {
    onError: () => {
      toast({
        title: "Erro ao carregar informações",
        description:
          "Ocorreu algum erro ao carregar informações sobre o perfi do usuário",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetConversionResume = () => {
  const toast = useToast();

  return useQuery(["conversion"], () => getConversionResume(), {
    onError: () => {
      toast({
        title: "Erro ao carregar informações de conversão",
        description:
          "Ocorreu algum erro ao carregar o valor das informações de conversão",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};

export const useGetProducts = (currentPage: number, searchOption: string) => {
  const toast = useToast();
  const page = React.useMemo(() => currentPage, [currentPage]);
  const search = React.useMemo(() => searchOption, [searchOption]);

  return useQuery(["products", page, search], () => getProducts(page, search), {
    onError: () => {
      toast({
        title: "Erro ao carregar a listagem dos produtos",
        description: "Ocorreu algum erro ao carregar a listagem dos produtos",
        status: "error",
        duration: 5000,
        position: "bottom-left",
      });
    },
  });
};
