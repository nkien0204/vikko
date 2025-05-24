import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";

import { IPricing } from "@/types";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features, imageSrc, width } = tier;

  return (
    <div
      className={clsx(
        "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full relative",
        {
          "shadow-lg": highlight,
        },
      )}
    >
      {highlight && (
        <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow z-20">
          Nổi bật
        </span>
      )}
      <div className="p-5 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
        {/* <p className="text-3xl md:text-5xl font-bold mb-6">
                    <span className={clsx({ "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-normal text-gray-600">/mo</span>}
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-colors", { "bg-primary hover:bg-primary-accent": highlight, "bg-hero-background hover:bg-gray-200": !highlight })}>
                    Get Started
                </button> */}
      </div>
      <div className="p-4 mt-1 relative h-auto ">
        <Image
          key={"0"}
          src={imageSrc}
          quality={100}
          width={width}
          height={200}
          priority={true}
          unoptimized={true}
          alt="img"
          className="relative mt-1 md:mt-5 mx-auto z-10"
        />
        {/* <p className="font-bold mb-0">FEATURES</p>
        <p className="text-foreground-accent mb-5">
          Everything in basic, plus...
        </p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default PricingColumn;
