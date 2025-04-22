import { css } from "@emotion/react";
import delete_icon from "@/assets/chip/delete.svg";

type ChipType = {
  children: string;
  closable?: boolean;
};

export default function Chip({ children, closable = false }: ChipType) {
  return (
    <div css={chipCss}>
      <span>{children}</span>
      {closable ? <img src={delete_icon} alt="삭제 아이콘" /> : null}
    </div>
  );
}

const chipCss = css`
  display: flex;
  align-items: center;
  column-gap: 2px;
  background-color: #fff;
  border: 1px solid var(--gray-10);
  border-radius: 4px;
  padding: 4px 8px;
  width: 100%;
  height: 100%;
  max-width: fit-content;
  max-height: fit-content;

  & > img {
    cursor: pointer;
  }

  & > span {
    color: var(--text-body2);
  }
`;
