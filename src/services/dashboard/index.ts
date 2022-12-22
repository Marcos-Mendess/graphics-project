import {
  ConversionResume,
  ItemList,
  OrdersByMonthDashboard,
  OrdersResponse,
  TicketResponse,
  UsersResume,
} from "./../../types/menu";
import axios from "axios";
import { AlertResponse, AvatarImage } from "../../types/menu";

/**
 * Serviço responsável por retornar imagem do perfil do usuário
 */
export async function getAvatarImage() {
  const response = await axios.get<AvatarImage>(
    `https://628bf017667aea3a3e387e51.mockapi.io/me`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar ticket médio diário
 */
export async function getAverageDiaryTicket() {
  const response = await axios.get<TicketResponse>(
    `https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar ticket médio mensal
 */
export async function getAverageMonthTicket() {
  const response = await axios.get<TicketResponse>(
    `https://628bf017667aea3a3e387e51.mockapi.io/avg-ticket-day`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de produtos em manutenção
 */
export async function getMaintenanceAlerts() {
  const response = await axios.get<AlertResponse[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/alerts`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de pedidos no mês
 */
export async function getOrdersDoneByMonth() {
  const response = await axios.get<OrdersResponse>(
    `https://628bf017667aea3a3e387e51.mockapi.io/orders-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de vendas no mês
 */
export async function getSellsByMonth() {
  const response = await axios.get<OrdersResponse>(
    `https://628bf017667aea3a3e387e51.mockapi.io/sells-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de pedidos no mês
 */
export async function getSellsPerMonth() {
  const response = await axios.get<OrdersByMonthDashboard[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de pedidos por mês
 */
export async function getOrdersPerMonth() {
  const response = await axios.get<OrdersByMonthDashboard[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/sells-per-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar valor real do lucro mensal
 */
export async function getRealProfitPerMonth() {
  const response = await axios.get<OrdersByMonthDashboard[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/profit-per-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar valor experado de lucro
 */
export async function getExpectedProfitPerMonth() {
  const response = await axios.get<OrdersByMonthDashboard[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/profit-expectation-per-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de pedidos cancelados por mês
 */
export async function getCanceledOrdersByMonth() {
  const response = await axios.get<OrdersByMonthDashboard[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/canceled-orders-per-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número experado de pedidos
 * cancelados por mês
 */
export async function getExpectedCanceledOrdersByMonth() {
  const response = await axios.get<OrdersByMonthDashboard[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/orders-per-month`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar informações dos usuários
 */
export async function getProfileDataUser() {
  const response = await axios.get<UsersResume>(
    `https://628bf017667aea3a3e387e51.mockapi.io/users-resume`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar objeto de conversão
 */
export async function getConversionResume() {
  const response = await axios.get<ConversionResume>(
    `https://628bf017667aea3a3e387e51.mockapi.io/conversions-resume`
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}

/**
 * Serviço responsável por retornar número de pedidos por mês
 */
export async function getProducts(
  page: number,
  limitPerPage: number,
  search?: string
) {
  const response = await axios.get<ItemList[]>(
    `https://628bf017667aea3a3e387e51.mockapi.io/products`,
    {
      params: {
        page,
        limit: limitPerPage,
        search,
      },
    }
  );
  if (response?.status !== 200) {
    throw new Error("Ocorreu algum erro");
  }
  return response?.data;
}
