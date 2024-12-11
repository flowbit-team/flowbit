import { css } from "@emotion/react";
import { CommunityBoardType } from "./type";
import {
  BREAK_POINTS,
  DESIGN_SYSTEM_COLOR,
  DESIGN_SYSTEM_TEXT,
} from "@/style/variable";
import moment from "moment";
import Collapse from "@/assets/collapse.svg";
import Heart from "@/assets/heart.svg";
import DefaultHeart from "@/assets/heart-default.svg";
import IconButton from "@/components/common/icon-button";
import Comment from "@/assets/comment.svg";
import DefaultComment from "@/assets/comment-default.svg";
import Share from "@/assets/share.svg";
import SendBtn from "@/assets/sendBtn.svg";
import { useApiPostComment } from "@/hooks/api/community/useApiPostComment";
import { useEffect, useState } from "react";
import { useApiPostLike } from "@/hooks/api/community/useApiPostLike";
import { useApiDeleteLike } from "@/hooks/api/community/useApiDeleteLike";

const IMG_URL = import.meta.env.VITE_IMG_URL as string;

export default function CommunityBoard(
  props: CommunityBoardType & {
    myInfo: {
      email: string;
      id: number;
      name: string;
      nickname: string;
      profile: string;
    };
  },
) {
  const {
    title,
    content,
    nickname,
    profile,
    comments,
    boardLikeCount,
    boardCommentCount,
    createTime,
    boardId,
    isBoardLike,
    myInfo,
  } = props;

  const getTimeOffsetFromNow = (postedAt: string) => {
    const diffUnixTime = (moment().unix() - moment(postedAt).unix()) * 1000;
    const hour = Math.floor(diffUnixTime / (1000 * 60 * 60));

    if (hour >= 24) {
      return `약 ${Math.floor(hour / 24)}일 전`;
    } else if (hour > 1) {
      return `약 ${hour}시간 전`;
    } else {
      return "최근 등록";
    }
  };

  const [commentList, setCommentList] = useState(comments);
  const [likeCount, setLikeCount] = useState(boardLikeCount);
  const [isLike, setIsLike] = useState(isBoardLike);

  const [comment, setComment] = useState("");
  const { mutate: postComment, isSuccess: isSuccessOfPost } =
    useApiPostComment();
  const { mutate: updateLike, isSuccess: isSuccessOfUpdateLike } =
    useApiPostLike();
  const { mutate: deleteLike, isSuccess: isSuccessOfDeleteLike } =
    useApiDeleteLike();

  useEffect(() => {
    if (isSuccessOfPost) {
      const { email, id, nickname, profile } = myInfo;
      setCommentList((props) => [
        ...props,
        {
          memberEmail: email,
          profile: profile,
          createTime: "최근등록",
          content: comment,
          commentId: 0,
          memberId: id,
          name: nickname,
        },
      ]);
      setComment("");
    }
  }, [isSuccessOfPost, myInfo]);

  useEffect(() => {
    if (isSuccessOfUpdateLike) {
      setIsLike(true);
      setLikeCount((props) => props + 1);
    }
  }, [isSuccessOfUpdateLike]);

  useEffect(() => {
    if (isSuccessOfDeleteLike) {
      setIsLike(false);
      setLikeCount((props) => props - 1);
    }
  }, [isSuccessOfDeleteLike]);

  return (
    <div>
      {/* User */}
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 2.4rem;
          margin-bottom: 1rem;

          ${BREAK_POINTS.TABLET} {
            margin-bottom: 3.2rem;
          }

          ${BREAK_POINTS.MOBILE} {
            margin-bottom: 2.4rem;
          }
        `}
      >
        {/* Profile */}
        <img
          css={css`
            width: 5.5rem;
            height: 5.5rem;
            border-radius: 100%;
          `}
          src={`${IMG_URL}/${profile}`}
          alt="profile"
        />
        {/* Info */}
        <div>
          {/* Name */}
          <div
            css={css`
              margin-bottom: 0.3rem;
            `}
          >
            <span
              css={css`
                ${DESIGN_SYSTEM_TEXT.E_S2}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              `}
            >
              {nickname}
            </span>
            <span
              css={css`
                ${DESIGN_SYSTEM_TEXT.E_S3}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              `}
            >
              님이 공유했어요.
            </span>
          </div>
          {/* Time */}
          <span
            css={css`
              ${DESIGN_SYSTEM_TEXT.E_B1}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_400};
            `}
          >
            {getTimeOffsetFromNow(createTime)}
          </span>
        </div>
      </div>
      {/* Board */}
      <div
        css={css`
          display: flex;
          width: 100%;
          gap: 2.4rem;
        `}
      >
        {/* Empty div */}
        <div
          css={css`
            min-width: 5.5rem;

            ${BREAK_POINTS.TABLET} {
              display: none;
            }
            ${BREAK_POINTS.MOBILE} {
              display: none;
            }
          `}
        ></div>
        <div
          css={css`
            width: 100%;
            padding: 1rem 3.5rem;
            border: 0.1rem solid #f5f5f5;
            border-radius: 1rem;
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
              margin-bottom: 1.7rem;
            `}
          >
            <span
              css={css`
                ${DESIGN_SYSTEM_TEXT.T4}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
              `}
            >
              {title}
            </span>
          </div>
          {/* Description */}
          <div
            css={css`
              margin-bottom: 2.3rem;
            `}
          >
            <div
              id="content"
              contentEditable={false}
              dangerouslySetInnerHTML={{ __html: content }}
              css={css`
                ${DESIGN_SYSTEM_TEXT.B1}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_700};
              `}
            ></div>
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
                gap: 4.6rem;
              `}
            >
              {/* Button */}
              <IconButton
                onClick={() => {
                  if (isLike) {
                    deleteLike(boardId);
                  } else {
                    updateLike(boardId);
                  }
                }}
                src={isLike ? Heart : DefaultHeart}
              >
                {likeCount}
              </IconButton>
              <IconButton src={boardCommentCount ? Comment : DefaultComment}>
                {boardCommentCount}
              </IconButton>
              <IconButton src={Share} />
            </div>
          </div>
          {/* Comment List */}
          <ul
            css={css`
              margin: 0;
              padding: 0;
              list-style: none;

              max-height: 50rem;
              overflow-y: scroll;

              &::-webkit-scrollbar-track,
              &::-webkit-scrollbar-button {
                display: none;
              }
            `}
          >
            {commentList.map((row) => {
              return (
                <li
                  key={row.commentId}
                  css={css`
                    margin-top: 2.9rem;
                    padding-top: 2.9rem;
                    border-top: 0.1rem solid ${DESIGN_SYSTEM_COLOR.GRAY_200};
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      gap: 1.2rem;
                    `}
                  >
                    {/* IMG */}
                    <img
                      css={css`
                        width: 4.5rem;
                        height: 4.5rem;
                        border-radius: 100%;
                      `}
                      src={`${IMG_URL}/${row.profile}`}
                      alt=""
                    />
                    {/* info */}
                    <div>
                      {/* top */}
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          gap: 1.5rem;
                          margin-bottom: 0.8rem;
                        `}
                      >
                        <span
                          css={css`
                            ${DESIGN_SYSTEM_TEXT.E_S2}
                            color: ${DESIGN_SYSTEM_COLOR.GRAY_900};
                          `}
                        >
                          {row.name}
                        </span>
                        <span
                          css={css`
                            ${DESIGN_SYSTEM_TEXT.E_B1}
                            color: ${DESIGN_SYSTEM_COLOR.GRAY_400};
                          `}
                        >
                          {getTimeOffsetFromNow(row.createTime)}
                        </span>
                      </div>
                      {/* bottom */}
                      <div
                        css={css`
                          ${DESIGN_SYSTEM_TEXT.B1}
                          color: ${DESIGN_SYSTEM_COLOR.GRAY_700};
                        `}
                      >
                        {row.content}
                      </div>
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
              border-radius: 10rem;
              margin-top: 2.9rem;
              margin-bottom: 3.3rem;
              padding: 0.9rem 2.2rem;
              background-color: #e0edff;
            `}
          >
            <input
              css={css`
                ${DESIGN_SYSTEM_TEXT.B2}
                width: 90%;
                border: none;
                background-color: #e0edff;
                outline: none;

                &::placeholder {
                  color: #bdbdbd;
                }
              `}
              type="text"
              placeholder="댓글을 입력해 주세요."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <img
              src={SendBtn}
              alt=""
              onClick={() => {
                if (comment.length > 0) {
                  postComment({
                    boardId: props.boardId,
                    content: comment,
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
