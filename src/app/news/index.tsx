import { css } from "@emotion/react";
import { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import Selector from "@/components/app/news/selector.tsx";
import { UseInfiniteApiNewLetter } from "@/hooks/api/newsletter/UseApiNewLetter.ts";
import NewsCard, {
  newsLetterProps,
} from "@/components/app/predict/newsletter/news-card.tsx";
import { useInView } from "react-intersection-observer";
import Carousel from "@/components/common/carousel";

export default function News() {
  const CATEGORY = ["전체", "리플", "비트코인", "이더리움"];
  const ORDER = ["최신순", "인기순"];
  const [category, setCategory] = useState("전체");
  const [order, setOrder] = useState("최신순");
  const [inputValue, setInputValue] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [ref, inView] = useInView();

  const {
    data: dataSet,
    hasNextPage,
    fetchNextPage,
  } = UseInfiniteApiNewLetter(category, order, searchWord);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <>
      <Carousel></Carousel>
      <article
        css={css`
          max-width: 111.6rem;
          margin: 0 auto;
          padding-top: 9.7rem;
        `}
      >
        {/*  TODO: 배너 완성이 되면 넣어야합니다! */}
        <Selector
          categoryList={CATEGORY}
          orderList={ORDER}
          category={category}
          order={order}
          inputValue={inputValue}
          setOrder={setOrder}
          setCategory={setCategory}
          setInputValue={setInputValue}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 7.2rem;
            row-gap: 2.6rem;
            margin-top: 3.7rem;
          `}
        >
          {dataSet?.pages.map(({ content }) => {
            return (
              <Fragment>
                {(content as newsLetterProps["article"][]).map((item) => {
                  return <NewsCard article={item} />;
                })}
              </Fragment>
            );
          })}
          <span
            ref={ref}
            css={css`
              height: 1rem;
            `}
          ></span>
        </div>
      </article>
    </>
  );
}
