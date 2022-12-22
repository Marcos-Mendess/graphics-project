import { OrdersByMonthDashboard, TransactionPerAge } from "../types/menu";

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

export const createChartValueArray = (
  data: OrdersByMonthDashboard[] | TransactionPerAge[]
) => {
  const categoriesArray: number[] = [];
  data.map((month) => {
    categoriesArray.push(month?.value);
  });
  return categoriesArray;
};

export const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const createAgeCategoriesArray = (data: TransactionPerAge[]) => {
  const ageCategoriesArray: string[] = [];
  data.map((object) => {
    ageCategoriesArray.push(object.category);
  });
  return ageCategoriesArray;
};

export const legendPipe = (value: string[]) => {
  const newArray: string[] = [];
  value.map((value) => {
    switch (value) {
      case "new":
        newArray.push("Novo cliente");
        return;
      case "others":
        newArray.push("Cliente retornando");
        return;
      default:
        return;
    }
  });
  return newArray;
};

export const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
