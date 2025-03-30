import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useApiTotalView = () => {
  const GetTotalView = async () => {
    const response = await api.get("/user-service/api/v1/visitor/total-view");
    return response.data;
  };

  const sendTotalView = async () => {
    const response = await api.post("/user-service/api/v1/visitor/total-view");
    return response.data;
  };

  return {
    ...useQuery({
    queryKey: ['totalVisitors'],
    queryFn: () => GetTotalView(),
    staleTime: 60000 * 60 * 2, // 2시간
    gcTime: 60000 * 60 * 2, // 2시간
  }),
  sendTotalView, // POST 요청 함수 반환
};
};
