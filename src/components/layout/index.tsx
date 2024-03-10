import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import "@/style/global.css";

export default function GlobalLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
