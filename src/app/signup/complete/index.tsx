import Logo from "@/assets/logo.png";
import { css } from "@emotion/react";
import Button from "@/components/common/Button.tsx";
import ContainerToCenter from "@/components/common/ContainerToCenter.tsx";
import { DESIGN_SYSTEM_COLOR, DESIGN_SYSTEM_TEXT } from "@/style/variable.ts";
import FireCracker from "@/assets/firecracker.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Confetti from "@/components/common/confetti/Confetti.tsx";

export default function Complete() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state.nickname) {
      alert("정상적인 경로가 아닙니다, 로그인 화면으로 이동합니다.");
      navigate("/signin");
    }
  }, []);

  return (
    <Fragment>
      <Confetti />

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
            align-items: center;
            row-gap: 1.5rem;
          `}
        >
          <FireCracker />
          <div
            css={css`
              ${DESIGN_SYSTEM_TEXT.E4}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
            `}
          >
            회원가입을 축하합니다.
          </div>
          <div
            css={css`
              ${DESIGN_SYSTEM_TEXT.B1}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              display: flex;
              flex-direction: column;
              text-align: center;
            `}
          >
            <span>{state.nickname}님의 회원가입이</span>
            <span>성공적으로 완료되었습니다.</span>
          </div>
          <div
            css={css`
              width: 100%;
              height: 0.1rem;
              background-color: ${DESIGN_SYSTEM_COLOR.GRAY_200};
              margin-top: 4.7rem;
              margin-bottom: 11rem;
            `}
          ></div>
          <div
            css={css`
              display: flex;
              column-gap: 3.1rem;
              width: 100%;
            `}
          >
            <Button
              css={css`
                background-color: ${DESIGN_SYSTEM_COLOR.BLUE_GRAY_50};
                color: ${DESIGN_SYSTEM_COLOR.GRAY_400};
              `}
              onClick={() => navigate("/")}
            >
              홈으로
            </Button>
            <Button onClick={() => navigate("/signin")}>로그인</Button>
          </div>
        </div>
      </ContainerToCenter>
    </Fragment>
  );
}
