export interface IMenuItem {
  name: string;
  href: string;
  subMenu?: IMenuItem[];
}

export const listMenu: IMenuItem[] = [
  {
    name: "Trang chủ",
    href: "/",
  },
  {
    name: "Giới thiệu",
    href: "/about",
  },
];
