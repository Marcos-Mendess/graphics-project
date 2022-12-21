import { OrdersByMonthDashboard } from "../types/menu";

export const currencyFormatter = (value: number, locale = "pt-BR"): string => {
  const options = { style: "currency", currency: "BRL" };
  return value?.toLocaleString(locale, options) ?? "0,00";
};

export const getLastMonth = () => {
  const today = new Date();
  today.setMonth(today.getMonth() - 1);
  return today.toLocaleDateString("pt-BR", { month: "long" });
};

export const formatDate = (date: string) => {
  const [year, month, day] = date.split("-");
  const formatedDate = [month, day, year].join("/");
  return formatedDate;
};

export const differenceInDaysBetweenTwoDates = (since: string) => {
  const today = new Date();
  const alertDate = new Date(formatDate(since));
  const diffinSeconds = today.getTime() - alertDate.getTime();
  return (diffinSeconds / (1000 * 3600 * 24)).toFixed();
};

export const createChartValueArray = (data: OrdersByMonthDashboard[]) => {
  const categoriesArray: number[] = [];
  data.map((month) => {
    categoriesArray.push(month?.value);
  });
  return categoriesArray;
};
