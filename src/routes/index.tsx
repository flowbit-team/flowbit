import Test from "@/components/app/Test";
import GlobalLayout from "@/components/layout";
import ChartContainer from "@/components/common/chart";
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
  {
    path: "/chart",
    element: <ChartContainer />
  }
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
