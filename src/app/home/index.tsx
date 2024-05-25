import Button from "@/components/common/Button";
import Lottie from "lottie-react";
import { DESIGN_SYSTEM_COLOR } from "@/style/variable";
import { css } from "@emotion/react";
import { numberWithCommas } from "@/utils/util";
import BitImg from "@/assets/blue_bit.svg";
import EtherImg from "@/assets/blue_ether.svg";
import RippleImg from "@/assets/blue_rip.svg";
import Chart1 from "@/assets/chart1.svg";
import Chart2 from "@/assets/chart2.svg";
import Chart3 from "@/assets/chart3.svg";
import NewletterAni from "@/assets/newletter.json";
import CommunityAni from "@/assets/community.json";

export default function HomePage() {
  return (
    <article
      css={css`
        max-width: 111.6rem;
        margin: 0 auto;
        padding-top: 9.8rem;
      `}
    >
      {/* 메인 화면 */}
      <section>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          {/* LEFT SIDE */}
          <div>
            <h1
              css={css`
                font-size: 4.8rem;
                line-height: 7.2rem;
              `}
            >
              데이터 속 예측력, <br />
              LSTM과 GPT가 선사하는 <br />
              비트코인 추세 예측 <br />
            </h1>
            <div
              css={css`
                display: flex;
                gap: 1.6rem;
              `}
            >
              <Button
                css={css`
                  width: 11.4rem;
                  height: 4.3rem;

                  ${DESIGN_SYSTEM_COLOR.GRAY_50}
                  font-size: 1.6rem;
                  font-weight: normal;
                `}
              >
                Get Started
              </Button>
              <Button
                css={css`
                  width: 8rem;
                  height: 4.3rem;

                  font-size: 1.6rem;
                  font-weight: normal;

                  color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
                  background-color: white;
                  border: 1px solid ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
                `}
              >
                Sign in
              </Button>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div
            css={css`
              width: 54.6rem;

              & .card {
                width: 100%;
                padding: 2.8rem;
                border-radius: 1.6rem;
                border: 1px solid ${DESIGN_SYSTEM_COLOR.BLUEGRAY_100};
                background-color: rgba(249, 251, 255, 1);

                & .card-item {
                  width: 100%;
                  display: flex;
                  gap: 1.6rem;
                  align-items: center;
                  margin-bottom: 2rem;
                  padding-bottom: 2rem;
                  border-bottom: 1px solid #d4d7dc;

                  & .money {
                    font-size: 2rem;
                    color: #0056ca;
                    line-height: 3rem;
                    font-weight: bold;
                    padding-right: 0.5rem;
                  }

                  & .unit {
                    font-size: 1.2rem;
                    font-weight: 400;
                    padding-bottom: 0.5rem;
                    color: ${DESIGN_SYSTEM_COLOR.GRAY_800};
                  }

                  & .percent {
                    font-size: 1.6rem;
                    font-weight: bold;
                  }

                  & .percent.green {
                    color: ${DESIGN_SYSTEM_COLOR.GREEN_500};
                  }

                  & .percent.red {
                    color: ${DESIGN_SYSTEM_COLOR.RED_500};
                  }
                }

                & .card-item:last-child {
                  border: none;
                  margin: 0;
                  padding: 0;
                }

                & .badge {
                }
              }
            `}
          >
            {/* TOP */}
            <div className="card">
              {/* 비트코인 */}
              <div className="card-item">
                {/* 이미지 */}
                <img src={BitImg} alt="Logo Img" />
                <div
                  css={css`
                    width: 15rem;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                  `}
                >
                  {/* 돈 */}
                  <span className="money">{numberWithCommas(90666000)}</span>
                  {/* 단위 */}
                  <span className="unit">KRW</span>
                </div>
                {/* 상승률 */}
                <span className="percent green">+ 4.62%</span>
                {/* 차트 */}
                <div>
                  <img src={Chart1} alt="" />
                </div>
              </div>
              {/* 이더리움 */}
              <div className="card-item">
                {/* 이미지 */}
                <img src={EtherImg} alt="Logo Img" />
                <div
                  css={css`
                    width: 15rem;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                  `}
                >
                  {/* 돈 */}
                  <span className="money">{numberWithCommas(4879000)}</span>
                  {/* 단위 */}
                  <span className="unit">KRW</span>
                </div>
                {/* 상승률 */}
                <span className="percent green">+ 4.62%</span>
                {/* 차트 */}
                <div>
                  <img src={Chart2} alt="" />
                </div>
              </div>
              {/* 리플 */}
              <div className="card-item last">
                {/* 이미지 */}
                <img src={RippleImg} alt="Logo Img" />
                <div
                  css={css`
                    width: 15rem;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                  `}
                >
                  {/* 돈 */}
                  <span className="money">{numberWithCommas(913)}</span>
                  {/* 단위 */}
                  <span className="unit">KRW</span>
                </div>
                {/* 상승률 */}
                <span className="percent red">+ 4.62%</span>
                {/* 차트 */}
                <div>
                  <img src={Chart3} alt="" />
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div
              css={css`
                display: flex;
                margin-top: 2.2rem;
                gap: 2rem;
              `}
            >
              {/* 뉴스레타 로티 */}
              <div className="card">
                {/* 뱃지 */}
                <div className="badge">뉴스레터</div>
                <Lottie animationData={NewletterAni} />
              </div>
              {/* 코멘트 로티 */}
              <div className="card">
                <div className="badge">커뮤니티</div>
                <Lottie animationData={CommunityAni} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 이미지 */}
      <section></section>
    </article>
  );
}
