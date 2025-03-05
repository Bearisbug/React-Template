import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // 主页 `/`
//   route("about", "routes/about.tsx"), // 新增导航模版
] satisfies RouteConfig;
