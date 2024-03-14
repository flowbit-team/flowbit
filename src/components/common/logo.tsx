import { css } from "@emotion/react";

export default function Logo({ isWhite }: { isWhite: boolean }) {
  return (
    <div
      css={css`
        width: 116px;
      `}
    >
      <img
        css={css`
          width: 100%;
        `}
        src={isWhite ? "logo-white.png" : "logo.png"}
        alt="로고"
      />
    </div>
  );
}
