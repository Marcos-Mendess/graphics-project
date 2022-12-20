export enum SideNavOptions {
  HOME,
  CATEGORY,
  SERVICES,
  LOGISTICS,
  SHOP_CART,
  CARD,
  TEXT,
  PERSON,
  GEAR,
}

/**
 * Interface usada para composição do menu.
 */
export interface ServicesList {
  title: string;
  icon: any;
  selected: SideNavOptions;
  disabled?: boolean;
}

export interface UsersResume {
  "transactions-per-age": TransactionPerAge[];
  "sessions-per-sex": SessionPerSex;
  "transactions-per-client-type": TransactionClientType[];
}

export interface ConversionResume {
  "total-per-day": ConversionType;
  "products-view-per-month": ConversionType;
  "product-page-conversion-per-month": ConversionType;
  "add-to-cart-per-month": ConversionType;
  "checkout-email-per-month": ConversionType;
  "checkout-registration-per-month": ConversionType;
  "checkout-shipping-per-month": ConversionType;
}

export type AvatarImage = {
  username: string;
  name: string;
  avatar: string;
};

export type TicketResponse = {
  value: number;
  growth: number;
};

export type OrdersResponse = {
  value: number;
  growth: number;
};

export type ConversionType = {
  value: number;
  growth: number;
};

export type AlertResponse = {
  type: string;
  value: number;
  since: string;
};

export type OrdersByMonthDashboard = {
  month: number;
  value: number;
};

export type TransactionPerAge = {
  category: string;
  value: number;
};

export type TransactionClientType = {
  category: string;
  value: number;
};

export type SessionPerSex = {
  male: string;
  female: string;
};
