import CommunityPage from "@/app/community";
import PredictPage from "@/app/predict";
import GlobalLayout from "@/components/layout";
import {
  RouterProvider,
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

import SignIn from "@/app/signin";
import SignUp from "@/app/signup";
import Complete from "@/app/signup/complete";
import Consent from "@/app/signup/consent";
import HomePage from "@/app/home";
import Carousel from "@/components/common/carousel";
import News from "@/app/news";
import Oauth2Redirect from "@/app/oauth2/redierct";

const routerChildren: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
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
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/consent",
    element: <Consent />,
  },
  {
    path: "/complete",
    element: <Complete />,
  },
  {
    path: "/carousel",
    element: <Carousel />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/oauth2/redirect",
    element: <Oauth2Redirect />,
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
