import { css } from "@emotion/react";

// TODO: 버튼 컴포넌트 인라인 스타일 지정의 분리가 필요해요

type buttonProps = {
  icon?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "types">;

export default function Button({ icon, children, ...props }: buttonProps) {
  return (
    <div
      css={css`
        width: 100%;
        position: relative;
        height: auto;
        display: flex;
        align-items: center;
      `}
    >
      {icon && (
        <img
          css={css`
            position: absolute;
            margin-left: 16px;
          `}
          src={icon}
          alt="버튼 아이콘"
        />
      )}
      <button
        css={css`
          width: 100%;
          height: 48px;
          border-radius: 6px;
          background: #0056ca;
          font-size: 16px;
          color: white;
          border: none;
          font-weight: 400;
          transition: 0.4s all;

          &:disabled {
            background: var(--blue-5);
            color: var(--blue-20);
            pointer-events: none;
          }
        `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
