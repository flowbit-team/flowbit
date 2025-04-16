/** @jsxImportSource @emotion/react */
import { PropsWithChildren, forwardRef } from "react";
import { css } from "@emotion/react";

interface FloatingWidgetLayoutProps extends PropsWithChildren {
  containerRef: React.RefObject<HTMLDivElement>;
}

const FloatingWidgetLayout = forwardRef<
  HTMLDivElement,
  FloatingWidgetLayoutProps
>(({ children, containerRef }) => {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 5rem;
        right: 8rem;
        button {
          background: transparent;
          border: none;
          padding: 0;
          margin: 0;
          outline: none;
        }
      `}
    >
      <div
        ref={containerRef}
        css={css`
          position: relative;
        `}
      >
        {children}
      </div>
    </div>
  );
});

FloatingWidgetLayout.displayName = "FloatingWidgetLayout";

export default FloatingWidgetLayout;
