import { css } from "@emotion/react";
import Profile from "@/assets/Profile.png";
import PencileIcon from "@/assets/PencileIcon.svg";
import B2 from "@/components/common/text/B2_bold copy";

export default function CommunityCreateBtn() {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 24px;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      `}
    >
      {/* Profile */}
      <img
        css={css`
          width: 55px;
          height: 55px;
        `}
        src={Profile}
      />
      {/* Btn */}
      <div
        css={css`
          width: 100%;
          height: 42px;

          display: flex;
          gap: 10px;
          align-items: center;
          padding: 0 26px;

          background-color: #fafafa;
          border: 1px solid #f5f5f5;
          border-radius: 100px;

          cursor: pointer;
          &:hover {
            border: 1px solid #0056ca;
            background-color: white;
          }
        `}
      >
        <img
          css={css`
            width: 24px;
            height: 24px;
          `}
          src={PencileIcon}
          alt=""
        />
        <B2
          css={css`
            color: #bdbdbd;
          `}
        >
          생성하고 싶은 게시글을 공유해주세요
        </B2>
      </div>
    </div>
  );
}
