import { api } from "@/api";
import {
  CommunityBoardType,
  CommunityPageType,
} from "@/components/app/community/type";
import { useQuery } from "@tanstack/react-query";

export type getCommunityBoardResType = CommunityPageType & {
  content: CommunityBoardType[];
};

export type ApiCommunityProps = {
  page: number;
  size: number;
  sort?: string;
};

export default function UseApiCommunity(props: ApiCommunityProps) {
  const getCommunityBoard = async (props: ApiCommunityProps) => {
    const { page = 0, size = 10, sort = "" } = props;

    return await api
      .get(`/board-service/api/v1/board?page=${page}&size=${size}&${sort}`)
      .then((res) => res.data.data as getCommunityBoardResType);
  };

  return useQuery({
    queryKey: ["community", props],
    queryFn: () => {
      return getCommunityBoard(props);
    },
  });
}
