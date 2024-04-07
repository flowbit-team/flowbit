import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function E_caption(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
