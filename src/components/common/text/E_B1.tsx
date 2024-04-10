import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function E_B1(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-size: 16px;
        line-height: 22px;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
