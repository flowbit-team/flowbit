import { api } from "@/api";

interface signInProps {
  email: string;
  password: string;
}
const signIn = ({ email, password }: signInProps) => {
  const res = api.post(`/user-service/api/v1/member/login`, {
    userId: email,
    password: password,
  });
  return res;
};

export { signIn };
