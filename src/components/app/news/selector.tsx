import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";
import { Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";
import Glass from "@/assets/Glass.svg";

interface selectorProps {
  categoryList: string[];
  orderList: string[];
  category: string;
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
}
export default function Selector({
  categoryList,
  orderList,
  category,
  order,
  setCategory,
  setOrder,
}: selectorProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        row-gap: 1.2rem;
      `}
    >
      <div
        css={css`
          ${DESIGN_SYSTEM_TEXT.T4}
        `}
      >
        <span>뉴스레터</span>
      </div>
      <section
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <nav
          css={css`
            display: flex;
            align-items: center;
            column-gap: 2rem;
          `}
        >
          {categoryList.map((item) => {
            return (
              <div
                key={item}
                onClick={(event) =>
                  setCategory(
                    (event.target as HTMLElement).textContent as string,
                  )
                }
                css={css`
                  span {
                    cursor: pointer;
                    transition: 0.4s all;
                  }
                `}
              >
                {item === category ? (
                  <span
                    css={css`
                      ${DESIGN_SYSTEM_TEXT.S2}
                      text-decoration: underline;
                      text-underline-offset: 2.5rem;
                      text-decoration-thickness: 0.3rem;
                      text-decoration-color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
                    `}
                  >
                    {item}
                  </span>
                ) : (
                  <span
                    css={css`
                      ${DESIGN_SYSTEM_TEXT.S3}
                      color: ${DESIGN_SYSTEM_COLOR.GRAY_400};
                    `}
                  >
                    {item}
                  </span>
                )}
              </div>
            );
          })}
        </nav>
        <nav
          css={css`
            display: flex;
            align-items: center;
            column-gap: 1rem;
            margin-left: auto;
          `}
        >
          {orderList.map((item) => {
            return (
              <div
                key={item}
                onClick={(event) =>
                  setOrder((event.target as HTMLElement).textContent as string)
                }
                css={css`
                  span {
                    cursor: pointer;
                    ${DESIGN_SYSTEM_TEXT.B2};
                    padding: 0.8rem 1.5rem;
                    transition: 0.4s all;
                  }
                `}
              >
                {order === item ? (
                  <span
                    css={css`
                      color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
                      background-color: ${DESIGN_SYSTEM_COLOR.GRAY_100};
                      border-radius: 10rem;
                    `}
                  >
                    {item}
                  </span>
                ) : (
                  <span
                    css={css`
                      color: ${DESIGN_SYSTEM_COLOR.GRAY_600};
                    `}
                  >
                    {item}
                  </span>
                )}
              </div>
            );
          })}
          <div
            css={css`
              width: 22.9rem;
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
                ${DESIGN_SYSTEM_TEXT.B2};
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
        </nav>
      </section>
      <div
        css={css`
          width: 100%;
          border: none;
          background: ${DESIGN_SYSTEM_COLOR.GRAY_300};
          height: 0.2rem;
          z-index: -1;
        `}
      ></div>
    </div>
  );
}
