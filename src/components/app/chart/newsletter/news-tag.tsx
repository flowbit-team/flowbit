import { css } from "@emotion/react";

type tagNameProps = {
  tagName: string;
};

export default function NewsTag({ tagName }: tagNameProps) {
  return (
    <div
      css={css`
        border: none;
        background-color: #f5f5f5;
        padding: 2px 4px 2px 4px;
        border-radius: 2.5px;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
      `}
    >
      {tagName}
    </div>
  );
}
