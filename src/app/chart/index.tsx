import NewsCard, {
  newsLetterProps,
} from "@/components/app/chart/newsletter/news-card";
import { Fragment } from "react";
import UseApiNewLetter from "@/hooks/api/newsletter/UseApiNewLetter";
import FitNess from "@/components/app/chart/fitness/fitness";

export default function PredictPage() {
  const { data } = UseApiNewLetter();

  return (
    <Fragment>
      {/* TODO : 추후 컴포넌트 구성 진행, 현재 예측 페이지 공통 컴포넌트 제작 */}
      {/* {data &&
        data.map((article: newsLetterProps["article"]) => {
          return <NewsCard article={article} key={article.originalLink} />;
        })} */}
      <FitNess fitnessScore={96} />
    </Fragment>
  );
}
