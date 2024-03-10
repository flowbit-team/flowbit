import { css } from "@emotion/react";
import React from "react";

type imageProps = {
  src?: string;
};

export default function NewImage({ src }: imageProps) {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: 141px;
        background-color: gray;
        border: none;
        border-radius: 8px;
      `}
    >
      <div
        css={css`
          position: absolute;
          background-color: #f29a17;
          line-height: 18px;
          font-size: 12px;
          color: white;
          padding: 4px 8px 4px 8px;
          border-top-left-radius: 4px;
          border-bottom-right-radius: 4px;
        `}
      >
        Mar 25, 2024
      </div>
    </div>
  );
}
