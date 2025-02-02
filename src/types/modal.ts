export type ModalType = {
  isOpen: boolean;
  isVisibleBtn?: boolean;
  title: string;
  content: JSX.Element | string;
  callBack?: () => void;
};
