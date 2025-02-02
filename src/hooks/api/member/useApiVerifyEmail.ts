import { api } from "@/api";

interface verifyEmailProps {
  email: string;
  randomNumber: string;
  emailPurpose: string;
}
export const verifyEmail = ({ email, randomNumber, emailPurpose }: verifyEmailProps) => {
  const res = api.post(`/user-service/api/v1/mail/verify`, {
    email: email,
    randomNumber: randomNumber,
    emailPurpose: emailPurpose,
  });

  return res;
};

export const useApiVerifyEmail = () => {};
