import { css } from "@emotion/react";
import Close from "@/assets/close.svg";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  COMMUNITY_URL,
  HOME_URL,
  NEWS_LETTER_URL,
  PREDICT_URL,
} from "@/utils/util";
import { useModal } from "@/hooks/useModal.ts";

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { open, close } = useModal();
  return (
    <aside
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;

        width: 100%;
        height: 100%;

        transform: ${isOpen ? "translateX(0)" : "translateX(-100%)"};
        transition: all 0.3s ease-in-out;
      `}
    >
      {/* Background */}
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;

          width: 100%;
          height: 100%;

          background-color: #000000;
          opacity: 0.6;
        `}
        onClick={() => setIsOpen()}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 999;

          width: 70%;
          height: 100%;
          padding: 10.2rem 2.7rem;

          background-color: #fff;
        `}
      >
        {/* CLOSE */}
        <div
          css={css`
            position: absolute;
            top: 2.8rem;
            left: 2.8rem;

            cursor: pointer;
          `}
          onClick={setIsOpen}
        >
          <img src={Close} alt="" />
        </div>
        <div
          css={css`
            padding-left: 3.2rem;
          `}
        >
          {/* Category */}
          <span
            css={css`
              ${DESIGN_SYSTEM_TEXT.B2_BOLD}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_600};
            `}
          >
            카테고리
          </span>
          <ul
            css={css`
              list-style: none;
              padding: 0;
              margin: 3rem 0;

              display: flex;
              flex-direction: column;
              gap: 4rem;

              & a {
                text-decoration: none;
              }

              & li {
                ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                color: #000;
                cursor: pointer;
              }
            `}
          >
            <NavLink to={HOME_URL}>
              <li onClick={setIsOpen}>소개</li>
            </NavLink>
            <NavLink to={PREDICT_URL}>
              <li onClick={setIsOpen}>가상화폐 예측</li>
            </NavLink>
            <NavLink to={NEWS_LETTER_URL}>
              <li onClick={setIsOpen}>뉴스레터</li>
            </NavLink>
            <span
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                color: ${pathname === COMMUNITY_URL &&
                DESIGN_SYSTEM_COLOR.ACTIVE_LINK};
              `}
              onClick={() => {
                if (!localStorage.getItem("FLOWBIT_ACT")) {
                  open({
                    title: "현재 해당 기능은 준비 중입니다.",
                    content:
                      "비트코인에 대한 정보를 나눌 수 있는 커뮤니티 기능은\n현재 빠르게 개발을 진행하고 있습니다, 잠시만 기다려주세요!",
                    callBack: () => {
                      close();
                    },
                  });
                } else {
                  navigate(COMMUNITY_URL);
                }
              }}
            >
              커뮤니티
            </span>
          </ul>
        </div>
        <hr />
        {/* Mypage */}
        {/*<span css={css`*/}
        {/*  ${DESIGN_SYSTEM_TEXT.B2_BOLD}*/}
        {/*  color: ${DESIGN_SYSTEM_COLOR.GRAY_600};*/}
        {/*  padding-left: 3.2rem;*/}
        {/*  margin-top: 3rem;*/}
        {/*  display: block;*/}
        {/*  cursor: pointer;*/}
        {/*`}>마이페이지</span>*/}
      </div>
    </aside>
  );
}
