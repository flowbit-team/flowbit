import { api } from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useApiPostLike = () => {
  const updateLike = async (boardId: number) => {
    const res = await api.get(`/board-service/api/v1/board/like?boardId=${boardId}`);

    return res;
  }

  return useMutation({
    mutationFn: (boardId: number) => (updateLike(boardId)),
    onSuccess: () => {

    },
    onError: () => {
      alert('오류가 발생했어요, 관리자에게 문의해주세요');
    }
  })
}