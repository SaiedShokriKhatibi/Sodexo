import {EnglishToTurkishDaysOfWeek, EnglishToTurkishMonth} from "./constants/allMockedData";

export const nowDateTime = new Date();

export const currentYear = nowDateTime.getFullYear();

export const createMockDropdownData = (startFrom : number, count : number) =>  {
  let mockDropdownDataList = [];
  for (let i = 0; i < count; i++) {
    mockDropdownDataList.push({
      label: `${startFrom + i}`,
      value: `${startFrom + i}`,
    });
  }
  return mockDropdownDataList
};

export const isObjectEmpty = object => {

  return Object.keys(object).length === 0 && object.constructor === Object
};

export const lowercaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const changePaymentDetailInfoDateLocale = (date) => {
  const localeCourseDateTime = date;
  const englishMonths = EnglishToTurkishMonth.map(month => month.EN);
  const englishDaysOfWeek = EnglishToTurkishDaysOfWeek.map(day => day.EN);
  const englishMonth = englishMonths.find(month => localeCourseDateTime.includes(month));
  const englishDay = englishDaysOfWeek.find(day => localeCourseDateTime.includes(day));
  const searchMonth = EnglishToTurkishMonth.filter(month => month.EN === englishMonth);
  const searchDay = EnglishToTurkishDaysOfWeek.filter(day => day.EN === englishDay);
  const finalLocaleCourseDateTime = localeCourseDateTime.replace(englishMonth, searchMonth[0].TRY);
  return finalLocaleCourseDateTime.replace(englishDay, searchDay[0].TRY);
};
export const reducer = (accumulator, curr) => accumulator + curr;

export const minutesToHourFormat = (minutesCount) => {
  let hours = Math.floor(minutesCount / 60);
  let minutes = minutesCount % 60;
  return minutes === 0 ? hours + "h" : hours === 0 ? minutes + "m": hours + "h, " + minutes + "m";
};