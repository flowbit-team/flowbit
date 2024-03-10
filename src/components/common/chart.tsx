/* eslint-disable @typescript-eslint/no-unused-vars */
import { chartDataParser, useGetChartDataQuery } from "@/api/chartApi";
import { testData } from "@/api/testData";
import { Chart, ChartType } from "@/lib/Chart";
import { css } from "@emotion/react";
import { useEffect } from "react";

const setChart = (chartData: ChartType) => {
  const chart = new Chart(chartData);

  chart.render();
};

// Chart 컴포넌트
export default function ChartContainer() {

  // 차트 데이터 가지고 오기
  const getChartDataResponse = useGetChartDataQuery();

  useEffect(() => {
    // 차트에 데이터 적용
    if(getChartDataResponse.isSuccess) {
      setChart(getChartDataResponse.data);
    }

  }, [getChartDataResponse.isSuccess, getChartDataResponse.data]);

  return (
    <>
        {getChartDataResponse.isSuccess && (
          <div
            id="chart"
            css={css`
              width: 1116px;
              position: relative;
            `}
          ></div>
        )}
    </>
  );
}
