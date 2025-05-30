import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
  address: string;
} = {
  subheading: "Vật liệu chuẩn – Công trình chất",
  quickLinks: [
    {
      text: "Giới thiệu",
      url: "#about",
    },
    {
      text: "Sản phẩm",
      url: "#products",
    },
    {
      text: "Dự án",
      url: "#projects",
    },
  ],
  email: "congtyquangminh20a@gmail.com",
  telephone: "0825-098-189",
  socials: {
    website: "https://vikko.vn",
  },
  address:
    "Số nhà 20A, Tổ 8, Phường Chùa Hang, Thành phố Thái Nguyên, Tỉnh Thái Nguyên",
};
