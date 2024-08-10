import { css } from "@emotion/react";
import CheckBox from "@/components/common/checkbox.tsx";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";
import React from "react";

interface boxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "types"> {
  text: string;
  checked: boolean;
}
export default function TextWithCheckBox({
  text,
  checked = false,
  ...props
}: boxProps) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        column-gap: 1.6rem;
      `}
    >
      <CheckBox checked={checked} />
      <div
        css={css`
          display: flex;
          align-items: center;
          column-gap: 0.7rem;

          span {
            ${DESIGN_SYSTEM_TEXT.E_S2}
          }
        `}
        {...props}
      >
        <span
          css={css`
            color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
          `}
        >
          [필수]
        </span>
        <span>{text}</span>
      </div>
    </div>
  );
}
