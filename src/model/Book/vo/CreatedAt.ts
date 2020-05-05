import { DateTime } from '@/libs/DateTime';

export class CreatedAt {
  readonly value: DateTime;
  constructor(value: DateTime) {
    this.value = value;
  }
}
