import { accessTokenAtom } from "@/store/user";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Oauth2Redirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const accessToken = params.get("accessToken");
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
      navigate("/");
    } 
  }, [accessToken]);

  return <>처리중입니다.</>;
}
