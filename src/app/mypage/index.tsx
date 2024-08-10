import Logo from "@/assets/logo.png";
import ContainerToCenter from "@/components/common/ContainerToCenter.tsx";
import { css } from "@emotion/react";
import EditIcon from "@/assets/mypage/ic_edit.svg?react";
import UserIcon from "@/assets/mypage/ic_user.svg?react";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";
import TextWithCheckBox from "@/components/app/signup/consent/text-with-checkbox.tsx";
import Button from "@/components/common/Button.tsx";
import Input from "@/components/common/Input.tsx";
import { useState } from "react";

export function MyPage() {
  const defaultColor = [
    DESIGN_SYSTEM_COLOR.GRAY_400,
    DESIGN_SYSTEM_COLOR.RED_500,
    DESIGN_SYSTEM_COLOR.ORANGE_500,
    DESIGN_SYSTEM_COLOR.YELLOW_500,
    DESIGN_SYSTEM_COLOR.BRAND_BLUE,
    DESIGN_SYSTEM_COLOR.BLUE_500,
    DESIGN_SYSTEM_COLOR.BRAND_OCEAN,
    DESIGN_SYSTEM_COLOR.BLUE_GRAY_900,
  ];
  const [color, setColor] = useState(defaultColor[0]);
  return (
    <ContainerToCenter
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 6.7rem;
      `}
    >
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
          position: relative;
          width: 8.5rem;
          height: 8.5rem;

          div {
            position: absolute;
          }
        `}
      >
        <div
          css={css`
            border-radius: 100%;
            background-color: ${color};
            transition: 0.4s all;
          `}
        >
          <UserIcon
            css={css`
              z-index: -1;
            `}
          />
        </div>
        <div
          css={css`
            width: 100%;
            height: 100%;
            display: flex;
          `}
        >
          <EditIcon
            css={css`
              z-index: 1;
              margin-top: auto;
              margin-left: auto;
            `}
          />
        </div>
      </div>
      <div
        css={css`
          width: 100%;
          div:nth-of-type(1) {
            width: 100%;
          }
        `}
      >
        <Input
          placeholder={`닉네임을 입력해주세요`}
          css={css`
            width: 100%;
          `}
        />
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 2.3rem;
        `}
      >
        <span
          css={css`
            ${DESIGN_SYSTEM_TEXT.B1_BOLD};
          `}
        >
          프로필 색상 선택
        </span>
        <div
          css={css`
            display: flex;
            column-gap: 2.2rem;
          `}
        >
          {defaultColor.map((item) => (
            <button
              css={css`
                border: none;
                background: ${item};
                width: 3.6rem;
                height: 3.6rem;
                border-radius: 100%;
              `}
              onClick={() => setColor(item)}
            />
          ))}
        </div>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 2.3rem;
          width: 100%;
        `}
      >
        <span
          css={css`
            ${DESIGN_SYSTEM_TEXT.B1_BOLD};
          `}
        >
          서비스 알람 수신 설정
        </span>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            row-gap: 0.4rem;
          `}
        >
          <TextWithCheckBox
            text={`푸쉬알람 수신동의`}
            checked={false}
            css={css`
              span {
                font-size: 1.6rem !important;
                font-weight: 400 !important;
              }
            `}
          />
          <span
            css={css`
              ${DESIGN_SYSTEM_TEXT.B2};
              color: #888888;
            `}
          >
            수신동의를 하시면 뉴스레터 등 중요한 이벤트 발생시 알려 드립니다.
          </span>
        </div>
        <Button> 저장하기 </Button>
      </div>
    </ContainerToCenter>
  );
}
