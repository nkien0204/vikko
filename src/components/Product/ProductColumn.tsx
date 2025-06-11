"use client";
import clsx from "clsx";
// import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { IProduct, SubFeatureContent } from "@/types";

interface Props {
  tier: IProduct;
  highlight?: boolean;
}

const ProductColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, imageSrc, width, features, briefInfo, description } = tier;
  const [showModal, setShowModal] = useState(false);
  const [hoveredContent, setHoveredContent] = useState<{
    content: string;
    imgSrc: string;
  } | null>(null);
  const [popupPos, setPopupPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const popupRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const padding = 12; // space from edge
    const offsetX = 20; // space to right of cursor
    const offsetY = 0; // align with cursor

    let left = e.clientX + offsetX;
    let top = e.clientY + offsetY;

    // After popup renders, adjust if needed
    setTimeout(() => {
      if (popupRef.current) {
        const popupRect = popupRef.current.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // If popup overflows right edge
        if (left + popupRect.width + padding > vw) {
          left = vw - popupRect.width - padding;
        }
        // If popup overflows bottom edge
        if (top + popupRect.height + padding > vh) {
          top = vh - popupRect.height - padding;
        }
        // If popup overflows top edge
        if (top < padding) {
          top = padding;
        }
        // If popup overflows left edge
        if (left < padding) {
          left = padding;
        }

        setPopupPos({ top, left });
      }
    }, 0);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

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
            className="relative bg-white rounded-2xl p-8 max-w-4xl w-full shadow-2xl border border-gray-200 animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-primary hover:bg-gray-100 transition-colors rounded-full w-9 h-9 flex items-center justify-center text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col">
              <h2 className="text-3xl font-extrabold mb-4 text-left text-gray-900">
                {name}
              </h2>
              {(briefInfo || description) && (
                <div className="mb-2 sticky top-0 bg-white">
                  {briefInfo && (
                    <div className="mb-2 text-lg text-gray-700 font-medium">
                      {briefInfo}
                    </div>
                  )}
                  {description && (
                    <div className="mb-4 text-base text-gray-600">
                      {description}
                    </div>
                  )}
                  <hr className="my-4 border-gray-200" />
                </div>
              )}
              <div className="flex flex-row  gap-8 max-h-[60vh]">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    src={imageSrc}
                    quality={100}
                    width={340}
                    height={320}
                    unoptimized={true}
                    alt="img"
                    className="rounded-xl shadow-md object-contain h-[40vh] w-auto"
                  />
                </div>
                <div className="flex flex-col gap-0 w-full max-h-[60vh] overflow-y-auto pr-2">
                  {features && (
                    <div className="flex flex-col gap-6 w-full">
                      {features.map(
                        (
                          subFeature: {
                            title: string;
                            contents: SubFeatureContent[];
                          },
                          idx: number,
                        ) => (
                          <div key={idx}>
                            <div className="font-semibold text-primary mb-2 text-lg">
                              {subFeature.title}
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-left text-base">
                              {subFeature.contents.map(
                                (
                                  contentObj: SubFeatureContent,
                                  cidx: number,
                                ) => (
                                  <li
                                    key={cidx}
                                    className={
                                      "leading-relaxed relative" +
                                      (contentObj.imgSrc
                                        ? " cursor-pointer hover:text-blue-400"
                                        : "")
                                    }
                                    onMouseEnter={(e) => {
                                      if (!contentObj.imgSrc) return;
                                      setHoveredContent({
                                        content: contentObj.content,
                                        imgSrc: contentObj.imgSrc,
                                      });
                                      handleMouseMove(e);
                                    }}
                                    onMouseMove={(e) => handleMouseMove(e)}
                                    onMouseLeave={() => setHoveredContent(null)}
                                  >
                                    {contentObj.content}
                                  </li>
                                ),
                              )}
                            </ul>
                            {hoveredContent && (
                              <div
                                ref={popupRef}
                                className="fixed z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4"
                                style={{
                                  top: popupPos.top,
                                  left: popupPos.left,
                                  pointerEvents: "none", // So it doesn't interfere with mouse events
                                  minWidth: 200,
                                  maxWidth: 320,
                                }}
                              >
                                <div className="font-bold mb-2">
                                  {hoveredContent.content}
                                </div>
                                <Image
                                  src={hoveredContent.imgSrc}
                                  alt=""
                                  width={400}
                                  height={320}
                                  className="max-w-full max-h-50 object-contain"
                                  unoptimized
                                />
                              </div>
                            )}
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </div>
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
