import CardIcon from "../components/icons/Card";
import HomeIcon from "../components/icons/Card";
import CategoryIcon from "../components/icons/Category";
import GearIcon from "../components/icons/Gear";
import LogisticsIcon from "../components/icons/Logistics";
import PersonIcon from "../components/icons/Person";
import ServicesIcon from "../components/icons/Services";
import ShopCartIcon from "../components/icons/ShopCart";
import TextIcon from "../components/icons/Text";
import { MenuLinksModel } from "../types/menu";

export const MENU_LIST: MenuLinksModel[] = [
  {
    id: "dashboard",
    name: "Painel",
    to: "/painel",
    testeId: "sidenav-dashboard",
    Icon: HomeIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/categories",
    testeId: "sidenav-dashboard",
    Icon: CategoryIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/services",
    testeId: "sidenav-dashboard",
    Icon: ServicesIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/logistics",
    testeId: "sidenav-dashboard",
    Icon: LogisticsIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/shop",
    testeId: "sidenav-dashboard",
    Icon: ShopCartIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/card",
    testeId: "sidenav-dashboard",
    Icon: CardIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/text",
    testeId: "sidenav-dashboard",
    Icon: TextIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/person",
    testeId: "sidenav-dashboard",
    Icon: PersonIcon,
  },
  {
    id: "dashboard",
    name: "Painel",
    to: "/gear",
    testeId: "sidenav-dashboard",
    Icon: GearIcon,
  },
];
