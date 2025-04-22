import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";

interface certificateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "type"> {
  icon?: string;
  disabled?: boolean;
}

export default function CertificateBox({
  icon,
  children,
  disabled = false,
  ...props
}: PropsWithChildren<certificateProps>) {
  return (
    <div
      id="certificateb-box"
      css={css`
        ${DESIGN_SYSTEM_TEXT.B2}
        white-space: nowrap;
        width: auto;
        border-radius: 6px;
        padding: 11px 16px;
        background: ${icon ? `transparent` : `var(--blue-5)`};
        color: var(--blue-50);
        transition: 0.4s all;
        font-weight: 400;
        font-size: 15px;
        cursor: pointer;

        display: flex;
        align-items: center;

        ${icon && `padding-right: 0`}
        ${disabled &&
        css`
          pointer-events: none;
          background-color: var(--gray-10);
          color: var(--text-disabled);
        `}
      `}
      {...props}
    >
      {icon ? <img src={icon} /> : children}
    </div>
  );
}
