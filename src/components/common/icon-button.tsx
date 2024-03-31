import { css } from "@emotion/react";
import B1_bold from "./text/B1_bold";
import { PropsWithChildren } from "react";
import { NativeButtonProps } from "./text/type";

export default function IconButton(
  props: PropsWithChildren<NativeButtonProps> & { src: string },
) {
  return (
    <span
      css={css`
        display: flex;
        align-items: center;
        gap: 13px;
        cursor: pointer;
      `}
      {...props}
    >
      <div
        css={css`
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 100%;
        `}
      >
        <img src={props.src} alt="하트" />
      </div>
      <B1_bold>{props.children}</B1_bold>
    </span>
  );
}
