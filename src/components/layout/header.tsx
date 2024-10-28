import { css } from "@emotion/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "@/assets/hamburger.svg";
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
import { useAtom } from "jotai";
import { loginState } from "@/store/user";
import { useModal } from "@/hooks/useModal.ts";

export default function Header({
  isScroll,
  openSidebar,
}: {
  isScroll: boolean;
  openSidebar: () => void;
}) {
  const navigation = useNavigate();
  // const [isLogin, setLogin] = useState(
  //   () => !!localStorage.getItem("FLOWBIT_ACT"),
  // );
  const [isLogin, setLogin] = useAtom(loginState);
  const { open, close } = useModal();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        width: 100%;
        height: 6rem;
        background-color: ${isScroll ? "rgba(255, 255, 255)" : "none"};
        backdrop-filter: ${isScroll && "blur(0.05rem)"};
        color: ${isScroll ? "black" : "white"};
        position: ${isScroll ? "fixed" : "fixed"};
        border-bottom: ${isScroll ? "1px solid rgba(0, 0, 0, 0.11);" : "none"};
        will-change: background, border-bottom;
        transition: 0.4s all;

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

            & img {
              cursor: pointer;
            }
          `}
        >
          <div className="tablet" onClick={() => openSidebar()}>
            <img src={Hamburger} alt="" />
          </div>
          <div className="mobile" onClick={() => openSidebar()}>
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
                    color: ${pathname === HOME_URL && "#0056ca"};
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
                    color: ${pathname === PREDICT_URL && "#0056ca"};
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
                    color: ${pathname === NEWS_LETTER_URL && "#0056ca"};
                  `}
                >
                  뉴스레터
                </span>
              </NavLink>
            </li>
            <li>
              <span
                css={css`
                  ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                  color: ${pathname === COMMUNITY_URL && "#0056ca"};
                `}
                onClick={() => {
                  if (!localStorage.getItem("FLOWBIT_ACT")) {
                    open({
                      title: "로그인을 먼저 진행해주세요",
                      content:
                        "플로우빗 커뮤니티 기능은 회원을 위한 기능입니다.\n원활한 서비스 이용을 위해 로그인을 먼저 진행해주세요",
                      callBack: () => {
                        close();
                        navigate("/signin");
                      },
                    });
                  } else {
                    navigate(COMMUNITY_URL);
                  }
                }}
              >
                커뮤니티
              </span>
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
            gap: 1.5rem;

            & span,
            & img {
              cursor: pointer;
              font-size: 1.3rem;
            }
          `}
        >
          <div
            css={css`
              ${DESIGN_SYSTEM_TEXT.CAPTION}
              color: ${isScroll ? DESIGN_SYSTEM_COLOR.GRAY_800 : "white"};
              font-weight: 300;
            `}
          >
            {isLogin ? (
              <span
                onClick={() => {
                  open({
                    title: "정말 로그아웃을 하시겠어요?",
                    content:
                      "오늘도 플로우빗 서비스를 이용해주셔서 감사합니다.\n확인 버튼을 통해 서비스 로그아웃이 가능해요",
                    callBack: () => {
                      localStorage.removeItem("FLOWBIT_ACT");
                      setLogin(false);
                      close();
                      navigation(HOME_URL);
                    },
                  });
                }}
              >
                로그아웃
              </span>
            ) : (
              <span onClick={() => navigation(LOGIN_URL)}>로그인</span>
            )}
          </div>
          <div
            className="desktop"
            css={css`
              color: ${isScroll ? DESIGN_SYSTEM_COLOR.GRAY_800 : "white"};
            `}
          ></div>
          <span
            css={css`
              ${DESIGN_SYSTEM_TEXT.CAPTION}
              color: ${isScroll ? DESIGN_SYSTEM_COLOR.GRAY_800 : "white"};
              font-weight: 300;
            `}
          >
            {isLogin ? (
              <span onClick={() => navigate("/mypage")}>마이페이지</span>
            ) : (
              <span onClick={() => navigate(REGISTER_URL)}>회원가입</span>
            )}
          </span>
          {/* NOTE: 추후 알림창 관련 레이아웃 개발 시, 진행 */}
          {/*<div className="desktop">*/}
          {/*  <img src={isScroll ? Alarm : WhiteAlarm} alt="" />*/}
          {/*</div>*/}
          {/*<div className="tablet">*/}
          {/*  <img src={isScroll ? GrayAlarm : WhiteAlarm} alt="" />*/}
          {/*</div>*/}
          {/*<div className="mobile">*/}
          {/*  <img src={isScroll ? GrayAlarm : WhiteAlarm} alt="" />*/}
          {/*</div>*/}
        </div>
      </div>
    </header>
  );
}
