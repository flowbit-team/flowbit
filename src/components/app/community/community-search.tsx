import { useState } from "react";
import { css } from "@emotion/react";
import Cursor from "@/assets/Cursor.png";
import S1 from "@/components/common/text/S1";
import Glass from "@/assets/Glass.svg";
import B2 from "@/components/common/text/B2";

export default function CommunitySearch() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchedList, setSearchedList] = useState<string[]>([
    "검색어1",
    "검색어2",
    "검색어34",
    "검색어345",
  ]);

  const tagList = ["#비트코인", "#이더리움", "#리플"];

  return (
    <aside
      css={css`
        display: block;
        width: 260px;
      `}
    >
      {/* Title */}
      <header
        css={css`
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 17px;
        `}
      >
        <img
          css={css`
            width: 24px;
            height: 24px;
          `}
          src={Cursor}
          alt="커서 이미지"
        />
        <S1>무엇을 찾고 계신가요?</S1>
      </header>
      {/* Layout */}
      <div
        css={css`
          padding: 20px 18px;
          border: 1px solid #eeeeee;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-radius: 5px;
        `}
      >
        {/* Search Bar */}
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 1px solid #f5f5f5;
            border-radius: 5px;
            background-color: #fafafa;
            padding: 7px 15px;
            gap: 5px;
          `}
        >
          <input
            css={css`
              font-size: 14px;
              line-height: 22px;
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
        {/* Search By Latest */}
        <div>
          <div
            css={css`
              margin-bottom: 10px;
            `}
          >
            <B2>최근 검색</B2>
          </div>
          <div>
            {searchedList.map((searched) => {
              return (
                <span
                  css={css`
                    display: inline-flex;
                    align-items: center;
                    justify-content: spac;
                    background-color: #f5f5f5;
                    border-radius: 3px;
                    padding: 2px 5px;
                    cursor: pointer;
                    color: #757575;
                    margin-right: 10px;
                    margin-bottom: 7px;
                    &:hover {
                      background-color: #e8f2ff;
                      color: #0056ca;
                      font-weight: bold;
                    }

                    &:hover path {
                      stroke: #0056ca;
                    }
                  `}
                >
                  <B2>{searched}</B2>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1463_8852)">
                      <path
                        d="M9.53553 2.46449L2.46447 9.53556M2.46447 2.46449L9.53553 9.53556"
                        stroke="#616161"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1463_8852">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              );
            })}
          </div>
        </div>
        {/* Search By Tag */}
        <div>
          <div
            css={css`
              margin-bottom: 10px;
            `}
          >
            <B2>태그 검색</B2>
          </div>
          <div>
            {tagList.map((tag) => {
              return (
                <span
                  css={css`
                    display: inline-flex;
                    align-items: center;
                    justify-content: spac;
                    background-color: #f5f5f5;
                    border-radius: 3px;
                    padding: 2px 5px;
                    cursor: pointer;
                    color: #757575;
                    margin-right: 10px;
                    margin-bottom: 7px;
                    &:hover {
                      background-color: #e8f2ff;
                      color: #0056ca;
                      font-weight: bold;
                    }

                    &:hover path {
                      stroke: #0056ca;
                    }
                  `}
                >
                  <B2>{tag}</B2>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
