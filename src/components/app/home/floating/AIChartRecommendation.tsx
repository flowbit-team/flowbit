import { css } from "@emotion/react";

export default function AIChartRecommendation() {
  return (
    <div>
      <h1 css={titleStyle}>
        '비트코인' 가격 추세 예측과 뉴스 동향을 종합해서 최적의 투자 판단을
        추천해드릴게요.
      </h1>
      <div css={analysisContainerStyle}>
        <div css={analysisHeaderStyle}>비트코인 예측 해석</div>
        <div css={analysisContentStyle}>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </div>
      </div>
      <div css={analysisContainerSecondStyle}>
        <div css={analysisHeaderStyle}>비트코인 예측 해석</div>
        <div css={analysisContentStyle}>
          가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        </div>
      </div>
      <div>
        <div css={recommendButtonStyle}>매수 추천</div>
        <h2 css={titleStyle}>
          지금 주요뉴스 동향을 분석해서 추천할 만한 투자 판단을 도와드릴까요?
        </h2>
      </div>
    </div>
  );
}

const titleStyle = css`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

const analysisContainerStyle = css`
  background-color: #f2f6fc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const analysisContainerSecondStyle = css`
  background-color: #f2f6fc;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

const analysisHeaderStyle = css`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;

const analysisContentStyle = css`
  font-size: 14px;
  line-height: 1.5;
  color: #424242;
`;

const recommendButtonStyle = css`
  width: 69px;
  height: 29px;
  margin-top: 12px;
  background-color: #0056ca;
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  margin: 8.5px 0px;
`;
