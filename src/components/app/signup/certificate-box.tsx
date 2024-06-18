import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";

interface certificateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "type"> {
  icon?: string;
  check?: boolean;
}

export default function CertificateBox({
  icon,
  children,
  check = false,
  ...props
}: PropsWithChildren<certificateProps>) {
  return (
    <div
      id="certificateb-box"
      css={css`
        ${DESIGN_SYSTEM_TEXT.B2}
        border-radius: 0.2rem;
        padding: 0.5rem 1.1rem;
        background: ${icon ? `transparent` : DESIGN_SYSTEM_COLOR.BRAND_BLUE};
        color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
        white-space: nowrap;
        width: auto;
        transition: 0.4s all;
        cursor: pointer;

        ${icon && `padding-right: 0`}
        ${!check &&
        css`
          pointer-events: none;
          filter: grayscale(100%);
        `}
      `}
      {...props}
    >
      {icon ? <img src={icon} /> : children}
    </div>
  );
}
