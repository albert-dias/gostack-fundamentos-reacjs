import { utcToZonedTime, format } from 'date-fns-tz';

const formattedDate = (value: Date): string => {
  const timeZone = 'America/Fortaleza';
  const zonedDate = utcToZonedTime(value, timeZone);

  const pattern = 'dd-MM-yyyy';
  const output = format(zonedDate, pattern, { timeZone });
  return output;
};

export default formattedDate;
