import { css } from "@emotion/react";
import WhiteLogo from "@/assets/logo-white.png";
import DefaultLogo from "@/assets/logo.png";

export default function Logo({
  isWhite,
  onClick,
}: {
  isWhite: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      css={css`
        display: flex;
        width: 116px;
        height: 37px;
        cursor: pointer;
      `}
    >
      <img
        css={css`
          width: 100%;
        `}
        src={isWhite ? WhiteLogo : DefaultLogo}
        alt="로고"
      />
    </div>
  );
}
