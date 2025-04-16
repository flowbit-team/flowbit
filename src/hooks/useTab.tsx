/** @jsxImportSource @emotion/react */
import { ReactElement, ReactNode, useState } from "react";
import { css } from "@emotion/react";

interface TabsProps {
  direction: "row" | "column";
  children: ReactNode;
  className?: string;
}

interface TabsListProps {
  direction: "row" | "column";
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps<T> {
  value: T;
  children: ReactNode;
  className?: string;
  activeIcon?: ReactElement;
  inactiveIcon?: ReactElement;
}

interface TabsContentWrapperProps {
  children: ReactNode;
}

interface TabsContentProps<T> {
  value: T;
  children: ReactNode;
}

export function useTab<T>(initialTab: T) {
  const [activeTab, setActiveTab] = useState<T>(initialTab);

  function Tabs({ direction, children, className }: TabsProps) {
    return (
      <div
        className={className}
        css={css`
          display: flex;
          height: 100%;
          flex-direction: ${direction === "row" ? "row" : "column"};
        `}
      >
        {children}
      </div>
    );
  }

  function List({ direction, children, className }: TabsListProps) {
    return (
      <div
        className={className}
        css={css`
          display: flex;
          flex-direction: ${direction === "row" ? "row" : "column"};
          ${direction === "row" &&
          `
            justify-content: space-between;
            border-bottom: 1px solid #e5e7eb;
          `}
        `}
      >
        {children}
      </div>
    );
  }

  function Trigger({
    value,
    children,
    className,
    activeIcon,
    inactiveIcon,
  }: TabsTriggerProps<T>) {
    const isActive = activeTab === value;

    return (
      <button
        type="button"
        onClick={() => setActiveTab(value)}
        className={className}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: none;
          border: none;
          cursor: pointer;
          font: inherit;
          transition: all 0.2s;

          color: ${isActive ? "#3b82f6" : "#6b7280"};
          border-bottom: ${isActive ? "2px solid #3b82f6" : "none"};
          margin-bottom: ${isActive ? "-2px" : "0"};
        `}
      >
        {isActive ? activeIcon : inactiveIcon}
        {children}
      </button>
    );
  }

  function ContentWrapper({ children }: TabsContentWrapperProps) {
    return (
      <div
        css={css`
          flex: 1;
          overflow-y: auto;
        `}
      >
        {children}
      </div>
    );
  }

  function Content({ value, children }: TabsContentProps<T>) {
    if (activeTab !== value) return null;
    return <>{children}</>;
  }

  Tabs.List = List;
  Tabs.Trigger = Trigger;
  Tabs.Content = Content;
  Tabs.ContentWrapper = ContentWrapper;

  return {
    Tabs,
  };
}
