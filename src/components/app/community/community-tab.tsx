import { useState } from "react";
import { css } from "@emotion/react";
import {
  BREAK_POINTS,
  DESIGN_SYSTEM_COLOR,
  DESIGN_SYSTEM_TEXT,
} from "@/style/variable";

const COIN_TYPE_LIST = ["전체", "리플", "비트코인", "이더리움"];
const ORDER_TYPE_LIST = ["최신순", "인기순"];
const ORDER_TYPE_DICT: { [key: string]: string } = {
  최신순: "&sort=createdAt,desc",
  인기순: "&Sort=boardLikeCount,desc",
};

export default function CommunityTab({
  onClickCategoryTab,
  onClickSortTab,
}: {
  onClickCategoryTab: (category: string) => void;
  onClickSortTab: (sort: string) => void;
}) {
  const [selectedCoinType, setSelectedCoinType] = useState(COIN_TYPE_LIST[0]);
  const [selectedOrderType, setSelectedOrderType] = useState(
    ORDER_TYPE_LIST[0],
  );
  const [isTabOpen, setIsTapOpen] = useState(false);

  const handleTabChange = (coinType: string) => {
    setSelectedCoinType(coinType);
    onClickCategoryTab(`&boardCategory=${coinType}`);
    setIsTapOpen(!isTabOpen);
  };

  const handleOrderChange = (dateType: string) => {
    setSelectedOrderType(dateType);
    const sort = ORDER_TYPE_DICT[dateType];
    if (sort) {
      onClickSortTab(sort);
    }
  };

  return (
    <nav
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;

        border-bottom: 0.2rem solid #e0e0e0;
      `}
    >
      {/* Tab */}
      <div
        css={css`
          position: relative;
        `}
      >
        <div
          css={css`
            display: none;

            ${BREAK_POINTS.MOBILE} {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 9.5rem;
              cursor: pointer;
            }
          `}
          onClick={() => setIsTapOpen(!isTabOpen)}
        >
          <span
            css={css`
              ${DESIGN_SYSTEM_TEXT.B1_BOLD}
            `}
          >
            {selectedCoinType}
          </span>
          <span>
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.770394 0.830941C1.04498 0.556353 1.49018 0.556353 1.76476 0.830941L6.89258 5.95876L12.0204 0.830941C12.295 0.556353 12.7402 0.556353 13.0148 0.830941C13.2893 1.10553 13.2893 1.55072 13.0148 1.82531L7.38976 7.45031C7.11518 7.7249 6.66998 7.7249 6.39539 7.45031L0.770394 1.82531C0.495806 1.55072 0.495806 1.10553 0.770394 0.830941Z"
                fill="#222222"
              />
            </svg>
          </span>
        </div>
        <ul
          css={css`
            display: flex;
            gap: 2rem;
            padding: 0;
            margin: 0;
            list-style: none;

            ${BREAK_POINTS.MOBILE} {
              position: absolute;
              flex-direction: column;
              gap: 0;

              display: ${isTabOpen ? "block" : "none"};
            }

            & label {
              cursor: pointer;
              position: relative;
            }

            & input:checked + label > span {
              color: #222222;
              font-weight: bold;
            }

            & input:checked + label::after {
              content: " ";
              display: block;
              width: 100%;
              height: 0.2rem;
              background-color: #0056ca;

              position: absolute;
              bottom: -100%;
              transform: translateY(-0.3rem);

              ${BREAK_POINTS.MOBILE} {
                display: none;
              }
            }
          `}
        >
          {COIN_TYPE_LIST.map((type) => {
            return (
              <li key={type}>
                <input
                  type="radio"
                  id={`community-tab-${type}`}
                  name="community-tab"
                  hidden
                  checked={type === selectedCoinType}
                  onChange={() => handleTabChange(type)}
                />
                <label htmlFor={`community-tab-${type}`}>
                  <span
                    css={css`
                      ${DESIGN_SYSTEM_TEXT.S3};
                      color: ${DESIGN_SYSTEM_COLOR.GRAY_400};

                      ${BREAK_POINTS.MOBILE} {
                        ${DESIGN_SYSTEM_TEXT.B2};
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: white;
                        border: 1px solid ${DESIGN_SYSTEM_COLOR.GRAY_200};

                        width: 9.5rem;
                        height: 4.2rem;

                        &:hover {
                          background-color: #e8f2ff;
                        }
                      }
                    `}
                  >
                    {type}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Date Order */}
      <div>
        <ul
          css={css`
            display: flex;
            gap: 1rem;
            padding: 0;
            padding-bottom: 1.2rem;
            padding-right: 1rem;
            margin: 0;
            list-style: none;

            & label {
              padding: 0.5rem 1.5rem;
              border-radius: 10rem;
              cursor: pointer;
            }

            & input:checked + label {
              background-color: #f5f5f5;
            }

            & input:checked + label > span {
              color: #222222;
            }
          `}
        >
          {ORDER_TYPE_LIST.map((type) => {
            return (
              <li key={type}>
                <input
                  type="radio"
                  id={`community-order-${type}`}
                  name="community-order"
                  hidden
                  checked={type === selectedOrderType}
                  onChange={() => handleOrderChange(type)}
                />
                <label htmlFor={`community-order-${type}`}>
                  <span
                    css={css`
                      ${DESIGN_SYSTEM_TEXT.B2};
                      color: ${DESIGN_SYSTEM_COLOR.GRAY_600};

                      ${BREAK_POINTS.MOBILE} {
                        ${DESIGN_SYSTEM_TEXT.CAPTION};
                      }
                    `}
                  >
                    {type}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
