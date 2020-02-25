import dayjs from 'dayjs';

export class DateTime {
  static now(): Date {
    return dayjs().toDate();
  }
}
