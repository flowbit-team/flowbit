import { useState } from "react";
import { css } from "@emotion/react";
import Button from "@/components/common/Button";
import CertificateBox from "@/components/app/signup/certificate-box.tsx";
import { sendVerifyEmail } from "@/hooks/api/member/useApiSendVerifyEmail.ts";
import { verifyEmail } from "@/hooks/api/member/useApiVerifyEmail.ts";
import { sendSubscribeEmail } from "@/hooks/api/subscribe/useApiSendSubscribe";
import { BREAK_POINTS, DESIGN_SYSTEM_COLOR } from "@/style/variable";
import { EMAIL_PURPOSE } from "@/utils/common";
import { useModal } from "@/hooks/useModal";

export const SubscriptionModalContent = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [verifySendCheck, setVerifySendCheck] = useState(false);
  const [verifyEmailNum, setVerifyEmailNum] = useState("");
  const [verifyEmailNumCheck, setVerifyEmailNumCheck] = useState(false);
  const [categories, setCategories] = useState({
    bitcoinPrediction: false,
    latestNews: false,
  });
  const { close } = useModal();

  const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(EMAIL_REGEX.test(value));
  };

  const handleSendVerificationEmail = async () => {
    if (!emailValid) return;
    try {
      sendVerifyEmail({ email, emailPurpose: EMAIL_PURPOSE.SUBSCRIBE });
      alert("인증번호가 전송되었습니다. 확인 후 입력해주세요.");
      setVerifySendCheck(true);
    } catch (error) {
      alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleVerifyEmailCode = async () => {
    if (!verifyEmailNum) return;
    try {
      await verifyEmail({ email, randomNumber: verifyEmailNum, emailPurpose: EMAIL_PURPOSE.SUBSCRIBE });
      setVerifyEmailNumCheck(true);
      alert("이메일 인증이 완료되었습니다.");
    } catch (error) {
      alert("인증번호가 올바르지 않습니다. 다시 확인해주세요.");
    }
  };

  const handleCompleteSubscription = async () => {
    if (!verifyEmailNumCheck) {
      alert("이메일 인증을 완료해주세요.");
      return;
    }

    const selectedCategories = Object.keys(categories).filter(
      (key) => categories[key as keyof typeof categories]
    );

    if (selectedCategories.length === 0) {
      alert("최소 하나 이상의 구독 카테고리를 선택해주세요.");
      return;
    }

    try {
      await sendSubscribeEmail({ email });
      alert("구독이 완료되었습니다. 매일 자정에 구독 정보를 보내드립니다.");
      close(); // 모달 창 닫기
    } catch (error) {
      alert("구독 요청에 실패했습니다. 다시 시도해주세요.");
    }
  };


  return (
    <div>
      <h3
        css={css`
          font-size: 1.8rem;
          font-weight: bold;
          color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
          margin-bottom: 1.5rem;
        `}
      >
        구독할 카테고리를 선택하세요
      </h3>

      {/* 구독 카테고리 토글 */}
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 1.8rem;
        `}
      >
        <label
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${DESIGN_SYSTEM_COLOR.GRAY_100};
            padding: 1rem;
            border-radius: 0.8rem;
            cursor: pointer;
          `}
        >
          <span>비트코인 예측 구독</span>
          <div
            css={css`
              position: relative;
              width: 3.6rem;
              height: 2rem;
              background-color: ${categories.bitcoinPrediction ? DESIGN_SYSTEM_COLOR.BRAND_BLUE : DESIGN_SYSTEM_COLOR.GRAY_400};
              border-radius: 1rem;
              transition: background-color 0.2s;
              cursor: pointer;
            `}
            onClick={() => setCategories((prev) => ({ ...prev, bitcoinPrediction: !prev.bitcoinPrediction }))}
          >
            <div
              css={css`
                position: absolute;
                width: 1.6rem;
                height: 1.6rem;
                background-color: white;
                border-radius: 50%;
                top: 50%;
                left: ${categories.bitcoinPrediction ? "calc(100% - 1.8rem)" : "2px"};
                transform: translateY(-50%);
                transition: left 0.2s;
              `}
            />
          </div>
        </label>

        <label
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${DESIGN_SYSTEM_COLOR.GRAY_100};
            padding: 1rem;
            border-radius: 0.8rem;
            cursor: pointer;
          `}
        >
          <span>최신 뉴스 구독</span>
          <div
            css={css`
              position: relative;
              width: 3.6rem;
              height: 2rem;
              background-color: ${categories.latestNews ? DESIGN_SYSTEM_COLOR.BRAND_BLUE : DESIGN_SYSTEM_COLOR.GRAY_400};
              border-radius: 1rem;
              transition: background-color 0.2s;
              cursor: pointer;
            `}
            onClick={() => setCategories((prev) => ({ ...prev, latestNews: !prev.latestNews }))}
          >
            <div
              css={css`
                position: absolute;
                width: 1.6rem;
                height: 1.6rem;
                background-color: white;
                border-radius: 50%;
                top: 50%;
                left: ${categories.latestNews ? "calc(100% - 1.8rem)" : "2px"};
                transform: translateY(-50%);
                transition: left 0.2s;
              `}
            />
          </div>
        </label>
      </div>

      {/* 이메일 입력 및 인증 */}
      <h3
        css={css`
          font-size: 1.6rem;
          font-weight: bold;
          color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
          margin-bottom: 1rem;
        `}
      >
        이메일 인증
      </h3>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 0.8rem;
        `}
      >
        <input
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={handleEmailChange}
          css={css`
            flex: 1;
            padding: 1rem;
            border: 1px solid ${DESIGN_SYSTEM_COLOR.GRAY_300};
            border-radius: 0.8rem;
            font-size: 1.4rem;
          `}
          disabled={verifySendCheck}
        />
       <CertificateBox check={emailValid && !verifySendCheck} onClick={handleSendVerificationEmail}>
        {verifySendCheck ? "발송됨" : "인증 요청"}
      </CertificateBox>
      </div>

      {verifySendCheck && (
        <div
          css={css`
            display: flex;
            align-items: center;
            gap: 0.8rem;
            margin-top: 1rem;
          `}
        >
          <input
            type="text"
            placeholder="인증번호 입력"
            value={verifyEmailNum}
            onChange={(e) => setVerifyEmailNum(e.target.value)}
            maxLength={6}
            css={css`
              flex: 1;
              padding: 1rem;
              border: 1px solid ${DESIGN_SYSTEM_COLOR.GRAY_300};
              border-radius: 0.8rem;
              font-size: 1.4rem;
            `}
            disabled={verifyEmailNumCheck}
          />
          <CertificateBox check={verifySendCheck && !verifyEmailNumCheck} onClick={handleVerifyEmailCode}>
            {verifyEmailNumCheck ? "인증 완료" : "인증하기"}
          </CertificateBox>
        </div>
      )}
       <div
        css={css`
          margin-top: 1rem;
          display: flex;
          justify-content: flex-end;
          gap: 1.6rem;

          ${BREAK_POINTS.TABLET} {
          }
          ${BREAK_POINTS.MOBILE} {
            margin-top: 4rem;
          }
        `}
      >

              <Button
                css={css`
                  width: 8.4rem !important;
                  height: 4.5rem;
                  ${DESIGN_SYSTEM_COLOR.GRAY_50}
                  font-size: 1.6rem;
                  font-weight: normal;
                  left: 2rem;
                  bottom: 2rem;

                `}
                onClick={close}
              >
                취소
              </Button>
              <Button
                css={css`
                  width: 8.4rem !important;
                  height: 4.5rem;

                  ${DESIGN_SYSTEM_COLOR.GRAY_50}
                  font-size: 1.6rem;
                  font-weight: normal;
                `}
                state={Boolean(verifyEmailNumCheck)} onClick={handleCompleteSubscription}
              >
                구독
              </Button>
      </div>
    
  
    </div>
  );
};
