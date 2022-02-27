
interface ISetTimeInDateWithoutChangeTimezoneData {
  dateTime: any;
  hourTime: any;
  minuteTime: any;
}
export const setTimeInDateWithoutChangeTimezone = (data: ISetTimeInDateWithoutChangeTimezoneData) => {
  const { dateTime, hourTime, minuteTime } = data;
  let currentTime = new Date();
  let serverDateTimeWithTime = dateTime?.setHours(parseInt(hourTime) - (currentTime.getTimezoneOffset() / 60), 0, 0, 0);
  serverDateTimeWithTime = dateTime?.setMinutes((parseInt(minuteTime) - currentTime.getTimezoneOffset()) % 60);
  let serverDateTime = new Date(serverDateTimeWithTime);

  return (serverDateTime);
}