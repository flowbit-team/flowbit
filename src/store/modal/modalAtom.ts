import { atom } from "jotai";

import { ModalType } from "@/types/modal";

export const modalState = atom<ModalType>({
  isOpen: false,
  isVisibleBtn: true,
  title: "",
  content: "",
});

