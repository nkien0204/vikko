import Link from "next/link";
import React from "react";
// import { FaFingerprint } from "react-icons/fa";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-hero-background text-foreground py-10">
      <div className="max-w-7xl w-full mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="#contact" className="flex items-center gap-2">
            <Image
              src={"/images/logo.ico"}
              alt="icon"
              width="20"
              height="20"
              quality={100}
              className="lg:ml-0"
            />
            <h3 className="manrope text-xl font-semibold cursor-pointer">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-3.5 text-foreground-accent">
            {footerDetails.subheading}
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
          {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              <span className="font-bold">Email: </span>
              {footerDetails.email}
            </a>
          )}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-foreground-accent hover:text-foreground"
            >
              <span className="font-bold">Điện thoại: </span>
              {footerDetails.telephone}
            </a>
          )}

          {footerDetails.address && (
            <span>
              <span className="font-bold">Địa chỉ: </span>
              {footerDetails.address}
            </span>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Chi nhánh</h4>
          <div className="mb-2">
            <div className="flex items-center gap-2 text-foreground-accent">
              <FiMapPin className="w-4 h-4" />
              <span className="font-semibold">VIKKO Miền Bắc</span>
            </div>
            <span>{footerDetails.address}</span>
          </div>

          <div className="mb-2">
            <div className="flex items-center gap-2 text-foreground-accent">
              <FiMapPin className="w-4 h-4" />
              <span className="font-semibold">VIKKO Miền Trung</span>
            </div>
            <span>{footerDetails.address}</span>
          </div>

          <div className="mb-2">
            <div className="flex items-center gap-2 text-foreground-accent">
              <FiMapPin className="w-4 h-4" />
              <span className="font-semibold">VIKKO Miền Nam</span>
            </div>
            <span>{footerDetails.address}</span>
          </div>
        </div>
      </div>
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
