import { Fragment, useEffect, useState } from "react";
import { css } from "@emotion/react";
import CommunityBoard from "@/components/app/community/community-board";
import CommunityCreateBtn from "@/components/app/community/community-createBtn";
import CommunityHotBoard from "@/components/app/community/community-hotBoard";
import CommunitySearch from "@/components/app/community/community-search";
import CommunityTab from "@/components/app/community/community-tab";
import {
  UseApiCommunity,
  UseInfiniteApiCommunity,
} from "@/hooks/api/community/UseApiComminity";
import Fire from "@/assets/Fire.png";
import Banner from "@/assets/community-banner.png";
import {
  BoardModal,
  ModalPortal,
} from "@/components/common/modal/board-modal.tsx";
import {
  BREAK_POINTS,
  DESIGN_SYSTEM_COLOR,
  DESIGN_SYSTEM_TEXT,
} from "@/style/variable";
import { CommunityBoardType } from "@/components/app/community/type";
import { useInView } from "react-intersection-observer";
import { useApiMemberInfo } from "@/hooks/api/member/useApiMemberInfo";

export default function CommunityPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [communityCategory, setCommunityCategory] = useState("");

  const [communitySort, setCommunitySort] = useState("&sort=createdAt,desc");

  const [communitySearchWord, setCommunitySearchWord] = useState("");

  const { data } = useApiMemberInfo();

  const [modal, setModal] = useState(false);

  const [ref, inView] = useInView();

  const {
    data: dataSet,
    hasNextPage,
    fetchNextPage,
  } = UseInfiniteApiCommunity({
    sort: communitySort,
    category: communityCategory,
    searchWord: communitySearchWord,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const hotBoard = UseApiCommunity({
    page: `page=0`,
    size: `&size=5`,
    sort: "",
    category: "",
    searchWord: "",
  });

  const handleCommunitySort = (sort: string) => {
    setCommunitySort(sort);
  };

  const handleCommunityCategory = (category: string) => {
    setCommunityCategory(category);
  };

  const handleCommunitySearchWord = (word: string) => {
    setCommunitySearchWord(word);
  };

  const createBoardModal = () => {
    setModal(true);
  };

  return (
    <Fragment>
      {modal && (
        <ModalPortal>
          <BoardModal setModalState={setModal} />
        </ModalPortal>
      )}
      <div
        css={css`
          width: 100%;
          height: 32.2rem;
          position: relative;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          `}
          src={Banner}
          alt=""
        />
        {/* CONTENT */}
        <div
          css={css`
            max-width: 112.5rem;
            height: 100%;
            margin: 0 auto;

            display: flex;
            flex-direction: column;
            justify-content: center;

            ${BREAK_POINTS.TABLET} {
              max-width: 72.7rem;
            }

            ${BREAK_POINTS.MOBILE} {
              max-width: 36rem;
              justify-content: end;
              padding-bottom: 4.5rem;
            }
          `}
        >
          {/* TITLE */}
          <div
            css={css`
              margin-bottom: 0.8rem;
              & h1 {
                ${DESIGN_SYSTEM_TEXT.E4}
                color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
                line-height: 5.6rem;
                margin: 0;

                ${BREAK_POINTS.TABLET} {
                  ${DESIGN_SYSTEM_TEXT.T4}
                  height: 3.2rem;
                }

                ${BREAK_POINTS.MOBILE} {
                  ${DESIGN_SYSTEM_TEXT.T4}
                  height: 3.2rem;
                }
              }
            `}
          >
            <h1>함께 성장하는 요즘 사람들의</h1>
            <h1>코인 커뮤니티</h1>
          </div>
          {/* SUB TEXT */}
          <span
            css={css`
              ${DESIGN_SYSTEM_TEXT.B1}
              color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
            `}
          >
            트렌드, 테크, 경제, 미디어 등 알차고 재밌는 소식을 전달드립니다.
          </span>
        </div>
      </div>
      <div
        css={css`
          margin: 3.5rem auto;
          max-width: 111.6rem;
          display: flex;
          gap: 5.4rem;

          ${BREAK_POINTS.TABLET} {
            max-width: 72.1rem;
          }

          ${BREAK_POINTS.MOBILE} {
            max-width: 32rem;
          }
        `}
      >
        <main
          css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 4.2rem;

            ${BREAK_POINTS.TABLET} {
              gap: 3rem;
            }

            ${BREAK_POINTS.MOBILE} {
              gap: 3rem;
            }
          `}
        >
          <CommunityCreateBtn
            onClick={createBoardModal}
            profile={data?.data?.data?.profile || ""}
          ></CommunityCreateBtn>
          <div
            css={css`
              gap: 1.4rem;
              display: none;

              ${BREAK_POINTS.TABLET} {
                display: block;
              }

              ${BREAK_POINTS.MOBILE} {
                display: block;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1.7rem;
              `}
            >
              <img
                css={css`
                  width: 2.4rem;
                  height: 2.4rem;
                `}
                src={Fire}
                alt="커서 이미지"
              />
              <span
                css={css`
                  ${DESIGN_SYSTEM_TEXT.S1}

                  ${BREAK_POINTS.MOBILE} {
                    ${DESIGN_SYSTEM_TEXT.B1_BOLD}
                  }
                `}
              >
                가장 많이 읽은 글
              </span>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
                background-color: ${DESIGN_SYSTEM_COLOR.GRAY_50};
                border: 1px solid ${DESIGN_SYSTEM_COLOR.GRAY_100};
                border-radius: 100px;
                padding: 1rem 2.6rem;
              `}
            >
              <span
                css={css`
                  ${DESIGN_SYSTEM_TEXT.B2};
                  color: ${DESIGN_SYSTEM_COLOR.BRAND_BLUE};
                `}
              >
                1
              </span>
              <span
                css={css`
                  display: block;
                  ${DESIGN_SYSTEM_TEXT.B2};
                  color: ${DESIGN_SYSTEM_COLOR.GRAY_800};
                  margin-left: 1rem;
                `}
              >
                {hotBoard.data && hotBoard.data.content[0].title}
              </span>
            </div>
          </div>
          <CommunityTab
            onClickCategoryTab={handleCommunityCategory}
            onClickSortTab={handleCommunitySort}
          ></CommunityTab>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              gap: 5rem;
            `}
          >
            {dataSet?.pages.map(({ content }) => {
              console.log(dataSet);
              return (
                <Fragment>
                  {(content as CommunityBoardType[]).map((item) => {
                    return (
                      <CommunityBoard
                        key={item.boardId}
                        {...item}
                        myInfo={
                          data?.data.data || {
                            name: "",
                            email: "",
                            id: 0,
                            nickname: "",
                            profile: "",
                          }
                        }
                      />
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
          <span
            ref={ref}
            css={css`
              height: 1rem;
            `}
          ></span>
        </main>
        <aside
          css={css`
            display: flex;
            flex-direction: column;
            gap: 4.7rem;

            ${BREAK_POINTS.TABLET} {
              display: none;
            }

            ${BREAK_POINTS.MOBILE} {
              display: none;
            }
          `}
        >
          <CommunitySearch
            onSearchWord={handleCommunitySearchWord}
            onClickTag={handleCommunityCategory}
          ></CommunitySearch>
          <CommunityHotBoard></CommunityHotBoard>
        </aside>
      </div>
    </Fragment>
  );
}
