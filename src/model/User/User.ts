import { UUID } from '@/libs/UUID';
import { Id, Email, Name, Type } from './vo';

export class User {
  readonly id: Id;
  readonly email: Email;
  readonly name: Name;
  readonly type: Type;

  private constructor(id: Id, name: Name, email: Email, type: Type) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.type = type;
  }

  static visitor(): User {
    return new User(
      new Id(UUID.timeStamp()),
      new Email(''),
      new Name(''),
      Type.Visitor
    );
  }
}
