import { useQuery } from "@tanstack/react-query";
import { QueryKey } from "./QueryKey";
import { api } from ".";
import { chartDataParser } from "@/utils/chartDataParser";

export interface IChartDataResponse {
  datas: {
    datas: number[]; // 차트에 들어가는 데이터 리스트
    label: string; // 데이터 리스트의 라벨 // 추후 legend로 이름 변경 필요
  }[];
  label: string[]; // x축에 들어가는 라벨
  max: number; // 차트의 최대 값
  min: number; // 차트의 최소 값
}

export function useGetChartDataQuery() {
  const getAllChart = async () => {
    return api.
      get('/bitcoin-service/get_all_chart');
  }

  return useQuery({
    queryKey: [QueryKey.CHART],
    queryFn: getAllChart,
    select(data) {
      return chartDataParser(data.data);
    },
    staleTime: 60000 * 60 * 2, // 2시간
    gcTime: 60000 * 60 * 2, // 2시간
  });
}