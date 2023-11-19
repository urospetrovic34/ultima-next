"use client";
import Link from "next/link";

import IconFacebook from "@/components/icon/Facebook";
import IconInstagram from "@/components/icon/Instagram";
import IconPinterest from "@/components/icon/Pinterest";
import IconYoutube from "@/components/icon/Youtube";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary">
      <div className="w-full mx-auto max-w-screen-xl flex justify-between py-6">
        <div className="flex flex-col justify-between">
          <div
            onClick={scrollToTop}
            className="text-lg hover:text-white cursor-pointer"
          >
            ↑ Back To Top
          </div>
          <div>
            <div className="flex gap-2 mb-2">
              <div>
                <Link
                  className="hover:text-white cursor-pointer text-2xl"
                  href="https://www.facebook.com/"
                >
                  <IconFacebook />
                </Link>
              </div>
              <div>
                <Link
                  className="hover:text-white cursor-pointer text-2xl"
                  href="https://www.instagram.com/"
                >
                  <IconInstagram />
                </Link>
              </div>
              <div>
                <Link
                  className="hover:text-white cursor-pointer text-2xl"
                  href="https://www.pinterest.it/"
                >
                  <IconPinterest />
                </Link>
              </div>
              <div>
                <Link
                  className="hover:text-white cursor-pointer text-2xl"
                  href="https://www.youtube.com/"
                >
                  <IconYoutube />
                </Link>
              </div>
            </div>
            <div className="text-sm text-content">
              2023 Ultima. All Rights Reserved.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[100px]">
          <div>
            <div className="text-2xl mb-3">About</div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                About Us
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Press
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Jobs
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Social Responsibility
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Trade Program
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Subscribe to Our Newsletter
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Index
              </Link>
            </div>
          </div>
          <div className="row-span-2">
            <div className="text-2xl mb-3">Policies</div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Returns & Exchanges
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Terms of Service
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Seller Agreement
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Pro Terms of Service
              </Link>
            </div>
            <div>
              <Link
                className="text-sm cursor-pointer hover:text-white"
                href="/"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
