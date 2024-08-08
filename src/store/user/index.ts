import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const loginState = atomWithStorage("isLogin", false);

export const accessTokenAtom = atom<string | null>(null);