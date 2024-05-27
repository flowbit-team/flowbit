import { css } from "@emotion/react";
import { NavLink, useNavigate } from "react-router-dom";
import GrayAlarm from "@/assets/gray_bell.svg";
import WhiteAlarm from "@/assets/alarm-white.svg";
import Hamburger from "@/assets/hamburger.svg";
import Alarm from "@/assets/alarm.svg";
import {
  COMMUNITY_URL,
  HOME_URL,
  LOGIN_URL,
  NEWS_LETTER_URL,
  PREDICT_URL,
  REGISTER_URL,
} from "@/utils/util";
import {
  BREAK_POINTS,
  DESIGN_SYSTEM_COLOR,
  DESIGN_SYSTEM_TEXT,
} from "@/style/variable";
import Logo from "../common/logo";

export default function Header({ isScroll }: { isScroll: boolean }) {
  const navigation = useNavigate();

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        width: 100%;
        height: 5.6rem;
        background-color: ${isScroll ? "white" : "none"};
        color: ${isScroll ? "black" : "white"};
        position: ${isScroll ? "fixed" : "fixed"};
        border-bottom: ${isScroll ? "1px solid #f5f5f5" : "none"};

        z-index: 99;
      `}
    >
      <div
        className="header__content"
        css={css`
          width: 100%;
          max-width: 112.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;

          & a {
            text-decoration: none;
            text-decoration-color: none;
            color: inherit;
          }

          & .tablet {
            display: none;
          }

          & .mobile {
            display: none;
          }

          ${BREAK_POINTS.TABLET} {
            max-width: 72.7rem;

            & .desktop {
              display: none;
            }

            & .tablet {
              display: initial;
            }

            & .mobile {
              display: none;
            }
          }

          ${BREAK_POINTS.MOBILE} {
            max-width: 36rem;

            & .desktop {
              display: none;
            }

            & .tablet {
              display: none;
            }

            & .mobile {
              display: initial;
            }
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 1rem;
          `}
        >
          <div className="tablet">
            <img src={Hamburger} alt="" />
          </div>
          <div className="mobile">
            <img src={Hamburger} alt="" />
          </div>
          <Logo isWhite={!isScroll} onClick={() => navigation(HOME_URL)}></Logo>
        </div>
        <nav className="desktop">
          <ol
            css={css`
              font-family: "Pretandard";
              list-style: none;
              display: flex;
              align-items: center;
              padding: 0;
              margin: 0;

              & > li {
                margin: 0 30px;
              }

              & span {
                cursor: pointer;
              }

              & span:hover {
                color: #0056ca;
              }
            `}
          >
            <li>
              <NavLink to={HOME_URL}>
                <span
                  css={css`
                    ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                  `}
                >
                  소개
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={PREDICT_URL}>
                <span
                  css={css`
                    ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                  `}
                >
                  비트코인 예측
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={NEWS_LETTER_URL}>
                <span
                  css={css`
                    ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                  `}
                >
                  뉴스레터
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={COMMUNITY_URL}>
                <span
                  css={css`
                    ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                  `}
                >
                  커뮤니티
                </span>
              </NavLink>
            </li>
          </ol>
        </nav>
        <div
          css={css`
            height: 44px;
            list-style: none;
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
            gap: 20px;

            & span,
            & img {
              cursor: pointer;
            }
          `}
        >
          <NavLink className="desktop" to={LOGIN_URL}>
            <span
              css={css`
                ${DESIGN_SYSTEM_TEXT.CAPTION}
                color: ${isScroll ? DESIGN_SYSTEM_COLOR.GRAY_800 : "white"};
                font-weight: 300;
              `}
            >
              로그인
            </span>
          </NavLink>
          <div
            className="desktop"
            css={css`
              color: ${isScroll ? DESIGN_SYSTEM_COLOR.GRAY_800 : "white"};
            `}
          >
            l
          </div>
          <NavLink className="desktop" to={REGISTER_URL}>
            <span
              css={css`
                ${DESIGN_SYSTEM_TEXT.CAPTION}
                color: ${isScroll ? DESIGN_SYSTEM_COLOR.GRAY_800 : "white"};
                font-weight: 300;
              `}
            >
              회원가입
            </span>
          </NavLink>
          <div className="desktop">
            <img src={isScroll ? Alarm : WhiteAlarm} alt="" />
          </div>
          <div className="tablet">
            <img src={isScroll ? GrayAlarm : WhiteAlarm} alt="" />
          </div>
          <div className="mobile">
            <img src={isScroll ? GrayAlarm : WhiteAlarm} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
