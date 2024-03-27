import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function B1(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-size: 16px;
        line-height: 24px;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
