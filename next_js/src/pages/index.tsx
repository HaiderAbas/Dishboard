import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import SideBar from "@/components/topbar/topbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: any) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (typeof window === undefined) {
      addEventListener("resize", handleResize);
    }
    return () => {
      removeEventListener("resize", handleResize);
    };
  });
  return (
    <>
      <SideBar showNav={showNav} setShowNav={setShowNav} />
      <div
      // className="translate-x-0 transform transition duration-[400ms] endf -translate-x-full"
      // enter="transform transition duration-[400ms]"
      // enterFrom="-translate-x-full"
      // enterTo="translate-x-0"
      // leave="transform duration-[400ms] transition ease-in-out"
      // leaveFrom="translate-x-0"
      // leaveTo="-translate-x-full"
      >
        <Sidebar showNav={showNav} />
      </div>
      <main>{children}</main>
    </>
  );
}
