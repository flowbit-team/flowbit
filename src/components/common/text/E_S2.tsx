import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function E_S2(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
