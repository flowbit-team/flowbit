import Test from "@/components/app/Test";
import GlobalLayout from "@/components/layout";
import DefaultLayout from "@/components/layout/default";
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

const routerChildren: RouteObject[] = [
  {
    path: "/",
    element: <Test />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: routerChildren,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
