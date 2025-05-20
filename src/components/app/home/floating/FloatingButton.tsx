import IconFloatingOpen from "@/assets/IconFloatingOpen.svg?react";
import IconFloatingClose from "@/assets/IconFloatingClose.svg?react";

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function FloatingButton({
  isOpen,
  onClick,
}: FloatingButtonProps) {
  return (
    <button onClick={onClick}>
      {isOpen ? <IconFloatingClose /> : <IconFloatingOpen />}
    </button>
  );
}
