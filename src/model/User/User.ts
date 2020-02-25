import { Id } from './Id';
import { Type } from './Type';
import { Email } from './Email';
import { UUID } from '@/libs/UUID';

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
