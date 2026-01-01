type ResultDataType = {
  additionalInfo: {
    chunEul: string;
    gongMang: string;
    myungGung: string;
    wolRyung: string;
  };
  defaultLuck: {
    bigLuck: {
      image: {
        top: string[];
        bottom: string[];
      };
      text: {
        lifeCycle: string[];
        number: string[];
        sinsal: string[];
        yuksin: {
          top: string[];
          bottom: string[];
        };
      };
    };
    monthlyLuck: {
      top: {
        image: string[];
        yuksin: string[];
      };
      bottom: {
        yuksin: string[];
        lifeCycle: string[];
        sinsal: string[];
      };
    };
    smallLuck: {
      image: {
        top: string[];
        bottom: string[];
      };
      text: {
        lifeCycle: string[];
        number: string[];
        sinsal: string[];
        yuksin: {
          top: string[];
          bottom: string[];
        };
      };
    };
  };
  fiveElements: string[];
  hiddenTop: string[][];
  userInfo: {
    name: string;
    gender: string;
    lunarDate: string;
    solarDate: string;
  };
  wonkuk: {
    image: {
      top: string[];
      bottom: string[];
    };
    text: {
      top: string[];
      bottom: string[];
      lifeCycle: string[];
      sinsalA: string[];
    };
  };
};

type FucTypes<T = void> = {
  null: () => T;
  number: (number: number) => T;
  year: (year: number) => T;
  Date: (date: Date) => T;
  saju: (saju: SajuType) => T;
  top: (top: number) => T;
  bottom: (bottom: number) => T;
  jiji: (jiji: number) => T;
  "saju&index": (saju: SajuType, index: number) => T;
  "ilgan&element": (ilgan: number, element: number) => T;
  "chunGan&jiji": (chunGan: number, jiji: number) => T;
  "ilgan&jiji": (ilgan: number, jiji: number) => T;
  "jijiA&jijiB": (jijiA: number, jijiB: number) => T;
  "yearBottom&element": (yearBottom: number, element: number) => T;
};

type InputTypes = null | number | Date | keyof FucTypes;

type FucType<TIn extends InputTypes = null, TOut = void> = TIn extends number
  ? FucTypes<TOut>["number"]
  : TIn extends Date
  ? FucTypes<TOut>["Date"]
  : TIn extends
      | "year"
      | "saju"
      | "jiji"
      | "saju&index"
      | "ilgan&element"
      | "chunGan&jiji"
      | "top"
      | "bottom"
      | "ilgan&jiji"
      | "jijiA&jijiB"
      | "yearBottom&element"
  ? FucTypes<TOut>[TIn]
  : TIn extends null
  ? FucTypes<TOut>["null"]
  : never;

type UserType = {
  name: string;
  gender: boolean;
  solarDate: Date;
  lunarDate: Date;
  age: number;
  fullAge: number;
  calculateFullAge: () => number;
};

type StandardDateType = {
  stdThis: Date;
  stdPrev: Date;
  stdNext: Date;
  leapYear: number;
  betweenDays: number;
  isDatePassed: boolean;
  timeDifference: Date;
  percentage: number;
  setStd: FucType<Date, Date>;
  setPrevAndNext: FucType<Date, Date[]>;
  countBetweenDays: FucType<Date, number>;
  applyTimeDiff: FucType<Date, Date>;
  setPercentage: FucType<Date, number>;
};

type SajuType = {
  wonkuk: number[][];
  stdDate: StandardDateType;
  bongi: number[];
  ilgan: number;
  setYearTop: FucType<"year", number>;
  setYearBottom: FucType<"year", number>;
  setMonthTop: FucType<Date, number>;
  setMonthBottom: FucType<Date, number>;
  setDayTop: FucType<Date, number>;
  setDayBottom: FucType<Date, number>;
  setTimeTop: FucType<Date, number>;
  setTimeBottom: FucType<Date, number>;
  applyLateZiHour: FucType<Date, number>;
  getPreviousTop: FucType<"top", number>;
  getPreviousBottom: FucType<"bottom", number>;
  getNextTop: FucType<"top", number>;
  getNextBottom: FucType<"bottom", number>;
  setBongi: FucType;
  getBongi: FucType<"jiji", number>;
  isOdd: FucType<number, boolean>;
};

type SajuInfoType = {
  sajuLuck: {
    rangeIndex: number;
    firstBigLuck: Date;
    bigLuckNumber: number;
    getBigLuckTopByIndex: FucType<"saju&index", number>;
    getBigLuckBottomByIndex: FucType<"saju&index", number>;
  };
  sajuYuksin: {
    ilgan: number;
    yuksin: string[][];
    setYuksin: FucType<"saju">;
    getYuksin: FucType<"ilgan&element", string>;
  };
  sajuLifeCycle: {
    lifeCycle: string[];
    getLifeCycle: FucType<"ilgan&element", string | undefined>;
    setLifeCycle: FucType<"saju">;
  };
  sajuFiveElements: {
    fiveElements: number[];
    setFiveElements: FucType<"saju">;
  };
  sajuSinsal: {
    sinsal: string[];
    gongMang: number[];
    chunEul: number[];
    nokGong: boolean[];
    whiteTiger: boolean[];
    wonjin: number[];
    yangin: boolean[];
    leaderStar: boolean[];
    myungGung: number;
    getSinsalCycle: FucType<"yearBottom&element", string | undefined>;
    setSinsal: FucType<"saju">;
    setGongMang: FucType<"saju">;
    isNokGong: FucType<"chunGan&jiji", boolean>;
    isWhiteTiger: FucType<"chunGan&jiji", boolean>;
    isYangin: FucType<"ilgan&jiji", boolean>;
    isWonjin: FucType<"jijiA&jijiB", boolean>;
    setWonJin: FucType<"saju">;
    isLeaderStar: FucType<"chunGan&jiji", boolean>;
    setSinsals: FucType<"saju">;
    setMyungGung: FucType<"saju">;
    setChunEul: FucType<"saju">;
  };
  sajuHiddenTop: {
    hiddenTop: number[][];
    existingTop: number[];
    wolRyung: number;
    setHiddenTop: FucType<"saju">;
    findNotExistingTop: FucType<"saju">;
    setWolRyung: FucType<"saju">;
  };
};

type LuckTextType = {
  big: ResultDataType["defaultLuck"]["bigLuck"]["text"];
  small: ResultDataType["defaultLuck"]["smallLuck"]["text"];
  month: {
    top: {
      yuksin: ResultDataType["defaultLuck"]["monthlyLuck"]["top"]["yuksin"];
    };
    bottom: ResultDataType["defaultLuck"]["monthlyLuck"]["bottom"];
  };
};

type LuckImageType = {
  big: ResultDataType["defaultLuck"]["bigLuck"]["image"];
  small: ResultDataType["defaultLuck"]["smallLuck"]["image"];
  month: ResultDataType["defaultLuck"]["monthlyLuck"]["top"]["image"];
};

export type {
  FucType,
  ResultDataType,
  UserType,
  SajuType,
  SajuInfoType,
  LuckTextType,
  LuckImageType,
};
