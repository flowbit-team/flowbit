import CommunityCreateBtn from "@/components/app/community/community-createBtn";
import CommunitySearch from "@/components/app/community/community-search";
import CommunityTab from "@/components/app/community/community-tab";
import { Fragment } from "react";

export default function CommunityPage() {
  return (
    <Fragment>
      <CommunityCreateBtn></CommunityCreateBtn>
      <CommunityTab></CommunityTab>
      <CommunitySearch></CommunitySearch>
    </Fragment>
  );
}
