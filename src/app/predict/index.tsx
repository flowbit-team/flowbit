import FitNess from "@/components/app/predict/fitness/fitness";
import {
  BREAK_POINTS,
  DESIGN_SYSTEM_COLOR,
  DESIGN_SYSTEM_TEXT,
} from "@/style/variable";
import { css } from "@emotion/react";
import { Fragment } from "react";
import UseApiNewLetter from "@/hooks/api/newsletter/useApiNewLetter.ts";
import NewsCard, {
  newsLetterProps,
} from "@/components/app/predict/newsletter/news-card";
import { useNavigate } from "react-router-dom";
import Chart from "@/components/app/predict/chart/chart";

export default function PredictPage() {
  const { data } = UseApiNewLetter();
  const navigate = useNavigate();

  return (
    <Fragment>
      <article
        css={css`
          max-width: 111.6rem;
          margin: 0 auto;
          padding-top: 9.7rem;

          ${BREAK_POINTS.TABLET} {
            max-width: 72.7rem;
          }
          ${BREAK_POINTS.MOBILE} {
            max-width: 32rem;
          }
        `}
      >
        <Chart />
        <div
          css={css`
            display: flex;
            margin-top: 4rem;
            gap: 1.6rem;

            ${BREAK_POINTS.TABLET} {
              flex-direction: column;
              gap: 2.4rem;
            }

            ${BREAK_POINTS.MOBILE} {
              flex-direction: column;
              gap: 2.4rem;
            }
          `}
        >
          {/* 모델 적합도 */}
          <div
            css={css`
              ${BREAK_POINTS.TABLET} {
                width: 100%;
                height: 44rem;
                margin: 0 auto;
                padding: 4rem;

                border: 1px solid ${DESIGN_SYSTEM_COLOR.GRAY_200};
                border-radius: 0.8rem;
              }

              ${BREAK_POINTS.MOBILE} {
                width: 100%;
                height: 31.5rem;
                padding: 2.4rem;
                margin: 0 auto;
              }
            `}
          >
            <div
              css={css`
                margin-bottom: 2rem;
                display: flex;
                align-items: center;
              `}
            >
              <h2
                css={css`
                  margin: 0;
                  ${DESIGN_SYSTEM_TEXT.S1}

                  ${BREAK_POINTS.TABLET} {
                    ${DESIGN_SYSTEM_TEXT.S2}
                  }

                  ${BREAK_POINTS.MOBILE} {
                    ${DESIGN_SYSTEM_TEXT.B2_BOLD}
                  }
                `}
              >
                모델 적합도
              </h2>
              {/* INFO ICON */}
              <svg
                css={css`
                  margin-left: 0.8rem;

                  display: none;

                  ${BREAK_POINTS.TABLET} {
                    display: block;
                    width: 1.9rem;
                    height: 1.9rem;
                  }

                  ${BREAK_POINTS.MOBILE} {
                    display: block;
                    width: 1.6rem;
                    height: 1.6rem;
                  }
                `}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_599_2793)">
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM11.625 6.75C11.8475 6.75 12.065 6.81598 12.25 6.9396C12.435 7.06321 12.5792 7.23891 12.6644 7.44448C12.7495 7.65005 12.7718 7.87625 12.7284 8.09448C12.685 8.31271 12.5778 8.51316 12.4205 8.6705C12.2632 8.82783 12.0627 8.93498 11.8445 8.97838C11.6263 9.02179 11.4001 8.99951 11.1945 8.91436C10.9889 8.82922 10.8132 8.68502 10.6896 8.50002C10.566 8.31501 10.5 8.0975 10.5 7.875C10.5 7.57663 10.6185 7.29048 10.8295 7.0795C11.0405 6.86853 11.3266 6.75 11.625 6.75ZM12.75 17.25C12.3522 17.25 11.9706 17.092 11.6893 16.8107C11.408 16.5294 11.25 16.1478 11.25 15.75V12C11.0511 12 10.8603 11.921 10.7197 11.7803C10.579 11.6397 10.5 11.4489 10.5 11.25C10.5 11.0511 10.579 10.8603 10.7197 10.7197C10.8603 10.579 11.0511 10.5 11.25 10.5C11.6478 10.5 12.0294 10.658 12.3107 10.9393C12.592 11.2206 12.75 11.6022 12.75 12V15.75C12.9489 15.75 13.1397 15.829 13.2803 15.9697C13.421 16.1103 13.5 16.3011 13.5 16.5C13.5 16.6989 13.421 16.8897 13.2803 17.0303C13.1397 17.171 12.9489 17.25 12.75 17.25Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_599_2793">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_700};

                ${BREAK_POINTS.TABLET} {
                  display: none;
                }

                ${BREAK_POINTS.MOBILE} {
                  display: none;
                }
              `}
            >
              Flowbit 학습모델의 예측값이 실제 데이터 패턴을 얼마나 잘
              설명하는지를 나타내는 지표입니다. 지표가 높을수록 예측 정확도가
              높아집니다.
            </p>
            <FitNess fitnessScore={96}></FitNess>
          </div>
          {/* 뉴스레터 */}
          <div>
            <div
              css={css`
                margin-bottom: 2rem;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  ${BREAK_POINTS.TABLET} {
                    padding: 1.2rem;
                    border-bottom: 2px solid ${DESIGN_SYSTEM_COLOR.GRAY_300};
                  }
                `}
              >
                <h2
                  css={css`
                    margin: 0;
                    ${DESIGN_SYSTEM_TEXT.S1}
                  `}
                >
                  뉴스레터
                </h2>
                <div
                  css={css`
                    display: flex;
                    gap: 0.4rem;
                    cursor: pointer;
                  `}
                  onClick={() => navigate("/news")}
                >
                  <span
                    css={css`
                      ${DESIGN_SYSTEM_TEXT.B1_BOLD}
                      color: ${DESIGN_SYSTEM_COLOR.GRAY_700};
                    `}
                  >
                    더보기
                  </span>
                  {/* 오른쪽 꺽쇠 */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.55806 17.4419C9.31398 17.1979 9.31398 16.8021 9.55806 16.5581L14.1161 12L9.55806 7.44194C9.31398 7.19786 9.31398 6.80214 9.55806 6.55806C9.80214 6.31398 10.1979 6.31398 10.4419 6.55806L15.4419 11.5581C15.686 11.8021 15.686 12.1979 15.4419 12.4419L10.4419 17.4419C10.1979 17.686 9.80214 17.686 9.55806 17.4419Z"
                      fill="#616161"
                    />
                  </svg>
                  {/* END */}
                </div>
              </div>
            </div>
            <div
              css={css`
                display: flex;
                gap: 2rem;

                ${BREAK_POINTS.MOBILE} {
                  display: block;
                }
              `}
            >
              {data &&
                data.map((article: newsLetterProps["article"]) => {
                  return (
                    <NewsCard article={article} key={article.originalLink} />
                  );
                })}
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
}
