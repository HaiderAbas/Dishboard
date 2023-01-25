import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import { HiHome, HiUser, HiCreditCard } from "react-icons/hi";
import { useRouter } from "next/router";
import Link from "next/link";
function Topbar(props: any) {
  const { setShowNav, showNav } = props;
  const router = useRouter();
  return (
    <>
      <div className="fixed w-56 h-full bg-white shadow-sm">
        <div className="flex justify-center mt-6 mb-14">
          <picture>
            <Image src={logo} alt="Image" />
          </picture>
        </div>
        <div className="flex flex-col">
          <Link href="/">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <HiHome size={20} />
              </div>
              <div>
                <p>Home</p>
              </div>
            </div>
          </Link>
          <Link href="/account">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/account"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <HiUser size={20} />
              </div>
              <div>
                <p>Account</p>
              </div>
            </div>
          </Link>
          <Link href="/billing">
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname == "/billing"
                  ? "bg-orange-100 text-orange-500"
                  : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              <div className="mr-2">
                <HiCreditCard size={20} />
              </div>
              <div>
                <p>Billing</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Topbar;
