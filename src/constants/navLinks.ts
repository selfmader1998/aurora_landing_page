import { paths } from "./paths";

const navLinks = {
  home: {
    title: { title: "홈", link: paths.HOME },
  },
  service: {
    title: { title: "서비스", link: paths.SERVICE.ROOT },
  },
  introduce: {
    title: { title: "회사 소개", link: paths.INTRO },
  },
} as const;

export { navLinks };
