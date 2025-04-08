import { api } from "@/api";
/**
 * @description Press Your { Function increaseViews } Description
 * @param {string} link
 * @returns {void}
 */
export const increaseViews = (link: string) => {
  return api.get(`/board-service/api/v1/news/view?link=${link}`);
};
