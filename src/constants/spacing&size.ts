import type {
  MarginType,
  PaddingType,
  RadiusType,
  SpacingType,
} from "../types";

// 간격(gap)
const SPACING: SpacingType = {
  Details: {
    1: "2px",
    2: "6px",
    3: "10px",
  },
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
  17: "68px",
  18: "72px",
  19: "76px",
  20: "80px",
};

const MARGIN: MarginType = {
  Details: {
    1: SPACING.Details[1],
    2: SPACING.Details[2],
    3: SPACING.Details[3],
  },
  xs: SPACING[1],
  s: SPACING[2],
  m: SPACING[4],
  l: SPACING[6],
  xl: SPACING[10],
  xxl: SPACING[20],
};

const PADDING: PaddingType = {
  Details: {
    1: SPACING.Details[1],
    2: SPACING.Details[2],
    3: SPACING.Details[3],
  },
  xxs: SPACING[1],
  xs: SPACING[2],
  s: SPACING[3],
  m: SPACING[4],
  l: SPACING[6],
  xl: SPACING[8],
};

const RADIUS: RadiusType = {
  Details: {
    1: SPACING.Details[1],
    2: SPACING.Details[2],
    3: SPACING[2],
    4: SPACING.Details[3],
  },
  s: SPACING[1],
  m: SPACING[3],
  l: SPACING[5],
  xl: SPACING[7],
  xxl: SPACING[9],
  max: "9999px",
};

const TOUCH_SIZE = {
  min: "size-8",
  heightMin: "h-8",
  widthMin: "w-8",
};

export { SPACING, MARGIN, PADDING, RADIUS, TOUCH_SIZE };
