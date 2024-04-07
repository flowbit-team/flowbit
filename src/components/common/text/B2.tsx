import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function B2(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 2%;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
