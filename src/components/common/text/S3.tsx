import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./type";

export default function S3(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        font-family: "Pretandard";
        font-size: 18px;
        line-height: 26px;
      `}
      {...props}
    >
      {props.children}
    </span>
  );
}
