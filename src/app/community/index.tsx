import CommunityCreateBtn from "@/components/app/community/community-createBtn";
import CommunityTab from "@/components/app/community/community-tab";
import { Fragment } from "react";

export default function CommunityPage() {
  return (
    <Fragment>
      <CommunityCreateBtn></CommunityCreateBtn>
      <CommunityTab></CommunityTab>
    </Fragment>
  );
}
