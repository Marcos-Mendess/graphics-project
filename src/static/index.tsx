import DashBoard from "../components/DashBoard";
import CardIcon from "../components/icons/Card";
import CategoryIcon from "../components/icons/Category";
import GearIcon from "../components/icons/Gear";
import HomeIcon from "../components/icons/Home";
import LogisticsIcon from "../components/icons/Logistics";
import PersonIcon from "../components/icons/Person";
import ServicesIcon from "../components/icons/Services";
import ShopCartIcon from "../components/icons/ShopCart";
import TextIcon from "../components/icons/Text";
import Logistics from "../components/Logistics";
import NewProduct from "../components/NewProduct";
import { ServicesList, SideNavOptions } from "../types/menu";

/** Função responsável por renderizar determinado componente
 * segundo a escolha na sidebar
 */
export const showServicesByOptions = (option: SideNavOptions) => {
  switch (option) {
    case SideNavOptions.HOME:
      return <DashBoard />;
    case SideNavOptions.CATEGORY:
      return <NewProduct />;
    case SideNavOptions.LOGISTICS:
      return <Logistics />;
    case SideNavOptions.SERVICES:
    case SideNavOptions.SHOP_CART:
    case SideNavOptions.CARD:
    case SideNavOptions.TEXT:
    case SideNavOptions.PERSON:
    case SideNavOptions.GEAR:
      return null;
    default:
      const exaustiveCheck: never = option;
      throw new Error(`unhandled option${exaustiveCheck}`);
  }
};

/** Array contendo todos os serviços existentes da aplicação */
export const SERVICES_LIST: ServicesList[] = [
  {
    title: "Home",
    icon: HomeIcon,
    selected: SideNavOptions.HOME,
    disabled: false,
  },
  {
    title: "Categories",
    icon: CategoryIcon,
    selected: SideNavOptions.CATEGORY,
    disabled: false,
  },
  {
    title: "Services",
    icon: ServicesIcon,
    selected: SideNavOptions.SERVICES,
    disabled: true,
  },
  {
    title: "Logistics",
    icon: LogisticsIcon,
    selected: SideNavOptions.LOGISTICS,
    disabled: false,
  },
  {
    title: "Shop",
    icon: ShopCartIcon,
    selected: SideNavOptions.SHOP_CART,
    disabled: true,
  },
  {
    title: "Card",
    icon: CardIcon,
    selected: SideNavOptions.CARD,
    disabled: true,
  },

  {
    title: "Text",
    icon: TextIcon,
    selected: SideNavOptions.TEXT,
    disabled: true,
  },
  {
    title: "Person",
    icon: PersonIcon,
    selected: SideNavOptions.PERSON,
    disabled: true,
  },
  {
    title: "Gear",
    icon: GearIcon,
    selected: SideNavOptions.GEAR,
    disabled: true,
  },
];

export const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];
