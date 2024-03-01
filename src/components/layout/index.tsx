import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
