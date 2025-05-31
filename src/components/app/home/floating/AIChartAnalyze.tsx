import IconRightChevron from "@/assets/IconRightChevron.svg?react";
import { useBitCoinAnalysisQuery } from "@/hooks/api/floating/useBitCoinAnalysisQuery";
import { css } from "@emotion/react";

export default function AIChartAnalyze() {
  const { data } = useBitCoinAnalysisQuery();
  console.log(data);

  return (
    <div>
      <h1
        css={css`
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        `}
      >
        '비트코인' 가격 추세 예측과 뉴스 동향을 종합해서 최적의 투자 판단을
        추천해드릴게요.
      </h1>
      <div
        css={css`
          background-color: var(--blue-5);
          padding: 16px;
          border-radius: 8px;
          margin-bottom: 24px;
        `}
      >
        <div
          css={css`
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 8px;
          `}
        >
          비트코인 예측 해석
        </div>
        <div
          css={css`
            font-size: 14px;
            line-height: 1.5;
            color: var(--gray-80);
          `}
        >
          {data?.response}
        </div>
      </div>

      <div>
        <h2
          css={css`
            font-size: 18px;
            font-weight: 600;
            line-height: 1.4;
          `}
        >
          지금 주요뉴스 동향을 분석해서 추천할 만한 투자 판단을 도와드릴까요?
        </h2>
        <div
          css={css`
            width: 100%;
            height: 40px;
            margin-top: 12px;
            background-color: #0056ca;
            color: white;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 16px;
            font-weight: 400;
            margin: 8.5px 0px;
          `}
        >
          AI 추천판단 <IconRightChevron />
        </div>
      </div>
    </div>
  );
}
