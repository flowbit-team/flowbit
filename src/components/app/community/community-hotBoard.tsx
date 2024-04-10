import { useState } from "react";
import { css } from "@emotion/react";
import Fire from "@/assets/Fire.png";
import S1 from "@/components/common/text/S1";
import B2 from "@/components/common/text/B2";
import B1_bold from "@/components/common/text/B1_bold";
import B1 from "@/components/common/text/B1";

const eng2Kr: { [key: string]: string } = {
  LATEST: "실시간",
  WEEKLY: "주간",
  COMMENT: "댓글순",
};

const TAB_LIST = ["LATEST", "WEEKLY", "COMMENT"];

export default function CommunityHotBoard() {
  const [curTab, setCurTab] = useState("LATEST");

  const handleChangeTab = (tab: string) => {
    setCurTab(tab);
  };

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
          src={Fire}
          alt="커서 이미지"
        />
        <S1>가장 많이 읽은 글</S1>
      </header>
      {/* Layout */}
      <div
        css={css`
          padding: 2rem 1.8rem;
          border: 0.1rem solid #eeeeee;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-radius: 0.5rem;
        `}
      >
        {/* tab */}
        <nav
          css={css`
            margin-bottom: 1.6rem;
          `}
        >
          <ul
            css={css`
              display: flex;
              align-items: center;
              list-style: none;
              padding: 0;
              margin: 0;
              gap: 1rem;

              & > li {
                padding: 0.5rem 1.5rem;
                cursor: pointer;
              }

              & > li.selected {
                border-radius: 10rem;
                background-color: #0056ca;
              }

              & > li.selected span {
                font-weight: bold;
                color: #fafafa;
              }
            `}
          >
            {TAB_LIST.map((tab) => (
              <li
                onClick={() => handleChangeTab(tab)}
                className={tab === curTab ? "selected" : ""}
              >
                <B2
                  css={css`
                    color: #757575;
                  `}
                >
                  {eng2Kr[tab]}
                </B2>
              </li>
            ))}
          </ul>
        </nav>
        {/* list */}
        <div>
          <ul
            css={css`
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
            `}
          >
            <li
              css={css`
                display: flex;
                gap: 0.8rem;
              `}
            >
              <B1_bold>01</B1_bold>
              <B1
                css={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
              >
                도지코인 이대로 괜찮은가...
              </B1>
              <B1
                css={css`
                  color: #e74c4c;
                `}
              >
                (3)
              </B1>
            </li>
            <li
              css={css`
                display: flex;
                gap: 0.8rem;
              `}
            >
              <B1_bold>01</B1_bold>
              <B1
                css={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
              >
                도지코인 이대로 괜찮은가...
              </B1>
              <B1
                css={css`
                  color: #e74c4c;
                `}
              >
                (3)
              </B1>
            </li>
            <li
              css={css`
                display: flex;
                gap: 0.8rem;
              `}
            >
              <B1_bold>01</B1_bold>
              <B1
                css={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
              >
                도지코인 이대로 괜찮은가...
              </B1>
              <B1
                css={css`
                  color: #e74c4c;
                `}
              >
                (3)
              </B1>
            </li>
            <li
              css={css`
                display: flex;
                gap: 0.8rem;
              `}
            >
              <B1_bold>01</B1_bold>
              <B1
                css={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
              >
                도지코인 이대로 괜찮은가...
              </B1>
              <B1
                css={css`
                  color: #e74c4c;
                `}
              >
                (3)
              </B1>
            </li>
            <li
              css={css`
                display: flex;
                gap: 0.8rem;
              `}
            >
              <B1_bold>01</B1_bold>
              <B1
                css={css`
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                `}
              >
                도지코인 이대로 괜찮은가...
              </B1>
              <B1
                css={css`
                  color: #e74c4c;
                `}
              >
                (3)
              </B1>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
