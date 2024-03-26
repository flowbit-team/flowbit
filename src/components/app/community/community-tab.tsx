import { useState } from "react";
import { css } from "@emotion/react";
import B2 from "@/components/common/text/B2";
import S3 from "@/components/common/text/S3";

const eng2Kor: { [key: string]: string } = {
  TOTAL: "전체",
  DOZI: "도지코인",
  BIT: "비트코인",
  ETHER: "이더리움",
  LATEST: "최신순",
  POPULAR: "인기순",
};

const COIN_TYPE_LIST = ["TOTAL", "DOZI", "BIT", "ETHER"];
const ORDER_TYPE_LIST = ["LATEST", "POPULAR"];

export default function CommunityTab() {
  const [selectedCoinType, setSelectedCoinType] = useState("TOTAL");
  const [selectedOrderType, setSelectedOrderType] = useState("LATEST");

  const handleTabChange = (coinType: string) => {
    setSelectedCoinType(coinType);
  };

  const handleOrderChange = (dateType: string) => {
    setSelectedOrderType(dateType);
  };

  return (
    <nav
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;

        border-bottom: 2px solid #e0e0e0;
      `}
    >
      {/* Tab */}
      <div>
        <ul
          css={css`
            display: flex;
            gap: 20px;
            padding: 0;
            margin: 0;
            list-style: none;

            & label {
              cursor: pointer;
            }

            & input:checked + label > span {
              color: #222222;
              font-weight: bold;
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
                  <S3
                    css={css`
                      color: #bdbdbd;
                    `}
                  >
                    {eng2Kor[type]}
                  </S3>
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
            gap: 10px;
            padding: 0;
            padding-bottom: 12px;
            padding-right: 10px;
            margin: 0;
            list-style: none;

            & label {
              padding: 5px 15px;
              border-radius: 100px;
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
                  <B2
                    css={css`
                      color: #757575;
                    `}
                  >
                    {eng2Kor[type]}
                  </B2>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
