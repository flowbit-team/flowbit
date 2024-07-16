import { css } from "@emotion/react";
import { Fragment, useEffect, useState } from "react";
import _ from "lodash";
import Selector from "@/components/app/news/selector.tsx";
import { useInfiniteApiNewLetter } from "@/hooks/api/newsletter/useApiNewLetter.ts";
import NewsCard, {
  newsLetterProps,
} from "@/components/app/predict/newsletter/news-card.tsx";
import { useInView } from "react-intersection-observer";
import Carousel from "@/components/common/carousel";
import NotData from "@/components/common/NotData.tsx";

export default function News() {
  const CATEGORY = ["전체", "리플", "비트코인", "이더리움"];
  const ORDER = ["최신순", "인기순"];
  const [category, setCategory] = useState("전체");
  const [order, setOrder] = useState("최신순");
  const [inputValue, setInputValue] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [prevScroll, setScroll] = useState(0);
  const [ref, inView] = useInView();

  const {
    data: dataSet,
    hasNextPage,
    fetchNextPage,
    isSuccess,
  } = useInfiniteApiNewLetter(category, order, searchWord);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  /** 성공했을 경우 저장한 스크롤 상태 값을 현재 상태로 적용합니다. */
  useEffect(() => {
    if (isSuccess) {
      window.scrollTo(0, prevScroll);
      setScroll(0);
    }
  }, [category, isSuccess, order]);

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
          setScroll={setScroll}
        />
        <div
          css={css`
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 7.2rem;
            row-gap: 2.6rem;
            margin-top: 3.7rem;
            min-height: 50vh;
            height: 100%;
          `}
        >
          {dataSet?.pages.map(({ content }) => {
            if (content.length) {
              return (
                <Fragment>
                  {(content as newsLetterProps["article"][]).map((item) => {
                    return <NewsCard article={item} />;
                  })}
                </Fragment>
              );
            } else {
              return <NotData />;
            }
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
