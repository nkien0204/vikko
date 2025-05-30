import IntroSection from "./IntroSection";

import { introInfo } from "@/data/introInfo";

const IntroComp: React.FC = () => {
  return (
    <div id="about">
      <h2 className="text-center mb-4 text-3xl lg:text-5xl lg:leading-tight font-bold">
        Giới thiệu
      </h2>
      {introInfo.map((item, index) => {
        return (
          <IntroSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        );
      })}
    </div>
  );
};

export default IntroComp;
