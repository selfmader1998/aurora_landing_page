import { createContext } from "react";
import type { LinkContextType } from "../types";

export const LinkContext = createContext<LinkContextType | null>(null);
