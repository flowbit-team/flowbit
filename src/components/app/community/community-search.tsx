import { css } from "@emotion/react";
import Cursor from "@/assets/Cursor.png";
import S1 from "@/components/common/text/S1";
import Glass from "@/assets/Glass.svg";
import B2 from "@/components/common/text/B2";
import Tag from "@/components/common/tag";

const TAG_LIST = ["#비트코인", "#이더리움", "#리플"];

export default function CommunitySearch() {
  return (
    <aside
      css={css`
        display: block;
        width: 26rem;
      `}
    >
      {/* Title */}
      <header
        css={css`
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.7rem;
        `}
      >
        <img
          css={css`
            width: 2.4rem;
            height: 2.4rem;
          `}
          src={Cursor}
          alt="커서 이미지"
        />
        <S1>무엇을 찾고 계신가요?</S1>
      </header>
      {/* Layout */}
      <div
        css={css`
          padding: 2rem 1.8rem;
          border: 0.1rem solid #eeeeee;
          display: flex;
          flex-direction: column;
          gap: 2.8rem;
          border-radius: 0.5rem;
        `}
      >
        {/* Search Bar */}
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 0.1rem solid #f5f5f5;
            border-radius: 0.5rem;
            background-color: #fafafa;
            padding: 0.7rem 1.5rem;
          `}
        >
          <input
            css={css`
              font-size: 1.4rem;
              line-height: 2.2rem;
              background-color: #fafafa;
              color: #757575;
              border: none;
              outline: none;
            `}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <img src={Glass} alt="glass" />
        </div>
        {/* Search By Tag */}
        <div>
          <div
            css={css`
              margin-bottom: 1rem;
            `}
          >
            <B2>태그 검색</B2>
          </div>
          <div>
            {TAG_LIST.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
