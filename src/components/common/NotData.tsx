import NotDataIcon from "@/assets/common/ic_not_data.svg?react";
import { css } from "@emotion/react";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";
export default function NotData() {
  return (
    <div
      css={css`
        ${DESIGN_SYSTEM_TEXT.S3}
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 2rem;
        color: ${DESIGN_SYSTEM_COLOR.GRAY_400};

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `}
    >
      <NotDataIcon />
      <span>검색 결과가 없습니다.</span>
    </div>
  );
}
