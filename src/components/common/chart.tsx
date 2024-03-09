/* eslint-disable @typescript-eslint/no-unused-vars */
import { chartDataParser } from "@/api/chartApi";
import { testData } from "@/api/testData";
import { Chart, ChartType } from "@/lib/Chart";
import { css } from "@emotion/react";
import { useEffect } from "react";

const setChart = (chartData: ChartType) => {
  const chart = new Chart(chartData);

  chart.render();
};

// Chart 컴포넌트
export default function ChartContainer({chartData}: {chartData: ChartType | null}) {

  useEffect(() => {
    // 차트가 생성될 div 태그 생성
    const chart = document.createElement('div');
    chart.style.width = '100%';
    chart.style.position = 'relative';
    chart.setAttribute('id', 'chart');

    document.getElementById('chartContainer')?.appendChild(chart);

    // TODO 추후 API 연동될 시 react query를 사용해 데이터 연동
    if(!chartData) setChart(chartDataParser(testData));
    else setChart(chartData);

    // useEffect가 두 번 호출 되면 차트가 두개 그려지므로 기존에 있는 차트 삭제
    return () => {
      document.getElementById('chart')?.remove();
    }
  }, [chartData]);

  return (
    <>
      <div
        css={css`
        width: 1116px;
      `}
      id="chartContainer">
        <div id="chart"
        css={css`
          width: 1116px;
          position: relative;
        `}
        ></div>
      </div>
    </>
  )
}