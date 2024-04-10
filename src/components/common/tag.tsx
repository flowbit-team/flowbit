import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./text/type";
import { css } from "@emotion/react";
import B2 from "./text/B2";

export default function Tag(props: PropsWithChildren<NativeButtonProps>) {
  return (
    <span
      css={css`
        display: inline-flex;
        align-items: center;
        justify-content: spac;
        background-color: #f5f5f5;
        border-radius: 3px;
        padding: 2px 5px;
        cursor: pointer;
        color: #757575;
        margin-right: 10px;
        margin-bottom: 7px;
        &:hover {
          background-color: #e8f2ff;
          color: #0056ca;
          font-weight: bold;
        }

        &:hover path {
          stroke: #0056ca;
        }
      `}
      {...props}
    >
      <B2>{props.children}</B2>
    </span>
  );
}
