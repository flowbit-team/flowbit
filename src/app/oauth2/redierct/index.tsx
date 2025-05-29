import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";
import { loginState, tokenState } from "@/store/user";
import { ACCESS_TOKEN } from "@/utils/constant";

export default function Oauth2Redirect() {
  const navigate = useNavigate();
  const setLogin = useSetAtom(loginState);
  const setToken = useSetAtom(tokenState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      setToken(token);
      setLogin(true);
      navigate("/");
    } else {
      // 토큰이 없는 경우 에러 처리
      setLogin(false);
      setToken("");
      navigate("/signin");
    }
  }, [navigate, setLogin, setToken]);

  return null;
}
