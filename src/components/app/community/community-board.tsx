import { useState } from "react";
import { css } from "@emotion/react";
import Profile from "@/assets/Profile.png";
import Collapse from "@/assets/collapse.svg";
import B1 from "@/components/common/text/B1";
import E_B1 from "@/components/common/text/E_B1";
import E_S2 from "@/components/common/text/E_S2";
import E_S3 from "@/components/common/text/E_S3";
import T4 from "@/components/common/text/T4";
import Heart from "@/assets/heart.svg";
import IconButton from "@/components/common/icon-button";
import Comment from "@/assets/comment.svg";
import Share from "@/assets/share.svg";
import SendBtn from "@/assets/sendBtn.svg";

export default function CommunityBoard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [commentList, setCommentList] = useState([1, 2, 3, 4]);

  return (
    <div>
      {/* User */}
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 10px;
        `}
      >
        {/* Profile */}
        <img
          css={css`
            width: 55px;
            height: 55px;
          `}
          src={Profile}
          alt="profile"
        />
        {/* Info */}
        <div>
          {/* Name */}
          <div
            css={css`
              margin-bottom: 3px;
            `}
          >
            <E_S2>Dong Gyun Yang</E_S2>
            <E_S3>님이 공유했어요.</E_S3>
          </div>
          {/* Time */}
          <E_B1
            css={css`
              color: #bdbdbd;
            `}
          >
            약 3시간 전
          </E_B1>
        </div>
      </div>
      {/* Board */}
      <div
        css={css`
          display: flex;
          gap: 24px;
        `}
      >
        <div
          css={css`
            min-width: 55px;
          `}
        ></div>
        <div
          css={css`
            padding: 10px 35px;
            border: 1px solid #f5f5f5;
            border-radius: 10px;
            background-color: #fafafa;
          `}
        >
          {/* Top */}
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
            `}
          >
            <img src={Collapse} alt="" />
          </div>
          {/* Title */}
          <div
            css={css`
              margin-bottom: 17px;
            `}
          >
            <T4>도지코인 이대로 괜찮은가?</T4>
          </div>
          {/* Description */}
          <div
            css={css`
              margin-bottom: 23px;
            `}
          >
            <B1
              css={css`
                color: #616161;
              `}
            >
              업비트 투자자보호센터에 따르면 주요 기관들의 비트코인 보유 물량은
              증가하는 추세다. 전 세계 기업·펀드·정부가 보유하고 있는 비트코인
              물량의 합은 약 233만개로, 올해 초 170만개보다 약 60만개 늘었다.
            </B1>
          </div>
          {/* Bottom */}
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            {/* Button List */}
            <div
              css={css`
                display: flex;
                gap: 46px;
              `}
            >
              {/* Button */}
              <IconButton src={Heart}>32</IconButton>
              <IconButton src={Comment}>32</IconButton>
              <IconButton src={Share} />
            </div>
          </div>
          {/* Comment List */}
          <ul
            css={css`
              margin: 0;
              padding: 0;
              list-style: none;
            `}
          >
            {commentList.map(() => {
              return (
                <li
                  css={css`
                    margin-top: 29px;
                    padding-top: 29px;
                    border-top: 1px solid #eeeeee;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      gap: 12px;
                    `}
                  >
                    {/* IMG */}
                    <img
                      css={css`
                        width: 45px;
                        height: 45px;
                      `}
                      src={Profile}
                      alt=""
                    />
                    {/* info */}
                    <div>
                      {/* top */}
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          gap: 20px;
                        `}
                      >
                        <E_S2>Hello</E_S2>
                        <E_B1
                          css={css`
                            color: #bdbdbd;
                          `}
                        >
                          약 3시간 전
                        </E_B1>
                      </div>
                      {/* bottom */}
                      <B1
                        css={css`
                          color: #616161;
                        `}
                      >
                        비트와이즈 애셋 매니지먼트의 라이언 라스무센
                        애널리스트는 "오늘이 비트코인 선물 결제일인 점이 가격
                        급등에 기여하고 있다.
                      </B1>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          {/* Input */}
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-radius: 100px;
              margin-top: 29px;
              margin-bottom: 33px;
              padding: 9px 22px;
              background-color: #e0edff;
            `}
          >
            <input
              css={css`
                width: 90%;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -0.2px;
                border: none;
                background-color: #e0edff;
                outline: none;

                &::placeholder {
                  color: #bdbdbd;
                }
              `}
              type="text"
              placeholder="댓글을 입력해 주세요."
            />
            <img src={SendBtn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
