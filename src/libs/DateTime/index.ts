export class DateTime {
  private readonly value: Date;

  private constructor(value: Date) {
    this.value = value;
  }

  static now(): DateTime {
    return new DateTime(new Date());
  }

  static fromDate(date: Date) {
    return new DateTime(date);
  }

  toDate(): Date {
    return this.value;
  }
}
