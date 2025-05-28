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
import dateUtil from "@/utils/dateUtil";
import circle_checked_icon from "@/assets/checkbox/circle_checked_fill.svg";
import circle_chcked_icon_disabled from "@/assets/checkbox/circle_checked_default.svg";

export const SubscriptionModalContent = () => {
  const [verifyCheckBox, setVetifyCheckBox] = useState([
    {
      id: "privacy",
      checked: false,
      label: "개인정보 처리방침",
      url: "",
    },
    {
      id: "age",
      checked: false,
      label: "만 14세 이상입니다.",
      url: "",
    },
  ]);
  const [verifySendCheck, setVerifySendCheck] = useState(false);
  const [verifyEmailNum, setVerifyEmailNum] = useState("");
  const [verifyEmailNumCheck, setVerifyEmailNumCheck] = useState(false);
  const [verifyDescription, setVerifyDescription] = useState<{
    type: "info" | "error" | "success";
    message: string;
  }>({
    type: "info",
    message: "",
  });
  const [remaingTime, setRemainingTime] = useState(300);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>(
    null,
  );
  const [keywordList, setKeywordList] = useState<
    { value: string; inputable: boolean }[]
  >([
    {
      value: "",
      inputable: true,
    },
  ]);
  const { close } = useModal();
  const { email, isValidEmail, handleEmailChange } = useCheckEmail();

  const handleAddkeyword = ({
    index,
    keyword,
  }: {
    index: number;
    keyword: {
      value: string;
      inputable: boolean;
    };
  }) => {
    if (keyword.inputable) {
      if (!keyword.value.trim()) {
        alert("올바른 키워드를 입력해주세요");
        return;
      }
      if (keywordList.length > 3) {
        alert("최대 3개까지 입력 가능합니다.");
        return;
      }
    }
    Object.values(keywordList).forEach((item, i) => {
      if (index !== i && item.value === keyword.value) {
        alert("이미 입력된 키워드입니다.");
        return;
      }
    });

    const newKeywordList = [...keywordList];
    if (newKeywordList[index].inputable) {
      newKeywordList[index].inputable = false;
      if (newKeywordList.length < 3) {
        setKeywordList([...newKeywordList, { value: "", inputable: true }]);
      } else {
        setKeywordList(newKeywordList);
      }
    } else {
      const updatedList = newKeywordList.filter((_, i) => i !== index);
      if (updatedList.length === 0 || updatedList.every((k) => !k.inputable)) {
        setKeywordList([...updatedList, { value: "", inputable: true }]);
      } else {
        setKeywordList(updatedList);
      }
    }
  };

  const handleChangekeyword = ({
    index,
    keyword,
  }: {
    index: number;
    keyword: string;
  }) => {
    const newKeywordList = [...keywordList];
    newKeywordList[index].value = keyword;
    setKeywordList(newKeywordList);
  };

  const handleSendVerificationEmail = async () => {
    if (!isValidEmail) return;
    try {
      const { status } = await sendVerifyEmail({
        email,
        emailPurpose: EMAIL_PURPOSE.SUBSCRIBE,
      });
      if (status === 200) {
        handlePlayTimer();
        setVerifySendCheck(true);
      }
    } catch (error) {
      setVerifyDescription({
        type: "error",
        message:
          (error as Error).message ??
          "이메일 전송에 실패했습니다. 다시 시도해주세요.",
      });
    }
  };

  const handleVerifyEmailCode = async () => {
    if (!verifyEmailNum) return;
    if (keywordList?.[0]?.value?.trim() === "") return;
    try {
      const { status } = await verifyEmail({
        email,
        randomNumber: verifyEmailNum,
        emailPurpose: EMAIL_PURPOSE.SUBSCRIBE,
      });
      if (status === 200) {
        // 타이머 제거 및 중지
        setIsTimerRunning(false);
        if (timer) clearInterval(timer);
        // 인증번호 인증 완료 및 메세지 제공
        setVerifyEmailNumCheck(true);
        setVerifyDescription({
          type: "success",
          message: "인증되었습니다.",
        });
      }
    } catch (error) {
      setVerifyDescription({
        type: "error",
        message:
          (error as Error).message ??
          "인증 코드 인증이 실패했습니다. 다시 시도해주세요.",
      });
    }
  };

  const handlePlayTimer = () => {
    if (timer) {
      clearInterval(timer);
    }

    setRemainingTime(300);
    setIsTimerRunning(true);
    setVerifyEmailNum("");
    setVerifyEmailNumCheck(false);
    setVerifyDescription({
      type: "info",
      message: "인증번호를 입력해주세요.",
    });

    // 5분 타이머 시작, 돔에 나타내야함
    const newTimer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(newTimer);
          setIsTimerRunning(false);
          setVerifySendCheck(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimer(newTimer);
  };

  const handleChecked = (item: {
    id: string;
    checked: boolean;
    label: string;
    url: string;
  }) => {
    const updatedCheckBox = verifyCheckBox.map((check) => {
      if (check.id === item.id) {
        return { ...check, checked: !check.checked };
      }
      return check;
    });
    setVetifyCheckBox(updatedCheckBox);
  };

  const handleCompleteSubscription = async () => {
    const keywords = keywordList.reduce<string[]>((acc, cur) => {
      if (cur.value.trim() !== "") {
        acc.push(cur.value);
      }
      return acc;
    }, []);

    try {
      await sendSubscribeEmail({ email, keywords });
      alert("구독이 완료되었습니다. 매일 자정에 구독 정보를 보내드립니다.");
      close(); // 모달 창 닫기
    } catch (error) {
      console.log(error);
      setVerifyDescription({
        type: "error",
        message:
          (error as Error).message ??
          "구독 요청에 실패했습니다. 다시 시도해주세요.",
      });
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
          <span>* 관심키워드 설정은 최대 3개입니다.</span>
        </div>
        <div css={keywordWrapper.keywordSelectContainer}>
          {keywordList.map((keyword, index) => (
            <Chip
              value={keyword.value}
              onClick={() => handleAddkeyword({ index, keyword })}
              onChange={(e) =>
                handleChangekeyword({
                  index,
                  keyword: (e.target as HTMLInputElement).value,
                })
              }
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  handleAddkeyword({ index, keyword });
                }
              }}
              onBlur={() => handleAddkeyword({ index, keyword })}
              key={index}
              closable={true}
              inputable={keyword.inputable}
              maxLength={10}
            />
          ))}
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
        <div css={emailWrapper.certificationContainer}>
          <div css={emailWrapper.certificationWrapper}>
            <Input
              placeholder={"인증번호를 입력해주세요"}
              value={verifyEmailNum}
              onChange={(e) => setVerifyEmailNum(e.target.value)}
              disabled={!verifySendCheck}
            />
            <button
              disabled={!verifySendCheck || !verifyEmailNum.length}
              onClick={handleVerifyEmailCode}
            >
              인증하기
            </button>
          </div>
          <div
            css={() =>
              emailWrapper.messageWrapper({
                verifyDescription: verifyDescription.type,
              })
            }
          >
            <span> {verifyDescription.message} </span>
            {isTimerRunning ? (
              <span> 유효시간 {dateUtil.formatTime(remaingTime)} </span>
            ) : null}
          </div>
        </div>
      </div>
      {/* 이메일 동의 및 구독 영역 */}
      <div css={footerWrapper.container}>
        <div css={footerWrapper.checkbox__container}>
          {verifyCheckBox.map((item) => {
            return (
              <div
                css={footerWrapper.checkbox__wrapper}
                key={item.id}
                onClick={() => handleChecked(item)}
              >
                {item.checked ? (
                  <img src={circle_checked_icon} alt="unchecked icon" />
                ) : (
                  <img src={circle_chcked_icon_disabled} alt="checked icon" />
                )}
                <span> {item.label} </span>
              </div>
            );
          })}
        </div>
        <Button
          disabled={
            !verifyEmailNumCheck ||
            !verifyCheckBox.every((item) => item.checked)
          }
          onClick={handleCompleteSubscription}
        >
          동의하고 구독하기
        </Button>
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
    row-gap: 8px;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
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
  certificationContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 8px;

    span {
      font-size: 12px;
    }
  `,
  certificationWrapper: css`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    > button {
      position: absolute;
      right: 0;
      font-size: 15px;
      color: var(--blue-50);
      background-color: transparent;
      border: none;
      margin-right: 16px;

      &:disabled {
        color: var(--text-disabled);
      }

      &:focus {
        outline: none;
      }
    }
  `,
  messageWrapper: ({ verifyDescription }: { verifyDescription: string }) => css`
    display: flex;
    flex-direction: column;
    text-align: left;
    ${verifyDescription === "error" && "color: var(--red-50);"}
    ${verifyDescription === "success" && "color: var(--blue-50);"}
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
  checkbox__container: css`
    display: flex;
    column-gap: 24px;
    cursor: pointer;
  `,
  checkbox__wrapper: css`
    display: flex;
    align-items: center;
    color: var(--text-body1);
  `,
};
