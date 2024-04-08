import { css } from "@emotion/react";

type inputProps = {
  placeholder: string;
  icon: string;
};
export default function Input({
  placeholder = "텍스트를 입력해주세요",
  icon,
}: inputProps) {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        align-items: center;
      `}
    >
      {icon && (
        <img
          src={icon}
          alt="입력 창 로고"
          css={css`
            position: absolute;
            z-index: 1;
            padding-left: 2rem;
          `}
        />
      )}
      <input
        css={css`
          border: none;
          box-shadow: inset 0 0 0 1px #eeeeee;
          min-width: 30rem;
          width: 100%;
          height: 5.6rem;
          border-radius: 0.5rem;
          padding-left: 6rem;
          font-size: 1.6rem;

          &:focus {
            outline: none;
          }

          &::placeholder {
            color: #bdbdbd;
          }
        `}
        placeholder={placeholder}
      />
    </div>
  );
}
