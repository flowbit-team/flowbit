import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function T4(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-size: 24px;
        line-height: 32px;
        font-weight: bold;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
