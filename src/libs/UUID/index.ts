import { v4 as random, v1 as timeStamp } from 'uuid';

export class UUID {
  static random(): string {
    return random();
  }

  static timeStamp(): string {
    return timeStamp();
  }
}
