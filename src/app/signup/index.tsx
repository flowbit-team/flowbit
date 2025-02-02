import { css } from "@emotion/react";
import ContainerToCenter from "@/components/common/ContainerToCenter.tsx";
import Logo from "@/assets/logo.png";
import Input from "@/components/common/Input.tsx";
import mail from "@/assets/mail.svg";
import lock from "@/assets/lock.svg";
import Button from "@/components/common/Button.tsx";
import SplitLine from "@/components/common/SplitLine.tsx";
import kakao from "@/assets/kakao.svg";
import google from "@/assets/google.svg";
import CertificateBox from "@/components/app/signup/certificate-box.tsx";
import Eyes from "@/assets/eye.svg";
import { useState } from "react";
import { sendVerifyEmail } from "@/hooks/api/member/useApiSendVerifyEmail.ts";
import { verifyEmail } from "@/hooks/api/member/useApiVerifyEmail.ts";
import { useNavigate } from "react-router-dom";
import { EMAIL_PURPOSE } from "@/utils/common";
import { EMAIL_REGEX } from "@/utils/regex";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [verifySendCheck, setVerifySendCheck] = useState(false);
  const [verifyEmailNum, setVerifyEmailNum] = useState("");
  const [verifyEmailNumCheck, setVerifyEmailNumCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [verifyPassWordNum, setVerifyPassWordNum] = useState("");
  const [viewVerifyPassword, setViewVerifyPassword] = useState(false);
  const [nickname, setNickName] = useState("");

  const navigate = useNavigate();

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

          div {
            position: relative;

            div:nth-of-type(2) {
              position: absolute;
              top: 50%;
              left: 95%;
              transform: translate(-95%, -50%);
              display: flex;
              justify-content: flex-end;
            }
          }
        `}
      >
        <div>
          <Input
            icon={mail}
            placeholder={`이메일을 입력해주세요`}
            value={email}
            onChange={(e) => {
              if (e.target.value.match(EMAIL_REGEX)) {
                setEmailCheck(true);
              } else {
                setEmailCheck(false);
              }

              setEmail(e.target.value);
            }}
          />
          <CertificateBox
            check={emailCheck && !verifySendCheck}
            onClick={() => {
              sendVerifyEmail({ email: email, emailPurpose: EMAIL_PURPOSE.SIGNUP});
              setVerifySendCheck(true);
            }}
          >
            {verifySendCheck ? "인증번호 발송됨" : "인증번호 요청"}
          </CertificateBox>
        </div>
        {verifySendCheck && (
          <div>
            <Input
              value={verifyEmailNum}
              placeholder={`인증번호를 입력하세요`}
              onChange={(e) => {
                setVerifyEmailNum(e.target.value);
              }}
              maxLength={6}
            />
            <CertificateBox
              check={verifyEmailNum.length >= 6 && !verifyEmailNumCheck}
              onClick={() => {
                verifyEmail({
                  email: email,
                  randomNumber: verifyEmailNum,
                  emailPurpose: EMAIL_PURPOSE.SIGNUP
                })
                  .then(() => {
                    setVerifyEmailNumCheck(true);
                  })
                  .catch((err) => {
                    console.log(err);
                    alert(
                      "인증번호 입력 중 오류가 발생했습니다, 관리자에게 문의해주세요!",
                    );
                  });
              }}
            >
              {verifyEmailNumCheck ? "인증 완료" : "인증하기"}
            </CertificateBox>
          </div>
        )}
        <div>
          <Input
            type={viewPassword ? "text" : "password"}
            value={password}
            icon={lock}
            placeholder={`비밀번호를 입력해주세요 (영문 숫자, 6-17자)`}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <CertificateBox
            icon={Eyes}
            onClick={() => setViewPassword(!viewPassword)}
          />
        </div>
        <div>
          <Input
            type={viewVerifyPassword ? "text" : "password"}
            value={verifyPassWordNum}
            icon={lock}
            placeholder={`비밀번호 확인`}
            onChange={(e) => {
              setVerifyPassWordNum(e.target.value);
            }}
          />
          <CertificateBox
            icon={Eyes}
            onClick={() => setViewVerifyPassword(!viewVerifyPassword)}
          />
        </div>
        <Input
          value={nickname}
          placeholder={`닉네임을 입력하세요`}
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
      </div>
      <Button
        css={css`
          margin-top: 3.9rem;
        `}
        state={Boolean(
          verifyEmailNumCheck &&
            email &&
            password &&
            verifyPassWordNum &&
            nickname,
        )}
        onClick={() => {
          navigate("/consent", {
            state: {
              userId: email,
              password: password,
              nickname: nickname,
            },
          });
        }}
      >
        가입하기
      </Button>

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
            margin-top: 3.2rem;
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
            onClick={() => navigate("/consent?bypass=true&type=kakao")}
          >
            카카오로 빠른 회원가입
          </Button>
          <Button
            icon={google}
            css={css`
              background: #eeeeee;
              color: #3c1e1e;
            `}
            onClick={() => navigate("/consent?bypass=true&type=google")}
          >
            구글로 빠른 회원가입
          </Button>
        </div>
      </div>
    </ContainerToCenter>
  );
}
