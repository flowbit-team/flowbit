import { api } from "@/api";

interface sendVerifyEmailProps {
  email: string;
}
export const sendVerifyEmail = ({ email }: sendVerifyEmailProps) => {
  const res = api.post(`/user-service/api/v1/mail`, {
    email: email,
    emailPurpose: "SIGNUP",
  });

  return res;
};
export const useApiSendVerifyEmail = () => {};
