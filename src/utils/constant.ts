/** 권한 관련 */
const ACCESS_TOKEN = btoa("FLOWBIT_ACT");

/** 회원가입 관련 */
const EMAIL_PURPOSE = {
  SIGNUP: "SIGNUP",
  SUBSCRIBE: "SUBSCRIBE",
} as const;

/** 소셜 로그인 관련 */
const OAUTH = {
  KAKAO: `${import.meta.env.VITE_API_URL}/user-service/oauth2/authorization/kakao`,
  GOOGLE: `${import.meta.env.VITE_API_URL}/user-service/oauth2/authorization/google`,
};

export { ACCESS_TOKEN, EMAIL_PURPOSE, OAUTH };
