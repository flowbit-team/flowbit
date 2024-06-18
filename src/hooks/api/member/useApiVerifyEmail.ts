import { api } from "@/api";

interface verifyEmailProps {
  email: string;
  randomNumber: string;
}
export const verifyEmail = ({ email, randomNumber }: verifyEmailProps) => {
  const res = api.post(`/user-service/api/v1/mail/verify`, {
    email: email,
    randomNumber: randomNumber,
    emailPurpose: "SIGNUP",
  });

  return res;
};

export const useApiVerifyEmail = () => {};
