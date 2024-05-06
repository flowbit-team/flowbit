/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetChartDataQuery } from "@/api/chartApi";
import { Chart as ChartLib, ChartType } from "@/lib/Chart";
import { css } from "@emotion/react";
import { useEffect } from "react";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable";
import Bitcoin from "@/assets/Bitcoin.svg";
import DownArrow from "@/assets/down-arrow.svg";

const setChart = (chartData: ChartType) => {
  const chart = new ChartLib(chartData);

  chart.render();
};

// Chart 컴포넌트
export default function Chart() {
  // 차트 데이터 가지고 오기
  const getChartDataResponse = useGetChartDataQuery();

  useEffect(() => {
    // 차트에 데이터 적용
    if (getChartDataResponse.isSuccess) {
      setChart(getChartDataResponse.data);
    }
  }, [getChartDataResponse.isSuccess, getChartDataResponse.data]);

  return (
    <div>
      {/* Header */}
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 1.6rem;
          padding-left: 2rem;
        `}
      >
        {/* Icon */}
        <img src={Bitcoin} alt="" />
        {/* Title */}
        <span
          css={css`
            ${DESIGN_SYSTEM_TEXT.T1}
            color: #323743;
          `}
        >
          비트코인
        </span>
        {/* Number */}
        <span
          css={css`
            ${DESIGN_SYSTEM_TEXT.S1}
            color: ${DESIGN_SYSTEM_COLOR.GRAY_700};
          `}
        >
          53,425,000 KWR
        </span>
        {/* Icon */}
        <img src={DownArrow} alt="" />
      </div>
      {/* Chart */}
      {getChartDataResponse.isSuccess && (
        <div
          id="chart"
          css={css`
            width: 1116px;
            position: relative;
          `}
        ></div>
      )}
    </div>
  );
}
