import { css } from "@emotion/react";
import LEFTARROW from "@/assets/left-arrow.svg";
import RIGHTARROW from "@/assets/right-arrow.svg";
import BG1 from "@/assets/bg.png";
import {
  BREAK_POINTS,
  DESIGN_SYSTEM_COLOR,
  DESIGN_SYSTEM_TEXT,
} from "@/style/variable";
import { useEffect, useRef, useState } from "react";

const AnimationFrames = [
  {
    background: BG1,
    titles: ["함께 성장하는 요즘 사람들의", "코인 뉴스레터"],
    subtitles: [
      "트렌드, 테크, 경제, 미디어 등 알차고 재밌는 소식을",
      "전달드립니다.",
    ],
  },
  {
    background: BG1,
    titles: ["함께 성장하는 요즘 사람들의", "리플!!! 뉴스레터"],
    subtitles: [
      "트렌드, 테크, 경제, 미디어 등 알차고 재밌는 소식을",
      "전달드립니다.",
    ],
  },
  {
    background: BG1,
    titles: ["배고픈 요즘 사람들의", "비트코인 도박 뉴스레터"],
    subtitles: [
      "트렌드, 테크, 경제, 미디어 등 알차고 재밌는 소식을",
      "전달드립니다.",
    ],
  },
];

export default function Carousel() {
  const [page, setPage] = useState(0);
  const interval = useRef(0);

  const animation = () => {
    return setInterval(() => {
      setPage((prev) => (prev + 1) % AnimationFrames.length);
    }, 5000);
  };

  useEffect(() => {
    interval.current = animation();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const handleLeftBtn = () => {
    setPage(
      (prev) => (prev - 1 + AnimationFrames.length) % AnimationFrames.length,
    );
    clearInterval(interval.current);
    interval.current = animation();
  };

  const handleRightBtn = () => {
    setPage((prev) => (prev + 1) % AnimationFrames.length);
    clearInterval(interval.current);
    interval.current = animation();
  };

  return (
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <div
        css={css`
          display: flex;
          position: relative;
          width: 100%;
          height: 44rem;

          transform: translateX(-${page * 100}%);
          transition: transform 0.5s ease-in-out;
        `}
      >
        {AnimationFrames.map(({ background, titles, subtitles }, index) => {
          return (
            <>
              <div
                css={css`
                  position: absolute;
                  width: 100%;
                  height: 100%;

                  top: 0;
                  left: 0;

                  transform: translateX(${index * 100}%);
                `}
              >
                {/* Background Img */}
                <div>
                  <img
                    css={css`
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: 100%;
                      object-fit: cover;

                      z-index: -1;
                    `}
                    src={background}
                    alt=""
                  />
                </div>
                {/* CONTENT */}
                <div
                  css={css`
                    max-width: 112.5rem;

                    ${BREAK_POINTS.TABLET} {
                      max-width: 72.7rem;
                    }

                    ${BREAK_POINTS.MOBILE} {
                      max-width: 36rem;
                      justify-content: end;
                      padding-bottom: 4.5rem;
                    }

                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  `}
                >
                  {/* TITLE */}
                  <div
                    css={css`
                      & h1 {
                        ${DESIGN_SYSTEM_TEXT.E4}
                        color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
                        line-height: 5.6rem;
                        margin: 0;

                        ${BREAK_POINTS.TABLET} {
                          ${DESIGN_SYSTEM_TEXT.T4}
                          line-height: 3.2rem;
                        }
                      }
                    `}
                  >
                    {titles.map((title) => (
                      <h1>{title}</h1>
                    ))}
                  </div>
                  {/* SUB TEXT */}
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      margin-top: 0.8rem;
                      margin-bottom: 1.6rem;

                      & span {
                        ${DESIGN_SYSTEM_TEXT.B1}
                        color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
                      }
                    `}
                  >
                    {subtitles.map((subtitle) => (
                      <span>{subtitle}</span>
                    ))}
                  </div>
                  {/* INDICATOR */}
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      gap: 3rem;

                      & img {
                        cursor: pointer;
                        opacity: 0.3;

                        ${BREAK_POINTS.TABLET} {
                          display: none;
                        }
                      }

                      & img:hover {
                        opacity: 1;
                      }
                    `}
                  >
                    {/* LEFT ARROW */}
                    <img
                      src={LEFTARROW}
                      onClick={handleLeftBtn}
                      alt="left arrow"
                    />
                    {/* PAGE */}
                    <div
                      css={css`
                        ${DESIGN_SYSTEM_TEXT.B2}
                        color: #fff;

                        ${BREAK_POINTS.TABLET} {
                          display: none;
                        }
                      `}
                    >
                      {index + 1}/{AnimationFrames.length}
                    </div>
                    {/* BAR */}
                    <div
                      css={css`
                        position: relative;
                        width: 16rem;
                        height: 2px;
                        overflow: hidden;
                      `}
                    >
                      {/* BACKGROUND */}
                      <div
                        css={css`
                          top: 0;
                          left: 0;
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          background-color: #d9d9d9;
                          opacity: 0.3;
                        `}
                      ></div>
                      {/* PROGRESS */}
                      <div
                        css={css`
                          position: absolute;
                          top: 0;
                          left: 0;
                          width: ${((index + 1) / AnimationFrames.length) *
                          100}%;
                          height: 100%;
                          background-color: #fff;
                        `}
                      ></div>
                    </div>
                    {/* RIGHT ARROW */}
                    <img
                      src={RIGHTARROW}
                      alt="right arrow"
                      onClick={handleRightBtn}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
