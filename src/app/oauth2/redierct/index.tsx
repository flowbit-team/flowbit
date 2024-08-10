import { accessTokenAtom, loginState } from "@/store/user";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Oauth2Redirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const accessToken = params.get("accessToken");
  const [_, setIsLogin] = useAtom(loginState);
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
      setIsLogin(true);
      navigate("/");
    }
  }, [accessToken]);

  return <>처리중입니다.</>;
}
