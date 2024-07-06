import "@/style/global.css";
import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function GlobalLayout() {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 사용자의 scroll 동작 여부에 따라 상태 값 변경
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  useEffect(() => {
    // scroll animation 추가
    window.addEventListener("scroll", handleScroll);

    // clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Header
        isScroll={
          location.pathname === "/" || location.pathname === "/predict" ||
            location.pathname === "/signup" || location.pathname === "/signin"
            ? true
            : isScroll
        }
        openSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
