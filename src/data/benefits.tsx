import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Đơn vị đi đầu",
    description:
      "VIKKO là đơn vị hàng đầu chuyên sản xuất và cung cấp vật liệu xây dựng xanh, thân thiện với môi trường như vữa xoa tường, keo dán gạch đá... với công nghệ hiện đại, đạt chuẩn quốc tế",
    bullets: [
      {
        title: "Chuỗi cung ứng",
        description:
          "Chuyên cung cấp các sản phẩm thân thiện với môi trường như vữa xoa tường, keo dán gạch đá…",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Ứng dụng công nghệ",
        description:
          "Ứng dụng dây chuyền sản xuất hiện đại bậc nhất, đảm bảo hiệu suất và chất lượng đồng đều",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Tiêu chuẩn quốc tế",
        description:
          "Sản phẩm đạt tiêu chuẩn quốc tế, đáp ứng yêu cầu khắt khe trong ngành xây dựng xanh",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/gioi_thieu.png",
  },
  {
    title: "Khách hàng tin dùng",
    description: "Sản phẩm được các chủ thầu trên cả nước tin dùng",
    bullets: [
      {
        title: "Chất lượng được kiểm chứng",
        description:
          "Chất lượng sản phẩm đã được kiểm chứng thực tế bởi các dự án lớn nhỏ trên toàn quốc",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Giới chuyên môn đánh giá cao",
        description:
          "VIKKO hoàn toàn đáp ứng được các quy chuẩn kĩ thuật và được công nhận bởi ISOCERT",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Cam kết về dịch vụ",
        description:
          "Sự tin tưởng của khách hàng là minh chứng rõ nhất cho cam kết về chất lượng và dịch vụ",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/chung_nhan.png",
  },
  {
    title: "Nhân sự chất lượng cao",
    description:
      "Với đội ngũ chuyên môn cao, công ty khẳng định vị thế trên thị trường",
    bullets: [
      {
        title: "Tay nghề vững vàng",
        description:
          "Cán bộ, kỹ sư có chuyên môn và tay nghề vững vàng, thường xuyên cập nhật công nghệ mới",
        icon: <FiLock size={26} />,
      },
      {
        title: "Liên tục cải tiến",
        description:
          "Liên tục cải tiến kỹ thuật và quy trình sản xuất, nâng cao hiệu quả và giảm thiểu tác động môi trường",
        icon: <FiUser size={26} />,
      },
      {
        title: "Thương hiệu được khẳng định",
        description:
          "Thương hiệu Hưng Thịnh Phát ngày càng được khẳng định, trở thành đối tác đáng tin cậy của nhiều công trình",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/chong_tham_vikko.jpeg",
  },
];
