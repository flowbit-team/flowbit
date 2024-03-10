import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function UseApiNewLetter() {
  const getNewsLetter = async () => {
    return await api
      .get(`/board-service/api/v1/news?sort=createdAt&page=0&size=3`)
      .then((res) => res.data.data.content);
  };

  return useQuery({
    queryKey: ["newsletter"],
    queryFn: getNewsLetter,
  });
}
