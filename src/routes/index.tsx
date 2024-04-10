import CommunityPage from "@/app/community";
import PredictPage from "@/app/predict";
import GlobalLayout from "@/components/layout";
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";
import SignIn from "@/app/signin";

const routerChildren: RouteObject[] = [
  {
    path: "/",
    element: <PredictPage />,
  },
  {
    path: "/predict",
    element: <PredictPage />,
  },
  {
    path: "/community",
    element: <CommunityPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
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
