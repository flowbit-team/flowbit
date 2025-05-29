import { atomWithStorage } from "jotai/utils";

export const loginState = atomWithStorage("isLogin", false);
export const tokenState = atomWithStorage("accessToken", "");
