import Chart from "@/components/app/predict/chart/chart";
import FitNess from "@/components/app/predict/fitness/fitness";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";
import { css } from "@emotion/react";
import { Fragment } from "react";
// import FitNess from "@/components/app/predict/fitness/fitness.tsx";
// import UseApiNewLetter from "@/hooks/api/newsletter/UseApiNewLetter";

export default function PredictPage() {
  // const { data } = UseApiNewLetter();

  return (
    <Fragment>
      <article
        css={css`
          max-width: 111.6rem;
          margin: 0 auto;
          padding-top: 9.7rem;
        `}
      >
        {/* TODO : 추후 컴포넌트 구성 진행, 현재 예측 페이지 공통 컴포넌트 제작 */}
        <Chart></Chart>
        <div
          css={css`
            max-width: 355px;
          `}
        >
          {/* 모델 적합도 */}
          <h2
            css={css`
              ${DESIGN_SYSTEM_TEXT.S1}
              margin-bottom: 2rem;
            `}
          >
            모델 적합도
          </h2>
          <p
            css={css`
              ${DESIGN_SYSTEM_TEXT.B2}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_700};
            `}
          >
            모델에 대한 설명 및 적합도에 대한 내용 어쩌고모델에 대한 설명 및
            적합도에 대한 내용 어쩌고모델에 대한 설명 및 적합도에 대한 내용
            어쩌고
          </p>
          <FitNess fitnessScore={96}></FitNess>
          {/* 뉴스레터 */}
          {/* {data &&
        data.map((article: newsLetterProps["article"]) => {
          return <NewsCard article={article} key={article.originalLink} />;
        })} */}
          {/* <FitNess fitnessScore={90} /> */}
        </div>
      </article>
    </Fragment>
  );
}
