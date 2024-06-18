import { api } from "@/api";

interface signInProps {
  email: string;
  password: string;
}
export const signIn = ({ email, password }: signInProps) => {
  const res = api.post(`/user-service/api/v1/member/login`, {
    userId: email,
    password: password,
  });
  return res;
};
export const useApiSignIn = () => {};
