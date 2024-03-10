import { css } from "@emotion/react";
import NewsTag from "./news-tag";
import NewContents from "./news-content";
import NewImage from "./news-image";
import Arrow from "@/assets/arrow.svg?react";

export type Props = {
  article: {
    description: string;
    img: string;
    newsViewCount: number;
    originalLink: string;
    preview_link: string;
    pubDate: string;
    tag: string[];
    title: string;
  };
};

export default function NewsCard({ article }: Props) {
  console.log(article);
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        width: 232px;
      `}
    >
      <NewImage />
      <div
        css={css`
          display: flex;
          column-gap: 8px;
        `}
      >
        <NewsTag tagName="비트코인" />
        <NewsTag tagName="도지코인" />
      </div>
      <NewContents
        title="비트코인, 2년여 만에 최고치 기록…연내 1억 돌파하나? (김광식 한양대 겸임교수) 비트코인, 2년여 만에 최고치 기록…연내 1억 돌파하나? (김광식 한양대 겸임교수)"
        content="주 대표는 테라, FTX 사태를 예측했듯 최근 급박하ㅇㄴㄹㄴㄹ"
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          column-gap: 17px;
          margin-top: 12px;
        `}
      >
        <div
          css={css`
            font-size: 12px;
            font-weight: 600;
          `}
        >
          Read More
        </div>
        <Arrow />
      </div>
    </div>
  );
}
