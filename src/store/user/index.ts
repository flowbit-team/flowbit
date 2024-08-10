import { atomWithStorage } from "jotai/utils";

export const loginState = atomWithStorage("isLogin", false);