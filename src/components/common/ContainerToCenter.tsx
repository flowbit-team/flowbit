import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";

export default function ContainerToCenter({
  children,
  ...props
}: PropsWithChildren & Omit<React.HTMLAttributes<HTMLDivElement>, "types">) {
  return (
    <section
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 45rem;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
      {...props}
    >
      <article
        css={css`
          width: 100%;

          display: flex;
          flex-direction: column;
          row-gap: 1rem;

          a {
            color: #bdbdbd;
          }
        `}
      >
        {children}
      </article>
    </section>
  );
}
