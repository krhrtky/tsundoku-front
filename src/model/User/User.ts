import { UUID } from '@/libs/UUID';
import { Id } from './vo//Id';
import { Type } from './vo//Type';
import { Email } from './vo//Email';

export class User {
  readonly id: Id;
  readonly email: Email;
  readonly type: Type;

  private constructor(id: Id, email: Email, type: Type) {
    this.id = id;
    this.email = email;
    this.type = type;
  }

  static visitor(): User {
    return new User(new Id(UUID.timeStamp()), new Email(''), Type.Visitor);
  }
}
