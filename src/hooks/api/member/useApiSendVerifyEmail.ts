import { api } from "@/api";

interface sendVerifyEmailProps {
  email: string;
  emailPurpose: 'SIGNUP' | 'SUBSCRIBE'
}
export const sendVerifyEmail = ({ email, emailPurpose }: sendVerifyEmailProps) => {
  const res = api.post(`/user-service/api/v1/mail`, {
    email: email,
    emailPurpose: emailPurpose,
  });

  return res;
};

export const useApiSendVerifyEmail = () => {};
