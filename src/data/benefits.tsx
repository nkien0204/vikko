import {
  FiUsers,
  FiCheckSquare,
  FiTrendingUp,
  FiThumbsUp,
  FiSliders,
  FiCpu,
  FiGlobe,
  FiCheck,
  FiUserCheck,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Đơn vị đi đầu",
    description:
      "Được thành lập từ năm 2017, Công ty Quang Minh với thương hiệu VIKKO là đơn vị hàng đầu chuyên sản xuất và cung cấp vật liệu xây dựng xanh, thân thiện với môi trường như vữa xoa tường, keo dán gạch đá... với công nghệ hiện đại, đạt chuẩn quốc tế",
    bullets: [
      {
        title: "Chuỗi cung ứng",
        description:
          "Chuyên cung cấp các sản phẩm thân thiện với môi trường như vữa xoa tường, keo dán gạch đá…",
        icon: <FiSliders size={26} />,
      },
      {
        title: "Ứng dụng công nghệ",
        description:
          "Ứng dụng dây chuyền sản xuất hiện đại bậc nhất, đảm bảo hiệu suất và chất lượng đồng đều",
        icon: <FiCpu size={26} />,
      },
      {
        title: "Tiêu chuẩn quốc tế",
        description:
          "Sản phẩm đạt tiêu chuẩn quốc tế, đáp ứng yêu cầu khắt khe trong ngành xây dựng xanh",
        icon: <FiGlobe size={26} />,
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
        icon: <FiCheck size={26} />,
      },
      {
        title: "Giới chuyên môn đánh giá cao",
        description:
          "VIKKO hoàn toàn đáp ứng được các quy chuẩn kĩ thuật và được công nhận bởi ISOCERT",
        icon: <FiUserCheck size={26} />,
      },
      {
        title: "Cam kết về dịch vụ",
        description:
          "Sự tin tưởng của khách hàng là minh chứng rõ nhất cho cam kết về chất lượng và dịch vụ",
        icon: <FiCheckSquare size={26} />,
      },
    ],
    imageSrc: "/images/chung_nhan.png",
  },
  {
    title: "Giá trị cốt lõi",
    description:
      "Tại Quang Minh, chúng tôi phát triển dựa trên hai giá trị cốt lõi: chữ Tín và chữ Tâm",
    bullets: [
      {
        title: "Chữ Tín và chữ Tâm",
        description:
          "Muốn gắn bó với nghề và tạo ra giá trị, hãy làm việc từ cái Tâm và luôn đặt uy tín lên hàng đầu",
        icon: <FiThumbsUp size={26} />,
      },
      {
        title: "Sứ mệnh phát triển",
        description:
          "Biến đam mê nghề nghiệp thành công trình kiệt tác làm đẹp cho đất nước",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Đồng hành cùng khách hàng",
        description:
          "Cam kết đồng hành, sẻ chia trách nhiệm và tạo dựng giá trị bền vững cùng khách hàng",
        icon: <FiUsers size={26} />,
      },
    ],
    imageSrc: "/images/gia_tri_cot_loi.webp",
  },
];
