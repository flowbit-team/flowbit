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

export function UseInfiniteApiNewLetter(
  search: string,
  sort: string,
  searchWord: string,
) {
  const getNewsLetter = async ({ pageParam }: { pageParam: number }) => {
    const scaledSearch: { [key: string]: string } = {
      전체: "",
      리플: "리플",
      비트코인: "비트코인",
      이더리움: "이더리움",
    };
    const scaledOrder: { [key: string]: string } = {
      최신순: "createdAt,newsViewCount",
      인기순: "newsViewCount,desc",
    };

    return await api
      .get(
        `/board-service/api/v1/news?page=${pageParam}&size=${20}&searchword=${searchWord}&sort=${scaledOrder[sort]}&tag=${scaledSearch[search]}`,
      )
      .then((res) => res.data?.data as GetPostType);
  };

  return useInfiniteQuery({
    queryKey: ["newsletterInfinite", search, sort, searchWord],
    queryFn: ({ pageParam }) => getNewsLetter({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: GetPostType) => {
      if (lastPage.last) return undefined;
      if (lastPage) return lastPage.number + 1;
    },
  });
}
