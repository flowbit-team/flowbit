/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import { css } from "@emotion/react";

export default function FloatingPanelLayout({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        position: absolute;
        bottom: 8rem;
        right: 1.2rem;
      `}
    >
      <div
        css={css`
          width: 390px;
          height: calc(100dvh - 450px);
          background-color: white;
          padding: 1.5rem;
          border-radius: 24px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          position: relative;
        `}
      >
        {children}
        <div
          css={css`
            position: absolute;
            right: 2rem;
            bottom: -0.5rem;
            width: 1rem;
            height: 1rem;
            background-color: white;
            transform: rotate(45deg);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-bottom-right-radius: 4px;
          `}
        />
      </div>
    </div>
  );
}
