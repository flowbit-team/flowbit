import { api } from "@/api";
import { randomInt } from "es-toolkit";

interface signUpProps {
  userId: string;
  password: string;
  name?: string;
  phone?: string;
  nickname: string;
}

const random = () => randomInt(0, 9);

export const signUp = ({
  userId,
  password,
  name = `목도리도마뱀${random()}${random()}${random()}`,
  phone = `000-${random()}00${random()}-${random()}${random()}${random()}${random()}`,
  nickname,
}: signUpProps) => {
  const form = new FormData();
  form.append("userId", userId);
  form.append("password", password);
  form.append("name", name);
  form.append("phone", phone);
  form.append("nickname", nickname);
  const res = api.post(`/user-service/api/v1/member`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
};
export const useApiSignUp = () => {};
