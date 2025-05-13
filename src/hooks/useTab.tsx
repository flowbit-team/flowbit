import { ReactElement, ReactNode, useState } from "react";
import { css } from "@emotion/react";

interface TabsProps {
  children: ReactNode;
}

interface TabsListProps {
  children: ReactNode;
}

interface TabsTriggerProps<T> {
  value: T;
  children: ReactNode;
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

  function Tabs({ children }: TabsProps) {
    return (
      <div
        css={css`
          display: flex;
          height: 100%;
          flex-direction: column;
        `}
      >
        {children}
      </div>
    );
  }

  function List({ children }: TabsListProps) {
    return (
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          border-bottom: 1px solid #e4e4e4;
          padding-bottom: 12px;
        `}
      >
        {children}
      </div>
    );
  }

  function Trigger({
    value,
    children,
    activeIcon,
    inactiveIcon,
  }: TabsTriggerProps<T>) {
    const isActive = activeTab === value;

    return (
      <button
        onClick={() => setActiveTab(value)}
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex: 1;
          color: ${isActive ? "#3076d4" : "#8e8e8e"};
          position: relative;
          &::after {
            content: "";
            position: absolute;
            bottom: -13px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: ${isActive ? "#3076d4" : "transparent"};
          }
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
