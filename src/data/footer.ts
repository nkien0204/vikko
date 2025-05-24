import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
  address: string;
} = {
  subheading: "Vật liệu xanh – Dựng công trình mơ ước",
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
  telephone: "0988 7766 68 / 0988 7766 86",
  socials: {
    website: "https://vikko.vn",
  },
  address:
    "Số nhà 20A, Tổ 8, Phường Chùa Hang, Thành phố Thái Nguyên, Tỉnh Thái Nguyên",
};
