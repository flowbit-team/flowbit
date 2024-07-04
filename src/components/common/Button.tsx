import { css } from "@emotion/react";

type buttonProps = {
  icon?: string;
  state?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "types">;

export default function Button({
  icon,
  state = true,
  children,
  ...props
}: buttonProps) {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
      `}
    >
      {icon && (
        <img
          css={css`
            position: absolute;
            margin-left: 3.6rem;
          `}
          src={icon}
          alt="버튼 아이콘"
        />
      )}
      <button
        css={css`
          width: 100%;
          height: 5rem;
          border-radius: 0.5rem;
          background: #0056ca;
          font-size: 1.6rem;
          color: white;
          border: none;
          font-weight: 700;
          ${!state &&
          css`
            pointer-events: none;
            filter: grayscale(100%);
          `}
        `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
