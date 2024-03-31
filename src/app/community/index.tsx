import CommunityBoard from "@/components/app/community/community-board";
import CommunityCreateBtn from "@/components/app/community/community-createBtn";
import CommunityHotBoard from "@/components/app/community/community-hotBoard";
import CommunitySearch from "@/components/app/community/community-search";
import CommunityTab from "@/components/app/community/community-tab";
import { Fragment } from "react";

export default function CommunityPage() {
  return (
    <Fragment>
      <CommunityCreateBtn></CommunityCreateBtn>
      <CommunityTab></CommunityTab>
      <CommunitySearch></CommunitySearch>
      <CommunityHotBoard></CommunityHotBoard>
      <CommunityBoard></CommunityBoard>
    </Fragment>
  );
}
