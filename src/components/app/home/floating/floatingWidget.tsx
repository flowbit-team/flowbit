import { useRef } from "react";
import useToggle from "@/hooks/useToggle";
import useClickOutside from "@/hooks/useClickOutside";
import FloatingWidgetLayout from "./FloatingWidgetLayout";
import FloatingPanel from "./FloatingPanel";
import FloatingButton from "./FloatingButton";

export default function FloatingWidget() {
  const floatingRef = useRef<HTMLDivElement>(null);
  const {
    value: isOpen,
    toggleValue: toggleOpen,
    setValue: setIsOpen,
  } = useToggle(false);

  useClickOutside(floatingRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <FloatingWidgetLayout containerRef={floatingRef}>
      {isOpen && <FloatingPanel />}
      <FloatingButton isOpen={isOpen} onClick={toggleOpen} />
    </FloatingWidgetLayout>
  );
}
