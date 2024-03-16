import { css } from "@emotion/react";
import { Fragment } from "react";

export default function FitNess() {
  return (
    <article
      css={css`
        position: relative;
        width: 355px;
        height: 218px;
        background: var(--gray50, #fafafa);
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          position: absolute;
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="284"
          height="143"
          viewBox="0 0 284 143"
          fill="none"
        >
          <path
            d="M280.492 142.298C282.453 142.298 284.048 140.705 283.999 138.741C283.563 121.266 279.916 104.011 273.231 87.8427C266.093 70.5784 255.63 54.8916 242.44 41.678C229.25 28.4645 213.591 17.9829 196.358 10.8318C179.124 3.68064 160.653 -8.16826e-07 142 0C123.347 8.16826e-07 104.876 3.68064 87.6424 10.8318C70.4089 17.9829 54.7502 28.4645 41.5602 41.678C28.3703 54.8916 17.9075 70.5784 10.7691 87.8427C4.08403 104.011 0.437256 121.266 0.00110096 138.741C-0.0479221 140.705 1.54659 142.298 3.5078 142.298C5.46901 142.298 7.054 140.705 7.10561 138.741C7.54018 122.201 11.0025 105.87 17.3307 90.5655C24.1121 74.1643 34.0518 59.2619 46.5822 46.709C59.1127 34.1561 73.9884 24.1986 90.3603 17.4051C106.732 10.6115 124.279 7.11489 142 7.11489C159.721 7.11489 177.268 10.6115 193.64 17.4051C210.012 24.1986 224.887 34.1561 237.418 46.709C249.948 59.2619 259.888 74.1643 266.669 90.5655C272.997 105.87 276.46 122.201 276.894 138.741C276.946 140.705 278.531 142.298 280.492 142.298Z"
            fill="url(#paint0_linear_2634_14355)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2634_14355"
              x1="0"
              y1="142.298"
              x2="284"
              y2="142.298"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0056CA" stopOpacity="0.16" />
              <stop offset="1" stopColor="#0056CA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        css={css`
          position: absolute;

          &:before {
            content: "";
            display: block;
            position: absolute;
            top: 7%;
            left: 50%;
            width: 15px;
            height: 15px;
            margin-left: -5px;
            border-left: 1px solid #ddd;
            border-top: 1px solid #ddd;
            background-color: #fff;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            transform: rotate(45deg);
          }
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="236"
          height="128"
          viewBox="0 0 236 128"
          fill="none"
        >
          <g filter="url(#filter0_d_2634_14357)">
            <path
              d="M225.53 125.119C225.53 96.5376 214.177 69.1271 193.967 48.9172C173.757 28.7073 146.346 17.3535 117.765 17.3535C89.1841 17.3535 61.7736 28.7073 41.5637 48.9172C21.3538 69.1271 10 96.5376 10 125.119L117.765 125.119H225.53Z"
              fill="url(#paint0_linear_2634_14357)"
              shapeRendering="crispEdges"
              id="curve"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_2634_14357"
              x="0.473793"
              y="0.682654"
              width="234.583"
              height="126.818"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="-7.14465" />
              <feGaussianBlur stdDeviation="4.7631" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.337255 0 0 0 0 0.792157 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2634_14357"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2634_14357"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_2634_14357"
              x1="117.765"
              y1="17.3535"
              x2="117.765"
              y2="125.119"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.785" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text width="500" css={css``}>
            <textPath xlinkHref="#curve">Dangerous Curves Ahead</textPath>
          </text>
        </svg>
      </div>
      <div
        css={css`
          position: absolute;
        `}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="18"
          viewBox="0 0 28 24"
          fill="none"
          xlinkHref="#curve"
        >
          <path
            d="M27.4257 0.244285L13.1306 23.2711L0.383117 2.05665L27.4257 0.244285Z"
            fill="#717C8B"
          />
        </svg> */}
        {/* <svg viewBox="0 0 180 90" width="100%" height="180px" css={css``}>
          <rect
            className="dial"
            x="90"
            y="30"
            width="3"
            height="10"
            rx="1"
            stroke="purple"
            fill="white"
          ></rect>
          <path
            d="M13.1389 0.453125L25.5138 24.5663H0.764013L13.1389 0.453125Z"
            fill="#717C8B"
            width="3"
            height="10"
            x="90"
            y="30"
          />
        </svg> */}
      </div>
    </article>
  );
}
