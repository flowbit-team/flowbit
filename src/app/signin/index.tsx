import Input from "@/components/common/Input.tsx";
import mail from "@/assets/mail.svg";
import lock from "@/assets/lock.svg";
import kakao from "@/assets/kakao.svg";
import google from "@/assets/google.svg";
import ContainerToCenter from "@/components/common/ContainerToCenter.tsx";
import Button from "@/components/common/Button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import Logo from "@/assets/logo.png";
import SplitLine from "@/components/common/SplitLine.tsx";
import { useState } from "react";
import { signIn } from "@/hooks/api/member/useApiSignIn.ts";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const EMAIL_REGEX =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return (
    <ContainerToCenter>
      {/*  입력 창 섹션 */}
      <img
        src={Logo}
        alt="로고 이미지"
        css={css`
          width: 17.1rem;
          height: auto;
          margin: 0 auto;
          margin-bottom: 5.3rem;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 3.8rem;
        `}
      >
        <Input
          icon={mail}
          placeholder={`이메일을 입력해주세요`}
          onChange={(e) => {
            if (e.target.value.match(EMAIL_REGEX)) {
              setEmailCheck(true);
            } else {
              setEmailCheck(false);
            }
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          icon={lock}
          placeholder={`비밀번호를 입력해주세요`}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        css={css`
          margin-top: 5.6rem;
        `}
        state={emailCheck && password.length > 5}
        onClick={() => {
          signIn({ email: email, password: password })
            .then((res) => {
              localStorage.setItem("FLOWBIT_ACT", res.data.accessToken);
              navigate("/community");
            })
            .catch(() => {
              alert("에러가 발생했습니다.");
            });
        }}
      >
        로그인
      </Button>
      <Link
        to={"/signup"}
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1.5rem;
        `}
      >
        회원가입
      </Link>

      {/*  소셜 로그인 섹션 */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <SplitLine
          text={"소셜 계정으로 로그인"}
          css={css`
            margin-top: 4.5rem;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 1.8rem;
            margin: 0;
            margin-top: 3rem;
          `}
        >
          <Button
            icon={kakao}
            css={css`
              background: #fede35;
              color: #3c1e1e;
            `}
            onClick={() => alert("카카오 로그인은 곧 구현 예정이에요!")}
          >
            카카오 로그인
          </Button>
          <Button
            icon={google}
            css={css`
              background: #eeeeee;
              color: #3c1e1e;
            `}
            onClick={() => alert("구글 로그인은 곧 구현 예정이에요!")}
          >
            구글 로그인
          </Button>
        </div>
      </div>
    </ContainerToCenter>
  );
}
