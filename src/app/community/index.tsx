import CommunityBoard from "@/components/app/community/community-board";
import CommunityCreateBtn from "@/components/app/community/community-createBtn";
import CommunityHotBoard from "@/components/app/community/community-hotBoard";
import CommunitySearch from "@/components/app/community/community-search";
import CommunityTab from "@/components/app/community/community-tab";
import { css } from "@emotion/react";
import { Fragment } from "react";

export default function CommunityPage() {
  return (
    <Fragment>
      {/* Hero */}
      <div
        css={css`
          width: 100%;
          height: 322px;
          background-color: black;
        `}
      ></div>
      <div
        css={css`
          margin: 35px auto;
          max-width: 1116px;
          display: flex;
          gap: 120px;
        `}
      >
        <main
          css={css`
            display: flex;
            flex-direction: column;
            gap: 42px;
          `}
        >
          <CommunityCreateBtn></CommunityCreateBtn>
          <CommunityTab></CommunityTab>
          <div>
            <CommunityBoard></CommunityBoard>
          </div>
        </main>
        <aside
          css={css`
            display: flex;
            flex-direction: column;
            gap: 47px;
          `}
        >
          <CommunitySearch></CommunitySearch>
          <CommunityHotBoard></CommunityHotBoard>
        </aside>
      </div>
    </Fragment>
  );
}
