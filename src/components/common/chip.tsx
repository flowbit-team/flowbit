import { css } from "@emotion/react";
import delete_icon from "@/assets/chip/delete.svg";
import add_icon from "@/assets/chip/plus.svg";
import { Fragment } from "react";

type ChipType = {
  value?: string;
  closable?: boolean;
  inputable?: boolean;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Chip({
  value,
  closable = false,
  inputable = false,
  onClick,
  onChange,
  onKeyUp,
  onBlur,
}: ChipType) {
  return (
    <Fragment>
      {inputable ? (
        <div css={inputableChipCss}>
          <img src={add_icon} alt="추가 아이콘" onClick={onClick} />
          <input
            css={chipCss}
            value={value}
            placeholder="직접입력"
            onChange={onChange}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
          />
        </div>
      ) : (
        <div css={chipCss}>
          <span> {value} </span>
          {closable ? (
            <img src={delete_icon} alt="삭제 아이콘" onClick={onClick} />
          ) : null}
        </div>
      )}
    </Fragment>
  );
}

const inputableChipCss = css`
  position: relative;
  max-width: fit-content;
  background-color: #fff;
  border: 1px solid var(--gray-10);
  border-radius: 4px;
  padding: 3px 3px 3px 8px;
  width: 100%;
  height: 100%;
  max-width: 86px;
  max-height: fit-content;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    height: 100%;
    margin-left: 10px;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }

    ::placeholder {
      font-weight: 400;
    }
  }

  img {
    z-index: 1;
    position: absolute;
    cursor: pointer;
  }
`;

const chipCss = css`
  position: relative;
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

  & > input {
    width: fit-content;
    background-color: transparent;
    width: 100%;
    max-width: 86px;
    /* border: none; */

    &:focus {
      outline: none;
    }
  }

  & > img {
    cursor: pointer;
  }

  & > span {
    color: var(--text-body2);
  }
`;
