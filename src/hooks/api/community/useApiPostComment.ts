import { api } from "@/api";
import { useMutation } from "@tanstack/react-query";

interface postCommentProps {
  boardId: number;
  content: string;
}

export const useApiPostComment = () => {
  const postComment = async ({ boardId, content }: postCommentProps) => {
    const res = await api.post(
      `/board-service/api/v1/board/comment`,
      {
        boardId,
        content,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    return res;
  };

  return useMutation({
    mutationFn: ({ boardId, content }: postCommentProps) =>
      postComment({ boardId, content }),
    onSuccess: () => {
      // alert('성공적으로 댓글이 등록되었어요');
    },
    onError: () => {
      alert("오류가 발생했어요, 관리자에게 문의해주세요");
    },
  });
};
