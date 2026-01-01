import type { DateType } from "../types";

function getDateWithSeparator(dateString: Date, separator: string = "/") {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [
    String(year),
    String(month).padStart(2, "0"),
    String(day).padStart(2, "0"),
  ].join(separator);
}

function getTimeWithSeparator(
  dateString: Date,
  secondVisible: boolean = false,
  separator: string = ":"
) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const time = [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
  ];

  if (secondVisible) time.push(String(seconds).padStart(2, "0"));

  return time.join(separator);
}

const getYearList = (
  type: "start" | "end",
  date: DateType,
  startRange = 1950,
  endRange = 2099
): number[] => {
  let Date = Number(date);
  const list = [];

  if (type === "start") {
    while (Date >= startRange) {
      list.push(Date);
      Date--;
    }
  } else if (type === "end") {
    while (Date <= endRange) {
      list.push(Date);
      Date++;
    }
  }

  return list;
};

const formatTime = (value: string) => {
  const rawValue = value.replace(/\D/g, "");

  if (rawValue.length === 4) {
    let hours = parseInt(rawValue.slice(0, 2), 10),
      minutes = parseInt(rawValue.slice(2), 10);

    if (hours > 23) {
      hours = 0;
      minutes = 0;
    } else if (minutes > 59) minutes = 0;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  }

  return value;
};

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

const formatDate = (value: string) => {
  let rawValue = value.replace(/\D/g, "");

  if (rawValue.length > 8) {
    rawValue = rawValue.slice(0, 8);
  }

  const year = rawValue.slice(0, 4);
  let month = rawValue.slice(4, 6);
  let day = rawValue.slice(6, 8);

  if (rawValue.length >= 6) {
    let numericMonth = parseInt(month, 10);

    if (numericMonth < 1) numericMonth = 1;
    if (numericMonth > 12) numericMonth = 12;
    month = String(numericMonth).padStart(2, "0");
  }

  if (rawValue.length === 8) {
    const numericYear = parseInt(year, 10);
    const numericMonth = parseInt(month, 10);
    let numericDay = parseInt(day, 10);

    const maxDays = getDaysInMonth(numericYear, numericMonth);

    if (numericDay < 1) numericDay = 1;
    if (numericDay > maxDays) numericDay = maxDays;
    day = String(numericDay).padStart(2, "0");
  }

  let formattedDate = year;
  if (rawValue.length > 4) formattedDate += `/${month}`;
  if (rawValue.length > 6) formattedDate += `/${day}`;

  return formattedDate;
};

export {
  getDateWithSeparator,
  getTimeWithSeparator,
  getYearList,
  formatTime,
  formatDate,
};
