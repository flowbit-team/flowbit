import "@/style/global.css";
import { Fragment, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { UseScrollToTop } from "@/components/common/util/ScrollToTop.tsx";
import { setGlobalNavigate } from "@/utils/globalNavigate";

export default function GlobalLayout() {
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    setGlobalNavigate(navigate);
  }, [navigate]);

  // 사용자의 scroll 동작 여부에 따라 상태 값 변경
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  };

  return (
    <Fragment>
      <UseScrollToTop />
      <Header
        isScroll={
          location.pathname === "/" ||
          location.pathname === "/predict" ||
          location.pathname === "/signup" ||
          location.pathname === "/signin"
            ? true
            : isScroll
        }
        openSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
