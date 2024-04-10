import { useState } from "react";
import { css } from "@emotion/react";
import Fire from "@/assets/Fire.png";
import UseApiCommunity, {
  ApiCommunityProps,
} from "@/hooks/api/newsletter/UseApiComminity";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";

const eng2Kr: { [key: string]: string } = {
  LATEST: "실시간",
  WEEKLY: "주간",
  COMMENT: "댓글순",
};

const TAB_LIST = ["LATEST", "WEEKLY", "COMMENT"];

export default function CommunityHotBoard() {
  const [communityProps, setCommunityProps] = useState<ApiCommunityProps>({
    page: 0,
    size: 5,
    sort: "Sort=boardLikeCount,desc",
  });
  const { data } = UseApiCommunity(communityProps);

  const [curTab, setCurTab] = useState("LATEST");

  const handleChangeTab = (tab: string) => {
    setCurTab(tab);

    let newCommunityProps: ApiCommunityProps = communityProps;

    switch (tab) {
      case "LATEST":
        newCommunityProps = {
          ...newCommunityProps,
          sort: "Sort=boardLikeCount,desc",
        };
        break;
      case "WEEKLY":
        newCommunityProps = {
          ...newCommunityProps,
          sort: "setDataForPastWeeks=1",
        };
        break;
      case "COMMENT":
        newCommunityProps = {
          ...newCommunityProps,
          sort: "Sort=boardCommentCount,desc",
        };
        break;
      default:
        break;
    }

    setCommunityProps(newCommunityProps);
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
        <span
          css={css`
            ${DESIGN_SYSTEM_TEXT.S1}
          `}
        >
          가장 많이 읽은 글
        </span>
      </header>
      {/* Layout */}
      <div
        css={css`
          padding: 2rem 1.8rem;
          border: 0.1rem solid ${DESIGN_SYSTEM_COLOR.GRAY_200};
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
                background-color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
              }

              & > li.selected span {
                font-weight: bold;
                color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
              }
            `}
          >
            {TAB_LIST.map((tab) => (
              <li
                onClick={() => handleChangeTab(tab)}
                className={tab === curTab ? "selected" : ""}
              >
                <span
                  css={css`
                    ${DESIGN_SYSTEM_TEXT.B2}
                    color: ${DESIGN_SYSTEM_COLOR.GRAY_600};
                  `}
                >
                  {eng2Kr[tab]}
                </span>
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
            {data &&
              data.content.map((row, index) => {
                return (
                  <li
                    css={css`
                      display: flex;
                      justify-content: space-between;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        gap: 0.8rem;
                      `}
                    >
                      <span
                        css={css`
                          ${DESIGN_SYSTEM_TEXT.B1_BOLD}
                        `}
                      >
                        0{index + 1}
                      </span>
                      <span
                        css={css`
                          ${DESIGN_SYSTEM_TEXT.B1}
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;
                        `}
                      >
                        {row.title}
                      </span>
                    </div>
                    <span
                      css={css`
                        ${DESIGN_SYSTEM_TEXT.B1}
                        color: ${DESIGN_SYSTEM_COLOR.RED_500};
                      `}
                    >
                      {row.comments.length ? `(${row.comments.length})` : ""}
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
