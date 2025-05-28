import { api } from "@/api";

interface sendSubscribeEmail {
  email: string;
  keywords: string[];
}

// TODO: 이메일 구독 요청 API 훅 구조로 변경하기
export const sendSubscribeEmail = ({ email, keywords }: sendSubscribeEmail) => {
  const res = api.post(`/user-service/api/v1/subscribers/subscribe`, {
    email,
    keywords,
  });

  return res;
};
