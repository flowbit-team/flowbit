import React from "react";
import { createRoot } from "react-dom/client";
import { Routers } from "./routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
);
