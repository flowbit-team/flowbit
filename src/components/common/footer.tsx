import { css } from "@emotion/react";
import Logo from "./logo";
import { BREAK_POINTS, DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";

export default function Footer() {
  return (
    <div css={css`
      margin-top: 10rem;
      width: 100%;
      padding: 5.6rem 0;
      background-color: ${DESIGN_SYSTEM_COLOR.BLUEGRAY_100};
    `}>
      {/* Container */}
      <div css={css`
        max-width: 112.5rem;
        margin: 0 auto;

        ${BREAK_POINTS.TABLET} {
          max-width: 72.7rem;;
        }

        ${BREAK_POINTS.MOBILE} {
          max-width: 36rem;
        }
      `}>
        {/* Logo */}
        <Logo
          css={css`
          width: 16.2rem;
          height: 3.7rem;

          ${BREAK_POINTS.MOBILE} {
            width: 11.6rem;
          }
        `}
          isWhite={false}
          onClick={() => { }}
        />
        {/* Content */}
        <div css={css`
          margin: 4rem 0;

          ${BREAK_POINTS.MOBILE} {
            margin: 2.4rem 0;
          }
        `}>
          <span css={css`
            ${DESIGN_SYSTEM_TEXT.B2}
            color: ${DESIGN_SYSTEM_COLOR.GRAY_900};

            ${BREAK_POINTS.MOBILE} {
              ${DESIGN_SYSTEM_TEXT.CAPTION}
            }
          `}>
            FLOWBIT 법적 고지
          </span>
          <ul>
            <li css={css`
              ${DESIGN_SYSTEM_TEXT.B2}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              
              ${BREAK_POINTS.MOBILE} {
                ${DESIGN_SYSTEM_TEXT.OVERLINE}
              }
            `}>
              FLOWBIT은 가상자산 투자를 위한 예측가격과 실시간 뉴스만을 제공하며, 투자를 유도하지 않습니다.
            </li>
            <li css={css`
              ${DESIGN_SYSTEM_TEXT.B2}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              
              ${BREAK_POINTS.MOBILE} {
                ${DESIGN_SYSTEM_TEXT.OVERLINE}
              }
            `}>
              FLOWBIT은 전날까지의 종가를 사용해 예측을 진행합니다. 따라서 당일에 일어난 급격한 시세 변동 상황은 적용되지 않을 수 있으니 유의하시기 바랍니다.
            </li>
            <li css={css`
              ${DESIGN_SYSTEM_TEXT.B2}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_900};

              ${BREAK_POINTS.MOBILE} {
                ${DESIGN_SYSTEM_TEXT.OVERLINE}
              }
            `}>
              FLOWBIT은 어떠한 투자 손실에도 법적인 책임을 지지 않습니다.
            </li>
          </ul>
        </div>
        {/* Info */}
        <div css={css`
          margin-bottom: 1.2rem;
        `}>
          <ul css={css`
            display: flex;
            padding: 0;
            margin: 0;
            list-style: none;
            gap: 4rem;
          `}>
            <li
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};

                ${BREAK_POINTS.MOBILE} {
                  ${DESIGN_SYSTEM_TEXT.OVERLINE}
                }
            `}
            >대표: FLOWBIT</li>
            <li
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};

                ${BREAK_POINTS.MOBILE} {
                  ${DESIGN_SYSTEM_TEXT.OVERLINE}
                }
              `}
            >제작: FLOWBIT</li>
            <li
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};

                ${BREAK_POINTS.MOBILE} {
                  ${DESIGN_SYSTEM_TEXT.OVERLINE}
                }
                cursor: pointer;
              `}
            >개인정보처리방침</li>
            <li
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};

                ${BREAK_POINTS.MOBILE} {
                  ${DESIGN_SYSTEM_TEXT.OVERLINE}
                }
              cursor: pointer;
              `}
            >서비스이용약관</li>
          </ul>
        </div>
        {/* Copy right */}
        <div>
          <span css={css`
            ${DESIGN_SYSTEM_TEXT.B2}
            color: ${DESIGN_SYSTEM_COLOR.GRAY_600};

            ${BREAK_POINTS.MOBILE} {
                ${DESIGN_SYSTEM_TEXT.OVERLINE}
              }
          `}>Copyright 2024. FLOWBIT. All rights reserved.</span>
        </div>
      </div>
    </div >
  )
}