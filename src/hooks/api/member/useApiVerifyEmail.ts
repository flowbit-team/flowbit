import { api } from "@/api";

interface verifyEmailProps {
  email: string;
  emailPurpose: string;
}
export const verifyEmail = ({ email, emailPurpose }: verifyEmailProps) => {
  const res = api.post(`/user-service/api/v1/mail`, {
    email: email,
    emailPurpose: emailPurpose,
  });

  return res;
};
export const useApiVerifyEmail = () => {};
