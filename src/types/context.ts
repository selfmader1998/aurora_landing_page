import type { ThemeType } from "./colors";
import type { setState, state, useStateType } from "./hook";

type LinkContextType = {
  visible: useStateType<state, boolean>;
  setVisible: useStateType<setState, boolean>;
};

type ThemeContextType = {
  isDarkMode: useStateType<state, boolean>;
  setIsDarkMode: useStateType<setState, boolean>;
  THEME: ThemeType;
};

type MainScrollContextType = {
  isScrollVisible: boolean;
  setIsScrollVisible: useStateType<setState, boolean>;
};

export type { LinkContextType, ThemeContextType, MainScrollContextType };
