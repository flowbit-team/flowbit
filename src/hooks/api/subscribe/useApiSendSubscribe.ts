import { api } from "@/api";

interface sendSubscribeEmail {
  email: string;
}
export const sendSubscribeEmail = ({ email }: sendSubscribeEmail) => {
  const res = api.post(`/user-service/api/v1/subscribers/subscribe`, {
    email: email,
  });

  return res;
};

