import type { FontSizeType, FontWeightsType, LineHeightType } from "../types";

const FONT_SIZES: FontSizeType = {
  ["5xl"]: "36px",
  ["4xl"]: "32px",
  ["3xl"]: "28px",
  ["2xl"]: "24px",
  xl: "20px",
  lg: "18px",
  md: "16px",
  sm: "14px",
  xs: "12px",
  5: "10px",
  4: "8px",
  3: "6px",
  2: "4px",
  1: "2px",
};

const LINE_HEIGHTS: LineHeightType = {
  l: 24,
  m: 20,
  s: 16,
};

const FONT_WEIGHTS: FontWeightsType = {
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
};

const FONT_FAMILY = "Pretendard";

export { FONT_SIZES, LINE_HEIGHTS, FONT_WEIGHTS, FONT_FAMILY };
