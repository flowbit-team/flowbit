import Button from "@/components/common/Button";
import Lottie from "lottie-react";
import { BREAK_POINTS, DESIGN_SYSTEM_COLOR } from "@/style/variable";
import { css } from "@emotion/react";
import {
  COMMUNITY_URL,
  NEWS_LETTER_URL,
  PREDICT_URL,
  numberWithCommas,
} from "@/utils/util";
import BitImg from "@/assets/blue_bit.svg";
import EtherImg from "@/assets/blue_ether.svg";
import RippleImg from "@/assets/blue_rip.svg";
import Chart1 from "@/assets/chart1.svg";
import MOBILE_CHART1 from "@/assets/mobile_chart1.svg";
import MOBILE_CHART2 from "@/assets/mobile_chart2.svg";
import MOBILE_CHART3 from "@/assets/mobile_chart3.svg";
import Chart2 from "@/assets/chart2.svg";
import Chart3 from "@/assets/chart3.svg";
import MAINBOTTOMIMG from "@/assets/main-bottom.gif";
import NewletterAni from "@/assets/newletter.json";
import CommunityAni from "@/assets/community.json";
import BlackEtherImg from "@/assets/black_ether.svg";
import SkyblueLImg from "@/assets/skyblue_L.svg";
import GreenBitImg from "@/assets/green_bit.svg";
import YellowBitImg from "@/assets/yellow_bit.svg";
import OrangeBitImg from "@/assets/orange_bit.svg";
import { useGetChartDataQuery } from "@/api/chartApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal.ts";
import { SubscriptionModalContent } from "@/components/common/modal/SubscriptionModalContent";
import { useAtom } from "jotai";
import { loginState } from "@/store/user";

type CoinInfoType = {
  [coin in "BTC" | "ETH" | "XRP"]: {
    price: number; // 가격
    persent: number; // 상승률 혹은 하락률
    datas: unknown[]; // 그래프 데이터
  };
};

export default function HomePage() {
  // 차트 데이터 가지고 오기
  const getBTCData = useGetChartDataQuery("BTC");
  const getETHData = useGetChartDataQuery("ETH");
  const getXRPData = useGetChartDataQuery("XRP");

  const [coinInfo, setCoinInfo] = useState<CoinInfoType>();
  const [isLogin, _] = useAtom(loginState);
  const { open, close } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getBTCData.isSuccess || !getETHData.isSuccess || !getXRPData.isSuccess)
      return;

    // get BTC, 0번째 인덱스는 항상 실제 BTC로 가정해야 한다.
    let lastIndex = getBTCData.data?.datas[0].data.length - 1;
    const btcPrice = getBTCData.data?.datas[0].data[lastIndex];
    const prevBtcPrice = getBTCData.data?.datas[0].data[lastIndex - 1];

    // get ETH
    lastIndex = getETHData.data?.datas[0].data.length - 1;
    const ethPrice = getETHData.data?.datas[0].data[lastIndex];
    const prevEthPrice = getETHData.data?.datas[0].data[lastIndex - 1];

    // get XRP
    lastIndex = getXRPData.data?.datas[0].data.length - 1;
    const xrpPrice = getXRPData.data?.datas[0].data[lastIndex];
    const prevXrpPrice = getXRPData.data?.datas[0].data[lastIndex - 1];

    setCoinInfo({
      BTC: {
        price: btcPrice,
        datas: getBTCData.data?.datas,
        persent: ((btcPrice - prevBtcPrice) / prevBtcPrice) * 100,
      },
      ETH: {
        price: ethPrice,
        datas: getETHData.data?.datas,
        persent: ((ethPrice - prevEthPrice) / prevEthPrice) * 100,
      },
      XRP: {
        price: xrpPrice,
        datas: getXRPData.data?.datas,
        persent: ((xrpPrice - prevXrpPrice) / prevXrpPrice) * 100,
      },
    });
  }, [
    getBTCData.data?.datas,
    getBTCData.isSuccess,
    getETHData.data?.datas,
    getETHData.isSuccess,
    getXRPData.data?.datas,
    getXRPData.isSuccess,
  ]);

  /**
   * @description 로그인이 되어있는지 되어있지 않는지에 대한 판별 여부를 확인하는 함수입니다.
   */
  const validateLoginState = () => {
    if (isLogin) {
      navigate(COMMUNITY_URL);
    } else {
      open({
        title: "로그인을 먼저 진행해주세요",
        content:
          "플로우빗 커뮤니티 기능은 회원을 위한 기능입니다.\n원활한 서비스 이용을 위해 로그인을 먼저 진행해주세요",
        callBack: () => {
          close();
          navigate("/signin");
        },
      });
    }
  };

  /**
   * @description 구독버튼 클릭시 flowbit서비스에 대해 주기적으로 구독할 수 있는 함수입니다.
   */
  const openSubscriptionModal = () => {
    open({
      title: "구독 설정",
      content: <SubscriptionModalContent />,
      isVisibleBtn: false,
    });
  };

  return (
    <article
      css={css`
        max-width: 112rem;
        margin: 0 auto;
        padding-top: 9.8rem;

        ${BREAK_POINTS.TABLET} {
          max-width: 72.7rem;
          margin: 0 auto;
          padding-top: 9.8rem;
        }

        ${BREAK_POINTS.MOBILE} {
          max-width: 32rem;
          margin: 0 auto;
          padding-top: 9.8rem;
        }
      `}
    >
      {/* 메인 화면 */}
      <section>
        <div
          css={css`
            display: flex;
            justify-content: space-between;

            ${BREAK_POINTS.TABLET} {
              flex-direction: column;
            }

            ${BREAK_POINTS.MOBILE} {
              flex-direction: column;
            }
          `}
        >
          {/* LEFT SIDE */}
          <div>
            <div
              css={css`
                position: relative;
                width: 31.5rem;
                height: 4rem;
                padding: 0px;
                background: #2f3b4b;
                color: #ffffff;
                border-radius: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;

                &::after {
                  content: "";
                  position: absolute;
                  width: 22px;
                  height: 20px;
                  background: #2f3b4b;
                  clip-path: path("M0,0 L22,0 L13,16 Q11,20 9,16 L0,0");
                  display: block;
                  z-index: 1;
                  margin-left: -2.6rem;
                  bottom: -1rem;
                  left: 13%;
                }

                ${BREAK_POINTS.TABLET} {
                }

                ${BREAK_POINTS.MOBILE} {
                }
              `}
            >
              <p>
                <span
                  css={css`
                    color: #33c2ff;
                  `}
                >
                  {/* {totalVisit} */}
                  10,404,174
                </span>
                명이 플로우빗과 함께하고 있어요
              </p>
            </div>
            <h1
              css={css`
                font-size: 4.8rem;
                line-height: 7.2rem;
                margin-top: 20px;

                ${BREAK_POINTS.TABLET} {
                }
                ${BREAK_POINTS.MOBILE} {
                  font-size: 2.4rem;
                  line-height: 3.6rem;
                }
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

                ${BREAK_POINTS.TABLET} {
                }
                ${BREAK_POINTS.MOBILE} {
                  margin-top: 4rem;
                }
              `}
            >
              <Button
                css={css`
                  width: 11.4rem !important;
                  height: 4.5rem;

                  ${DESIGN_SYSTEM_COLOR.GRAY_50}
                  font-size: 1.6rem;
                  font-weight: normal;
                `}
                onClick={() => {
                  navigate("/predict");
                }}
              >
                시작하기
              </Button>
              <Button
                css={css`
                  width: 11.4rem !important;
                  height: 4.5rem;

                  font-size: 1.6rem;
                  font-weight: normal;

                  color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
                  background-color: white;
                  border: 1px solid ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
                `}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                회원가입
              </Button>
              <Button
                css={css`
                  width: 11.4rem !important;
                  height: 4.5rem;

                  ${DESIGN_SYSTEM_COLOR.GRAY_50}
                  font-size: 1.6rem;
                  font-weight: normal;
                `}
                onClick={openSubscriptionModal}
              >
                구독하기
              </Button>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div
            css={css`
              width: 54.6rem;

              ${BREAK_POINTS.TABLET} {
                margin-top: 6.4rem;
                width: 100%;
              }
              ${BREAK_POINTS.MOBILE} {
                margin-top: 4rem;
                width: 100%;
              }

              & .card {
                width: 100%;
                padding: 2.8rem;
                border-radius: 1.6rem;
                border: 1px solid ${DESIGN_SYSTEM_COLOR.BLUEGRAY_100};
                background-color: rgba(249, 251, 255, 1);
                position: relative;
                cursor: pointer;

                & .desktop {
                  display: initial;
                }

                & .tablet {
                  display: none;
                }

                ${BREAK_POINTS.TABLET} {
                  & .desktop {
                    display: none;
                  }

                  & .tablet {
                    display: initial;
                  }
                }

                ${BREAK_POINTS.MOBILE} {
                  & .desktop {
                    display: none;
                  }

                  & .tablet {
                    display: none;
                  }

                  & .char-logo {
                    width: 3.2rem;
                    height: 3.2rem;
                  }
                }

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

                  ${BREAK_POINTS.MOBILE} {
                    & .money {
                      font-size: 1.6rem;
                    }

                    & .percent {
                      font-size: 1.2rem;
                    }
                  }
                }

                & .card-item:last-child {
                  border: none;
                  margin: 0;
                  padding: 0;
                }

                & .badge {
                  display: inline-block;
                  background-color: #2f3b4b;
                  padding: 8px 12px;
                  margin-bottom: 2.4rem;

                  font-size: 1.6rem;
                  font-weight: bold;
                  color: white;

                  border-radius: 24px;
                }
              }
            `}
          >
            {/* TOP */}
            <div className="card">
              {/* 비트코인 */}
              <div className="card-item" onClick={() => navigate(PREDICT_URL)}>
                {/* 이미지 */}
                <img className="char-logo" src={BitImg} alt="Logo Img" />
                <div
                  css={css`
                    width: 15rem;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                  `}
                >
                  {/* 돈 */}
                  <span className="money">
                    {numberWithCommas(coinInfo?.BTC.price || 0)}
                  </span>
                  {/* 단위 */}
                  <span className="unit">KRW</span>
                </div>
                {/* 상승률 */}
                {coinInfo?.BTC.persent && coinInfo?.BTC.persent > 0 ? (
                  <span className="percent green">
                    + {coinInfo?.BTC.persent.toFixed(2)}%
                  </span>
                ) : (
                  <span className="percent red">
                    - {Math.abs(Number(coinInfo?.BTC.persent.toFixed(2)))}%
                  </span>
                )}
                {/* 차트 */}
                <div className="desktop">
                  <img src={Chart1} alt="" />
                </div>
                <div className="tablet">
                  <img src={MOBILE_CHART1} alt="" />
                </div>
              </div>
              {/* 이더리움 */}
              <div className="card-item" onClick={() => navigate(PREDICT_URL)}>
                {/* 이미지 */}
                <img className="char-logo" src={EtherImg} alt="Logo Img" />
                <div
                  css={css`
                    width: 15rem;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                  `}
                >
                  {/* 돈 */}
                  <span className="money">
                    {numberWithCommas(coinInfo?.ETH.price || 0)}
                  </span>
                  {/* 단위 */}
                  <span className="unit">KRW</span>
                </div>
                {/* 상승률 */}
                {coinInfo?.ETH.persent && coinInfo?.ETH.persent > 0 ? (
                  <span className="percent green">
                    + {coinInfo?.ETH.persent.toFixed(2)}%
                  </span>
                ) : (
                  <span className="percent red">
                    - {Math.abs(Number(coinInfo?.ETH.persent.toFixed(2)))}%
                  </span>
                )}
                {/* 차트 */}
                <div className="desktop">
                  <img src={Chart2} alt="" />
                </div>
                <div className="tablet">
                  <img src={MOBILE_CHART2} alt="" />
                </div>
              </div>
              {/* 리플 */}
              <div
                className="card-item last"
                onClick={() => navigate(PREDICT_URL)}
              >
                {/* 이미지 */}
                <img className="char-logo" src={RippleImg} alt="Logo Img" />
                <div
                  css={css`
                    width: 15rem;
                    display: flex;
                    justify-content: end;
                    align-items: end;
                  `}
                >
                  {/* 돈 */}
                  <span className="money">
                    {numberWithCommas(coinInfo?.XRP.price || 0)}
                  </span>
                  {/* 단위 */}
                  <span className="unit">KRW</span>
                </div>
                {/* 상승률 */}
                {coinInfo?.XRP.persent && coinInfo?.XRP.persent > 0 ? (
                  <span className="percent green">
                    + {coinInfo?.XRP.persent.toFixed(2)}%
                  </span>
                ) : (
                  <span className="percent red">
                    - {Math.abs(Number(coinInfo?.XRP.persent.toFixed(2)))}%
                  </span>
                )}
                {/* 차트 */}
                <div className="desktop">
                  <img src={Chart3} alt="" />
                </div>
                <div className="tablet">
                  <img src={MOBILE_CHART3} alt="" />
                </div>
              </div>
            </div>
            {/* BOTTOM */}
            <div
              css={css`
                display: flex;
                margin-top: 2.2rem;
                gap: 2rem;

                ${BREAK_POINTS.MOBILE} {
                  flex-direction: column;
                }
              `}
            >
              {/* 뉴스레타 로티 */}
              <div className="card" onClick={() => navigate(NEWS_LETTER_URL)}>
                <div className="badge">뉴스레터</div>
                <Lottie animationData={NewletterAni} loop={false} />
              </div>
              {/* 코멘트 로티 */}
              <div className="card" onClick={validateLoginState}>
                <div className="badge">커뮤니티</div>
                <Lottie animationData={CommunityAni} loop={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 이미지 */}
      <section
        css={css`
          margin-top: 5.4rem;
          width: 100%;
        `}
      >
        <img
          css={css`
            width: 100%;
            box-shadow:
              0 1px 3px 0 rgb(0 0 0 / 0.3),
              0 1px 2px -1px rgb(0 0 0 / 0.1);
            border-radius: 0.7rem;
            margin-bottom: 10rem;
          `}
          src={MAINBOTTOMIMG}
          alt=""
        />
      </section>
      {/* 하단 배너 */}
      <section>
        <div
          css={css`
            padding: 12rem 0;

            ${BREAK_POINTS.TABLET} {
              padding: 8rem 0;
            }

            ${BREAK_POINTS.MOBILE} {
              padding: 6rem 0;
            }
          `}
        >
          <div
            css={css`
              position: relative;
              width: 100%;
              height: 16.4rem;
              border-radius: 1.6rem;
              background-color: #0044a1;
              font-weight: 600;
              font-size: 2.8rem;
              line-height: 4.2rem;
              color: #ffffff;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              overflow: hidden;

              ${BREAK_POINTS.TABLET} {
                height: 14rem;
                font-size: 2.4rem;
                line-height: 3.6rem;
              }

              ${BREAK_POINTS.MOBILE} {
                height: 7.2rem;
                border-radius: 1rem;
                font-size: 1.2rem;
                line-height: 1.8rem;
              }
            `}
          >
            <p>
              <span
                css={css`
                  color: #79deff;
                `}
              >
                10,404,174
                {/* {totalVisit} */}
              </span>
              명의 회원이 플로우빗과 함께하고 있습니다.
              <br />
              지금 바로 시작하세요!
            </p>
            <img
              src={BlackEtherImg}
              css={css`
                position: absolute;
                bottom: 2px;
                left: 16%;
                
                ${BREAK_POINTS.TABLET} {
                  width: 7rem;
                }

                ${BREAK_POINTS.MOBILE} {
                  width: 3rem;
                }
              `}
            />
            <img
              src={SkyblueLImg}
              css={css`
                position: absolute;
                top: 20%;
                left: 6%;

                ${BREAK_POINTS.TABLET} {
                  left: 3%;
                  width: 6rem;
                }

                ${BREAK_POINTS.MOBILE} {
                  left: 2px;
                  top: 5%;
                  width: 3rem;
                }
              `}
            />
            <img
              src={GreenBitImg}
              css={css`
                position: absolute;
                top: 0px;
                left: 27%;

                ${BREAK_POINTS.TABLET} {
                  width: 4rem;
                }

                ${BREAK_POINTS.MOBILE} {
                  width: 3rem;
                }
              `}
            />
            <img
              src={YellowBitImg}
              css={css`
                position: absolute;
                top: 0px;
                left: 78%;

                ${BREAK_POINTS.TABLET} {
                  width: 8rem;
                }

                ${BREAK_POINTS.MOBILE} {
                  width: 5rem;
                }
              `}
            />
            <img
              src={OrangeBitImg}
              css={css`
                position: absolute;
                bottom: 0px;
                left: 82%;

                ${BREAK_POINTS.TABLET} {
                  width: 8rem;
                }

                ${BREAK_POINTS.MOBILE} {
                  width: 5rem;
                }
              `}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
