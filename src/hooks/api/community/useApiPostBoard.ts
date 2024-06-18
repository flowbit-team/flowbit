import { api } from "@/api";
import { useMutation } from "@tanstack/react-query";

interface postBoardProps {
  title: string;
  content: string;
  boardCategory: string;
  pictures: string[];
  boardTags: string[];
}
export const useApiPostBoard = () => {
  const postBoard = async ({
    title,
    content,
    boardCategory,
    pictures,
    boardTags,
  }: postBoardProps) => {
    const form = new FormData();
    form.append("title", title);
    form.append("content", content);
    form.append("boardCategory", boardCategory);
    pictures.forEach((item) => form.append("pictures", item));
    boardTags.forEach((item) => form.append("boardTags", item));

    const res = await api.postForm(`/board-service/api/v1/board`, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  };

  return useMutation({
    mutationFn: ({
      title,
      content,
      boardCategory,
      pictures,
      boardTags,
    }: postBoardProps) =>
      postBoard({ title, content, boardCategory, pictures, boardTags }),
    onSuccess: () => {
      alert("성공적으로 글이 게시되었어요");
    },
    onError: () => {
      alert("오류가 발생했어요, 관리자에게 문의해주세요");
    },
  });
};
