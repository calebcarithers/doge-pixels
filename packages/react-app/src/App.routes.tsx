import { generatePath } from "react-router-dom";
import { RouteMiddleware } from "./services/middleware";
import { FC } from "react";
import AppLayout from "./layouts/AppLayout";
import ViewerPage from "./pages/Viewer/Viewer.page";
import PoolStatsPage from "./pages/PoolStats/PoolStats.page";
import ScaffoldIndex from "./pages/ScaffoldEth/ScaffoldIndex";
import Scaffold from "./pages/ScaffoldEth/Scaffold";
import BlankLayout from "./layouts/BlankLayout";
import DSLPage from "./pages/DSL.page";

export enum NamedRoutes {
  VIEWER = "viewer",
  POOLSTATS = "stats",
  DEV = "dev",
  DSL = "dsl",
}

export interface AppRouteInterface {
  path: string;
  exact: boolean;
  name?: NamedRoutes;
  layout: FC;
  component: FC | any;
  middleware?: RouteMiddleware;
  title: string;
}

export const route = (name: NamedRoutes, params: any = {}) => {
  const route = routes.find(item => item.name === name);
  if (!route) {
    throw new TypeError("Unknown named route: " + name);
  }
  if (params) {
    return generatePath(route.path, params);
  } else {
    return route.path;
  }
};

const routes: AppRouteInterface[] = [
  {
    path: "/",
    name: NamedRoutes.VIEWER,
    exact: true,
    layout: AppLayout,
    component: ViewerPage,
    title: "viewer",
  },
  {
    path: "/stats",
    name: NamedRoutes.POOLSTATS,
    exact: true,
    layout: AppLayout,
    component: PoolStatsPage,
    title: "stats",
  },
  {
    path: "/dsl",
    name: NamedRoutes.DSL,
    exact: true,
    layout: AppLayout,
    component: DSLPage,
    title: "dsl",
  },
  {
    path: "/scaffold",
    name: NamedRoutes.DEV,
    exact: true,
    layout: BlankLayout,
    component: Scaffold,
    title: "scaffold",
  },
];
export default routes;