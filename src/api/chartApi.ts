import { ChartDataType, ChartType } from "@/lib/Chart";
import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "./QueryKey";
import { api } from ".";

export interface IChartDataResponse {
  datas: {
    datas: number[]; // 차트에 들어가는 데이터 리스트
    label: string; // 데이터 리스트의 라벨 // 추후 legend로 이름 변경 필요
  }[];
  label: string[]; // x축에 들어가는 라벨
  max: number; // 차트의 최대 값
  min: number; // 차트의 최소 값
}

// 서버로부터 넘어온 차트 데이터 규격을 차트 라이브러리에서 요구하는 형태로 변경
export function chartDataParser(
  chartDataResponse: IChartDataResponse
): ChartType {
  const chartData: ChartType = {
    targetId: 'chart',
      size: {
        width: 1116,
        height: 652,
        font: 14,
      },
      datas: [],
      labels: [],
      zoom: true,
      showDataCount: 14,
      showLabelCount: 8,
  };
  const datas: ChartDataType[] = [];

  chartDataResponse.datas.forEach((element, i) => {
    let data: ChartDataType;

    if (i === 0) {
      // 실제 가격 차트
      data = {
        label: element.label,
        data: element.datas,
        width: 2,
        color: '#0056CA',
        min: chartDataResponse.min,
        max: chartDataResponse.max,
        drawMode: 'area',
        areaColor: 'rgba(0, 86, 202, .7)'
      };
    } else {
      // 예측 가격 차트
      data = {
        label: element.label,
        data: element.datas,
        width: 2,
        color: '#00285D',
        min: chartDataResponse.min,
        max: chartDataResponse.max,
        drawMode: 'dotted',
        areaColor: 'rgba(228, 75, 121, 0.16)'
      };
    }
    datas.push(data);
  });

  chartData.datas = datas;
  chartData.labels = chartDataResponse.label;

  return chartData;
}

export function useGetChartDataQuery() {
  const response = useQuery({
    queryKey: [QueryKey.CHART],
    queryFn: () => {
      return api.get('/bitcoin-service/get_all_chart');
    },
    select(data) {
      return chartDataParser(data.data);
    },
    staleTime: 60000 * 60 * 2, // 2시간
    gcTime: 60000 * 60 * 2, // 2시간
  });

  return response;
}