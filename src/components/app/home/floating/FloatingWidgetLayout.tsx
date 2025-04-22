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
    <div css={wrapperStyle}>
      <div ref={containerRef} css={containerStyle}>
        {children}
      </div>
    </div>
  );
});

const wrapperStyle = css`
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
`;

const containerStyle = css`
  position: relative;
`;

FloatingWidgetLayout.displayName = "FloatingWidgetLayout";

export default FloatingWidgetLayout;
