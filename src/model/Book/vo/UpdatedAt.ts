import { DateTime } from '@/libs/DateTime';

export class UpdatedAt {
  readonly value: DateTime;
  constructor(value: DateTime) {
    this.value = value;
  }
}
