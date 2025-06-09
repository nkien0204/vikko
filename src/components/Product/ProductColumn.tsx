"use client";
import clsx from "clsx";
// import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";

import { IProduct } from "@/types";

interface Props {
  tier: IProduct;
  highlight?: boolean;
}

const ProductColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, imageSrc, width, features } = tier;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full relative transition-transform duration-200 hover:scale-105 hover:shadow-2xl",
          {
            "shadow-lg": highlight,
          },
        )}
        style={{ cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      >
        {highlight && (
          <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow z-20">
            Nổi bật
          </span>
        )}
        <div className="p-5 border-b border-gray-200 rounded-t-xl">
          <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
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
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all duration-300"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-gray-200 animate-modal-pop"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors rounded-full w-9 h-9 flex items-center justify-center text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-extrabold mb-3 text-center text-gray-900">{name}</h2>
              <div className="w-full flex justify-center mb-5">
                <Image
                  src={imageSrc}
                  quality={100}
                  width={width}
                  height={200}
                  unoptimized={true}
                  alt="img"
                  className="rounded-xl shadow-md"
                />
              </div>
              {features && (
                <ul className="list-disc pl-5 space-y-2 text-gray-700 w-full max-w-xs mx-auto">
                  {features.map((feature: string, idx: number) => (
                    <li key={idx} className="leading-relaxed">{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductColumn;

// Add this to your global CSS (e.g., styles/globals.css or tailwind.css):
// .animate-modal-pop {
//   animation: modal-pop 0.35s cubic-bezier(0.22, 1, 0.36, 1);
// }
// @keyframes modal-pop {
//   0% {
//     opacity: 0;
//     transform: scale(0.85) translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1) translateY(0);
//   }
// }
