import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function S1(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-size: 20px;
        line-height: 28px;
        font-weight: bold;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
