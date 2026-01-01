import { createContext } from "react";
import type { MainScrollContextType } from "../types";

export const MainScrollContext = createContext<MainScrollContextType | null>(
  null
);
