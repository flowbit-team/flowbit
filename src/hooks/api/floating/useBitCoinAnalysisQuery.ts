import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useBitCoinAnalysisQuery = () => {
  const getBitCoinAnalysis = async () => {
    const response = await api.get(
      "/bitcoin-service/get_chart_analysis?currency=BTC",
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["bitCoinAnalysis"],
    queryFn: () => getBitCoinAnalysis(),
    gcTime: 60000 * 60 * 2, // 2시간
  });
};
