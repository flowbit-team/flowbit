import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
import { Portal } from "@/components/common/modal/Portal.tsx";
import { useModal } from "@/hooks/useModal.ts";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";
import Button from "@/components/common/Button.tsx";

export function Modal() {
  const { modalDataState, close } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // 모달 영역 이외 클릭 시 모달 닫기
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [close]);

  // 모달 오픈 시 스크롤 금지
  useEffect(() => {
    document.body.style.overflow = modalDataState.isOpen ? "hidden" : "auto";
  }, [modalDataState.isOpen]);

  if (!modalDataState.isOpen) return null;

  return (
    <Portal id="modal">
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999999;
        `}
      >
        <div
          ref={modalRef}
          css={css`
            width: 100%;
            height: 100%;
            max-width: 51rem;
            max-height: fit-content;
            background-color: #ffffff;
            border: 1px solid #cbcbcb;
            border-radius: 1rem;
            padding: 3.2rem;
            display: flex;
            flex-direction: column;
            text-align: center;
            row-gap: 3rem;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              color: ${DESIGN_SYSTEM_COLOR.GRAY_700};
            `}
          >
            <div
              css={css`
                ${DESIGN_SYSTEM_TEXT.T4};
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              `}
            >
              {modalDataState.title}
            </div>
            <div
              css={css`
                white-space: pre-wrap;
                line-height: 1.5;
              `}
            >
              {modalDataState.content}
            </div>
          </div>

          <div
            css={css`
              display: ${modalDataState.isVisibleBtn ? "flex" : "none"};
              align-items: center;
              column-gap: 1.2rem;
              width: 100%;
              position: relative;
              margin-top: auto;
              div {
                width: 100%;
              }
            `}
          >
            <Button
              css={css`
                background-color: ${DESIGN_SYSTEM_COLOR.BLUE_GRAY_50};
                color: ${DESIGN_SYSTEM_COLOR.GRAY_400};
              `}
              onClick={close}
            >
              취소
            </Button>
            <Button onClick={modalDataState.callBack}>확인</Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
