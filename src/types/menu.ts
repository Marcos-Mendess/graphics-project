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

export type AvatarImage = {
  username: string;
  name: string;
  avatar: string;
};
