import { api } from "@/api";
import { CommunityBoardType, CommunityPageType, } from "@/components/app/community/type";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GetPostType } from "../newsletter/useApiNewLetter.ts";
export type getCommunityBoardResType = CommunityPageType & {
    content: CommunityBoardType[];
};
export type ApiCommunityProps = {
    page: string;
    size: string;
    sort: string;
    category: string;
    searchWord: string;
};
/**
* @description Press Your { Function UseApiCommunity } Description
* @param {ApiCommunityProps} props
* @returns {void}
*/
function UseApiCommunity(props: ApiCommunityProps) {
    /**
    * @description Press Your { Function getCommunityBoard } Description
    * @param {ApiCommunityProps} props
    * @returns {void}
    */
    const getCommunityBoard = async (props: ApiCommunityProps) => {
        const { page, size, sort, category, searchWord } = props;
        const param = [page, size, sort, category, searchWord].reduce((acc, value) => acc + value, "?");
        return await api
            .get(`/board-service/api/v1/board${param}`)
            .then((res) => res.data.data as getCommunityBoardResType);
    };
    return useQuery({
        queryKey: ["community", props],
        queryFn: () => {
            return getCommunityBoard(props);
        },
    });
}
/**
* @description Press Your { Function UseInfiniteApiCommunity } Description
* @param {{
  sort: string;
  searchWord: string;
  category: string;
}} {
  sort,
  searchWord,
  category,
}
* @returns {void}
*/
function UseInfiniteApiCommunity({ sort, searchWord, category, }: {
    sort: string;
    searchWord: string;
    category: string;
}) {
    /**
    * @description Press Your { Function getCommunityBoard } Description
    * @param {{
            pageParam: number;
        }} { pageParam }
    * @returns {void}
    */
    const getCommunityBoard = async ({ pageParam }: {
        pageParam: number;
    }) => {
        return await api
            .get(`/board-service/api/v1/board?page=${pageParam}&size=${10}${sort}${category}${searchWord}`)
            .then((res) => res.data?.data as GetPostType);
    };
    return useInfiniteQuery({
        queryKey: ["community", category, searchWord, sort],
        queryFn: ({ pageParam }) => getCommunityBoard({ pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage: GetPostType) => {
            if (lastPage.last)
                return undefined;
            if (lastPage)
                return lastPage.number + 1;
        },
    });
}
export { UseApiCommunity, UseInfiniteApiCommunity };
