import { css } from "@emotion/react";
import NewsTag from "./news-tag";
import NewContents from "./news-content";
import NewImage from "./news-image";
import Arrow from "@/assets/arrow.svg?react";
import { increaseViews } from "@/hooks/api/newsletter/UseApiIncreaseViews.ts";

export type newsLetterProps = {
  article: {
    description: string;
    img: string;
    newsViewCount: number;
    originalLink: string;
    link: string;
    preview_link: string;
    pubDate: string;
    tag: string;
    title: string;
  };
};

export default function NewsCard({ article }: newsLetterProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        width: 100%;
        transition: 0.4s all;
        cursor: pointer;

        &:hover {
          transform: translateY(-1rem);
        }
      `}
      onClick={() => {
        increaseViews(article.link).then(() =>
          window.open(article.originalLink),
        );
      }}
    >
      <NewImage src={article.img} date={article.pubDate} />
      <div
        css={css`
          display: flex;
          column-gap: 8px;
        `}
      >
        {article.tag.split(",").map((tag) => {
          return <NewsTag tagName={tag} key={tag} />;
        })}
      </div>
      <NewContents title={article.title} content={article.description} />
      <div
        css={css`
          display: flex;
          align-items: center;
          column-gap: 17px;
          margin-top: 12px;
          transition: 0.4s all;
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
