import PredictPage from "@/app/chart";
import CommunityPage from "@/app/community";
import Test from "@/components/app/Test";
import GlobalLayout from "@/components/layout";
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
    path: "/predict",
    element: <PredictPage />,
  },
  {
    path: "/community",
    element: <CommunityPage />,
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
