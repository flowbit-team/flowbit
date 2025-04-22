import { useState } from "react";
import { css } from "@emotion/react";
import { sendVerifyEmail } from "@/hooks/api/member/useApiSendVerifyEmail.ts";
import { verifyEmail } from "@/hooks/api/member/useApiVerifyEmail.ts";
import { sendSubscribeEmail } from "@/hooks/api/subscribe/useApiSendSubscribe";
import { EMAIL_PURPOSE } from "@/utils/common";
import { useModal } from "@/hooks/useModal";
import Input from "../Input";
import CertificateBox from "@/components/app/signup/certificate-box";
import useCheckEmail from "@/hooks/useCheckEmail";
import Button from "../Button";
import Chip from "../chip";

export const SubscriptionModalContent = () => {
  const [verifySendCheck, setVerifySendCheck] = useState(false);
  const [verifyEmailNum, setVerifyEmailNum] = useState("");
  const [verifyEmailNumCheck, setVerifyEmailNumCheck] = useState(false);
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const { close } = useModal();
  const { email, isValidEmail, handleEmailChange } = useCheckEmail();

  const handleSendVerificationEmail = () => {
    if (!isValidEmail) return;
    try {
      const res = sendVerifyEmail({
        email,
        emailPurpose: EMAIL_PURPOSE.SUBSCRIBE,
      });
      console.log(res);
      setVerifySendCheck(true);
    } catch (error) {
      alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleVerifyEmailCode = () => {
    if (!verifyEmailNum) return;
    try {
      const res = verifyEmail({
        email,
        randomNumber: verifyEmailNum,
        emailPurpose: EMAIL_PURPOSE.SUBSCRIBE,
      });
      setVerifyEmailNumCheck(true);
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
      (key) => categories[key as keyof typeof categories],
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
      {/* 제목 영역 */}
      <div css={titleWrapper.container}>
        <h1 css={titleWrapper.title}>알림 서비스 구독</h1>
        <span css={titleWrapper.description}>
          투자에 도움이 될만한 정보들을 로그인 없이 메일로 받아보세요.
        </span>
      </div>
      {/* 키워드 영역 */}
      <div css={keywordWrapper.container}>
        <div css={keywordWrapper.descriptionContainer}>
          <span>관심키워드</span>
          <span>* 관심키워드 설정은 최대 6개입니다.</span>
        </div>
        <div css={keywordWrapper.keywordSelectContainer}>
          <Chip closable>비트코인</Chip>
        </div>
      </div>
      {/* 이메일 인증 영역 */}
      <div css={emailWrapper.container}>
        <div css={emailWrapper.titleContainer}>
          <span> 이메일 주소 </span>
          <div id="circle" />
        </div>
        <div css={emailWrapper.emailFormContainer}>
          <Input
            placeholder={`이메일을 입력해주세요`}
            value={email}
            onChange={handleEmailChange}
          />
          <CertificateBox
            disabled={!isValidEmail}
            onClick={handleSendVerificationEmail}
          >
            {verifySendCheck ? "인증번호 재전송" : "인증번호 받기"}
          </CertificateBox>
        </div>
        <Input
          placeholder={"인증번호를 입력해주세요"}
          value={verifyEmailNum}
          onChange={(e) => setVerifyEmailNum(e.target.value)}
          disabled={true}
        />
      </div>
      <div css={footerWrapper.container}>
        <Button disabled={true}>동의하고 구독하기</Button>
      </div>
    </div>
  );
};

const titleWrapper = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4px;
  `,
  title: css`
    font-size: 24px;
    font-weight: 600;
    color: var(--text-title);
    line-height: 0;
  `,
  description: css`
    font-size: 16px;
    font-weight: 400;
    color: var(--text-body2);
  `,
};

const keywordWrapper = {
  container: css`
    flex-direction: column;
    row-gap: 12px;
    display: flex;
    background-color: var(--gray-5);
    border-radius: 8px;
    padding: 16px;
    margin-top: 24px;
  `,
  descriptionContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;

    & > span:nth-of-type(1) {
      font-size: 14px;
      font-weight: 400;
      color: var(--text-body1);
    }

    & > span:nth-of-type(2) {
      font-size: 12px;
      font-weight: 400;
      color: var(--text-caption);
    }
  `,
  keywordSelectContainer: css`
    display: inline-flex;
    column-gap: 8px;
    align-items: center;
    justify-content: flex-start;
  `,
};

const emailWrapper = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 32px;
    row-gap: 12px;
  `,
  titleContainer: css`
    display: flex;
    flex-direction: row;

    & > span {
      font-size: 14px;
      font-weight: 400;
      color: var(--text-body1);
    }

    > #circle {
      margin-top: 5px;
      background-color: var(--red-50);
      width: 3px;
      height: 3px;
      border-radius: 100%;
    }
  `,
  emailFormContainer: css`
    width: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 12px;
  `,
};

const footerWrapper = {
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    row-gap: 12px;
  `,
};
