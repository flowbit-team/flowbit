import { css } from "@emotion/react";
import { BREAK_POINTS } from "@/style/variable";
import BlackEtherImg from "@/assets/black_ether.svg";
import SkyblueLImg from "@/assets/skyblue_L.svg";
import GreenBitImg from "@/assets/green_bit.svg";
import YellowBitImg from "@/assets/yellow_bit.svg";
import OrangeBitImg from "@/assets/orange_bit.svg";

interface VisitorCountProps {
  currentNum: number | string;
  numberRef: React.RefObject<HTMLSpanElement>;
  sectionRef?: React.RefObject<HTMLDivElement>;
  isBottom?: boolean;
}

export const VisitorCount = ({
  currentNum,
  numberRef,
  sectionRef,
  isBottom = false,
}: VisitorCountProps) => {
  if (isBottom) {
    return (
      <div
        css={css`
          padding: 12rem 0;

          ${BREAK_POINTS.TABLET} {
            padding: 8rem 0;
          }

          ${BREAK_POINTS.MOBILE} {
            padding: 6rem 0;
          }
        `}
      >
        <div
          ref={sectionRef}
          css={css`
            position: relative;
            width: 100%;
            height: 16.4rem;
            border-radius: 1.6rem;
            background-color: #0044a1;
            font-weight: 600;
            font-size: 2.8rem;
            line-height: 4.2rem;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            overflow: hidden;

            ${BREAK_POINTS.TABLET} {
              height: 14rem;
              font-size: 2.4rem;
              line-height: 3.6rem;
            }

            ${BREAK_POINTS.MOBILE} {
              height: 7.2rem;
              border-radius: 1rem;
              font-size: 1.2rem;
              line-height: 1.8rem;
            }
          `}
        >
          <p>
            지금까지 플로우빗의 예측가격이{" "}
            <span
              ref={numberRef}
              css={css`
                color: #79deff;
              `}
            >
              {currentNum.toLocaleString()}
            </span>
            번 조회됐어요
            <br />
            지금 바로 시작하세요!
          </p>
          <img
            src={BlackEtherImg}
            css={css`
              position: absolute;
              bottom: 2px;
              left: 16%;

              ${BREAK_POINTS.TABLET} {
                width: 7rem;
              }

              ${BREAK_POINTS.MOBILE} {
                width: 3rem;
              }
            `}
          />
          <img
            src={SkyblueLImg}
            css={css`
              position: absolute;
              top: 20%;
              left: 6%;

              ${BREAK_POINTS.TABLET} {
                left: 3%;
                width: 6rem;
              }

              ${BREAK_POINTS.MOBILE} {
                left: 2px;
                top: 5%;
                width: 3rem;
              }
            `}
          />
          <img
            src={GreenBitImg}
            css={css`
              position: absolute;
              top: 0px;
              left: 27%;

              ${BREAK_POINTS.TABLET} {
                width: 4rem;
              }

              ${BREAK_POINTS.MOBILE} {
                width: 3rem;
              }
            `}
          />
          <img
            src={YellowBitImg}
            css={css`
              position: absolute;
              top: 0px;
              left: 78%;

              ${BREAK_POINTS.TABLET} {
                width: 8rem;
              }

              ${BREAK_POINTS.MOBILE} {
                width: 5rem;
              }
            `}
          />
          <img
            src={OrangeBitImg}
            css={css`
              position: absolute;
              bottom: 0px;
              left: 82%;

              ${BREAK_POINTS.TABLET} {
                width: 8rem;
              }

              ${BREAK_POINTS.MOBILE} {
                width: 5rem;
              }
            `}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;

        ${BREAK_POINTS.TABLET} {
          flex-direction: column;
        }

        ${BREAK_POINTS.MOBILE} {
          flex-direction: column;
        }
      `}
    >
      <div
        ref={sectionRef}
        css={css`
          position: relative;
          width: 36.5rem;
          height: 4rem;
          padding: 0px;
          background: #2f3b4b;
          color: #ffffff;
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          &::after {
            content: "";
            position: absolute;
            width: 22px;
            height: 20px;
            background: #2f3b4b;
            clip-path: path("M0,0 L22,0 L13,16 Q11,20 9,16 L0,0");
            display: block;
            z-index: 1;
            margin-left: -2.6rem;
            bottom: -1rem;
            left: 13%;
          }

          ${BREAK_POINTS.TABLET} {
          }

          ${BREAK_POINTS.MOBILE} {
          }
        `}
      >
        <p>
          지금까지 플로우빗의 예측가격이{" "}
          <span
            ref={numberRef}
            css={css`
              color: #33c2ff;
            `}
          >
            {currentNum.toLocaleString()}
          </span>
          번 조회됐어요
        </p>
      </div>
    </div>
  );
};
