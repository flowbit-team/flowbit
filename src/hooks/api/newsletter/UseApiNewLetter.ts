import { api } from "@/api";
import { newsLetterProps } from "@/components/app/predict/newsletter/news-card";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface GetPostType {
  totalPages: number;
  totalElements: number;
  size: number;
  content: newsLetterProps["article"][] | [];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
export default function UseApiNewLetter() {
  const getNewsLetter = async () => {
    return await api
      .get(`/board-service/api/v1/news?sort=createdAt&page=0&size=3`)
      .then((res) => res.data.data.content as newsLetterProps["article"][]);
  };

  return useQuery({
    queryKey: ["newsletter"],
    queryFn: getNewsLetter,
  });
}

export function UseInfiniteApiNewLetter() {
  const getNewsLetter = async ({ pageParam }: { pageParam: number }) => {
    return await api
      .get(
        `/board-service/api/v1/news?sort=createdAt&page=${pageParam}&size=${6}`,
      )
      .then((res) => res.data.data as GetPostType);
  };

  return useInfiniteQuery({
    queryKey: ["newsletter"],
    queryFn: ({ pageParam }) => getNewsLetter({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: GetPostType) => {
      // if (lastPage.last) return undefined;
      return lastPage.number + 1;
    },
  });
}
