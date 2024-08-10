import { loginState } from "@/store/user";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Oauth2Redirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const accessToken = params.get("accessToken");
  const [_, setLogin] = useAtom(loginState);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("FLOWBIT_ACT", accessToken);
      setLogin(true);
      navigate("/");
    }else {
      alert("오류가 발생했어요, 관리자에게 문의해주세요")
    }
  }, [accessToken]);

  return <>처리중입니다.</>;
}
