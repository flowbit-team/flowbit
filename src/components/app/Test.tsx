import React from "react";
import { css } from "@emotion/react";
import DefaultLayout from "../layout/default";

export default function Test() {
  return (
    <DefaultLayout>
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
      >
        테스트
      </div>
    </DefaultLayout>
  );
}
