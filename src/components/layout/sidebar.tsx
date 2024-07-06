import { css } from "@emotion/react";
import Close from '@/assets/close.svg'
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";
import { NavLink } from "react-router-dom";
import { COMMUNITY_URL, HOME_URL, NEWS_LETTER_URL, PREDICT_URL } from "@/utils/util";

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: () => void }) {

  return (
    <div css={css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;

        width: 100%;
        height: 100%;

        transform: ${isOpen ? 'translateX(0)' : 'translateX(-100%)'};
        transition: all 0.3s ease-in-out;
    `}>
      {/* Background */}
      <div css={css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;

        width: 100%;
        height: 100%;

        background-color: #000000;
        opacity: 0.6;
      `} onClick={() => setIsOpen()} />
      <div css={css`
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;

        width: 70%;
        height: 100%;
        padding: 10.2rem 2.7rem;

        background-color: #fff;
      `}>
        {/* CLOSE */}
        <div css={css`
          position: absolute;
          top: 2.8rem;
          left: 2.8rem;
          
          cursor: pointer;
        `} onClick={setIsOpen}>
          <img src={Close} alt="" />
        </div>
        <div css={css`
          padding-left: 3.2rem;
        `}>
          {/* Category */}
          <span css={css`
            ${DESIGN_SYSTEM_TEXT.B2_BOLD}
            color: ${DESIGN_SYSTEM_COLOR.GRAY_600};
          `}>카테고리</span>
          <ul css={css`
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
          `}>
            <NavLink to={HOME_URL}>
              <li>소개</li>
            </NavLink>
            <NavLink to={PREDICT_URL}>
              <li>가상화폐 예측</li>
            </NavLink>
            <NavLink to={NEWS_LETTER_URL}>
              <li>뉴스레터</li>
            </NavLink>
            <NavLink to={COMMUNITY_URL}>
              <li>커뮤니티</li>
            </NavLink>
          </ul>
        </div>
        <hr />
        {/* Mypage */}
        <span css={css`
          ${DESIGN_SYSTEM_TEXT.B2_BOLD}
          color: ${DESIGN_SYSTEM_COLOR.GRAY_600};
          padding-left: 3.2rem;
          margin-top: 3rem;
          display: block;
          cursor: pointer;
        `}>마이페이지</span>
      </div >
    </div>
  )
}