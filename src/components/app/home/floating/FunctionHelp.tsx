import { css } from "@emotion/react";

export default function FunctionHelp() {
  return (
    <div>
      <h1 css={titleStyle}>현재 페이지에 있는 기능들을 알려드릴게요.</h1>
      <div css={helpContainerStyle}>
        <div css={helpHeaderStyle}>시세차트</div>
        <div css={helpContentStyle}>
          AI가 예측한 코인 가격과 실제 가격을 알려주는 시세 추이 차트로,
          상단에서 종목을 바꿀 수 있어요. 마우스 휠(또는 터치)로 확대 및
          축소하거나 상단의 태그를 눌러 날짜 영역을 바꿔보세요 :)
        </div>
      </div>
      <div css={helpContainerStyle}>
        <div css={helpHeaderStyle}>모델 적합도</div>
        <div css={helpContentStyle}>
          Flowbit AI 학습모델의 예측값이 실제 데이터 패턴을 얼마나 잘
          설명하는지를 검증된 통계적 기법으로 평가한 지표에요. 지표가 높을수록
          예측 정확도가 높아지기 때문에, 현재 지표 상으로는 예측가격이
          실제가격과 매우 유사할 거에요 :)
        </div>
      </div>
      <div css={helpContainerStyle}>
        <div css={helpHeaderStyle}>뉴스룸</div>
        <div css={helpContentStyle}>
          매일 가상화폐 종목 별 주요뉴스를 선별해 제공하고 있어요.
        </div>
      </div>
    </div>
  );
}

const titleStyle = css`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

const helpContainerStyle = css`
  background-color: var(--blue-5);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const helpHeaderStyle = css`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;

const helpContentStyle = css`
  font-size: 14px;
  line-height: 1.5;
  color: var(--gray-80);
`;
