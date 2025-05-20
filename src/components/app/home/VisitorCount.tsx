import { css } from "@emotion/react";
import { BREAK_POINTS, DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";
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

interface MessageProps {
  currentNum: number | string;
  numberRef: React.RefObject<HTMLSpanElement>;
  isBottom?: boolean;
}

const containerStyle = css`
  padding: 12rem 0;

  ${BREAK_POINTS.TABLET} {
    padding: 8rem 0;
  }

  ${BREAK_POINTS.MOBILE} {
    padding: 0;
  }
`;

const visitorCountStyle = css`
  ${DESIGN_SYSTEM_TEXT.T2}
  position: relative;
  width: 100%;
  height: 16.4rem;
  border-radius: 1.6rem;
  background-color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
  color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${BREAK_POINTS.TABLET} {
    ${DESIGN_SYSTEM_TEXT.T4}
    height: 14rem;
  }

  ${BREAK_POINTS.MOBILE} {
    ${DESIGN_SYSTEM_TEXT.CAPTION}
    height: 7.2rem;
    border-radius: 1rem;
  }
`;

const countNumberStyle = css`
  color: #79deff;
`;

const blackEtherStyle = css`
  position: absolute;
  bottom: 2px;
  left: 16%;

  ${BREAK_POINTS.TABLET} {
    width: 7rem;
  }

  ${BREAK_POINTS.MOBILE} {
    width: 3rem;
  }
`;

const skyblueLStyle = css`
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
`;

const greenBitStyle = css`
  position: absolute;
  top: 0px;
  left: 27%;

  ${BREAK_POINTS.TABLET} {
    width: 4rem;
  }

  ${BREAK_POINTS.MOBILE} {
    width: 3rem;
  }
`;

const yellowBitStyle = css`
  position: absolute;
  top: 0px;
  left: 78%;

  ${BREAK_POINTS.TABLET} {
    width: 8rem;
  }

  ${BREAK_POINTS.MOBILE} {
    width: 5rem;
  }
`;

const orangeBitStyle = css`
  position: absolute;
  bottom: 0px;
  left: 82%;

  ${BREAK_POINTS.TABLET} {
    width: 8rem;
  }

  ${BREAK_POINTS.MOBILE} {
    width: 5rem;
  }
`;

const topContainerStyle = css`
  display: flex;
  justify-content: space-between;

  ${BREAK_POINTS.TABLET} {
    flex-direction: column;
  }

  ${BREAK_POINTS.MOBILE} {
    flex-direction: column;
  }
`;

const topVisitorCountStyle = css`
  position: relative;
  width: 36.5rem;
  height: 4rem;
  padding: 0px;
  background: ${DESIGN_SYSTEM_COLOR.BLUE_GRAY_700};
  color: ${DESIGN_SYSTEM_COLOR.BLUE_GRAY_50};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    width: 22px;
    height: 20px;
    background: ${DESIGN_SYSTEM_COLOR.BLUE_GRAY_700};
    clip-path: path("M0,0 L22,0 L13,16 Q11,20 9,16 L0,0");
    display: block;
    z-index: 1;
    margin-left: -2.6rem;
    bottom: -1rem;
    left: 13%;
  }
`;

const topCountNumberStyle = css`
  color: ${DESIGN_SYSTEM_COLOR.BRAND_OCEAN};
`;

const Message = ({ currentNum, numberRef, isBottom = false }: MessageProps) => {
  return (
    <p>
      지금까지 플로우빗의 예측가격이{" "}
      <span
        ref={numberRef}
        css={isBottom ? countNumberStyle : topCountNumberStyle}
      >
        {currentNum.toLocaleString()}
      </span>
      번 조회됐어요
      {isBottom && (
        <>
          <br />
          지금 바로 시작하세요!
        </>
      )}
    </p>
  );
};

export const VisitorCount = ({
  currentNum,
  numberRef,
  sectionRef,
  isBottom = false,
}: VisitorCountProps) => {
  if (isBottom) {
    return (
      <div css={containerStyle}>
        <div
          ref={sectionRef}
          css={visitorCountStyle}
        >
          <Message 
            currentNum={currentNum} 
            numberRef={numberRef} 
            isBottom={true} 
          />
          <img
            src={BlackEtherImg}
            css={blackEtherStyle}
          />
          <img
            src={SkyblueLImg}
            css={skyblueLStyle}
          />
          <img
            src={GreenBitImg}
            css={greenBitStyle}
          />
          <img
            src={YellowBitImg}
            css={yellowBitStyle}
          />
          <img
            src={OrangeBitImg}
            css={orangeBitStyle}
          />
        </div>
      </div>
    );
  }

  return (
    <div css={topContainerStyle}>
      <div ref={sectionRef} css={topVisitorCountStyle}>
        <Message 
          currentNum={currentNum} 
          numberRef={numberRef} 
          isBottom={false} 
        />
      </div>
    </div>
  );
};
