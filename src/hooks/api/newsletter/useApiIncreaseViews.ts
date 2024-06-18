import { api } from "@/api";

export const increaseViews = (link: string) => {
  return api.get(`/board-service/api/v1/news/view?link=${link}`);
};
