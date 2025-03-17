import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useApiTotalView = () => {
  const retrieveTotalView = async () => {
    const response = await api.get("/user-service/api/v1/visitor/total-view");
    return response.data;
  };

  return useQuery({
    queryKey: ['totalVisitors'],
    queryFn: () => retrieveTotalView(),
    staleTime: 60000 * 60 * 2, // 2시간
    gcTime: 60000 * 60 * 2, // 2시간
  });
};
