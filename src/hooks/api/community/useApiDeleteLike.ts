import { api } from "@/api";
import { useMutation } from "@tanstack/react-query";

export const useApiDeleteLike = () => {
  const updateLike = async (boardId: number) => {
    const res = await api.delete(`/board-service/api/v1/board/like?boardId=${boardId}`);

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