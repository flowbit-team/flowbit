import { EMAIL_REGEX } from "@/utils/regex";
import { ChangeEvent, useCallback, useState } from "react";

export default function useCheckEmail() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = useCallback((e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setEmail(value);
    setIsValidEmail(value.match(EMAIL_REGEX) !== null);
  }, []);

  return {
    email,
    isValidEmail,
    handleEmailChange,
  };
}
