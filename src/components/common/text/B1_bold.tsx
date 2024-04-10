import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function B1_bold(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
