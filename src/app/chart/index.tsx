import NewsCard, { Props } from "@/components/app/chart/newsletter/news-card";
import { Fragment } from "react";
import UseApiNewLetter from "@/hooks/api/newsletter/UseApiNewLetter";

export default function Chart() {
  const { data } = UseApiNewLetter();

  return (
    <Fragment>
      {data?.map((article: Props["article"]) => {
        console.log(article);
        return <NewsCard article={article} key={article.originalLink} />;
      })}
    </Fragment>
  );
}
