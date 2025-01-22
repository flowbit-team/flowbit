import { useEffect } from "react";
import { useLocation } from "react-router-dom";
/**
 * @description 페이지 이동 시에 스크롤을 초기화해주는 함수입니다.
 * @returns { null }
 */
export function UseScrollToTop(): null {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
