import { UUID } from '@/libs/UUID';
import { Email, Id, Name, Type } from './vo';

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

  static general(id: Id, name: Name, email: Email): User {
    return new User(id, name, email, Type.General);
  }

  static visitor(uuid: string = UUID.timeStamp()): User {
    return new User(
      new Id(uuid),
      new Name('visitor'),
      new Email(''),
      Type.Visitor
    );
  }

  isVisitor(): boolean {
    return this.type === Type.Visitor;
  }
}
