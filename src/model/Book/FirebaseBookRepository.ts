import * as firebase from 'firebase';
import { right, left } from 'fp-ts/lib/Either';
import { Status, Type } from '.';
import { BookRepository, UpdateResult } from './BookRepository';
import { RegisterInputData } from '@/usecase/book/Register';
import { useBooksContext } from '@/components/context';
import { UpdateInputData } from '@/usecase/book/Update';
import { DeleteInputData, DeleteOutputData } from '@/usecase/book';
import { Id as UserId } from '@/model/User';
import { UUID } from '@/libs/UUID';

type CollectionRow = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
};

type Collection = ReadonlyArray<CollectionRow>;

export class FirebaseBookRepository implements BookRepository {
  private readonly collection = firebase.firestore().collection('books');

  private readonly context = useBooksContext();

  async save(newBook: RegisterInputData): Promise<UpdateResult> {
    try {
      const book = {
        id: UUID.timeStamp(),
        ...newBook
      };
      await this.collection.add(book);
      this.context.action.register(book);

      return right(null);
    } catch (e) {
      return left('register failed.');
    }
  }

  all(): ReadonlyArray<{
    id: string;
    name: string;
    status: Status;
    type: Type;
    link: string;
    userId: string;
  }> {
    return this.context.state.books;
  }

  async update(updateBook: UpdateInputData): Promise<UpdateResult> {
    try {
      const result = await this.collection
        .where('id', '==', updateBook.id)
        .get();
      if (result.empty) {
        return left(`can not find book: ${updateBook.id}`);
      }
      result.forEach(doc => doc.ref.set(updateBook));
      this.context.action.update(updateBook);
      return right(null);
    } catch (e) {
      console.error(e);
      return left(`update failed: ${updateBook.id}`);
    }
  }

  async delete(deleteBook: DeleteInputData): Promise<DeleteOutputData> {
    try {
      const result = await this.collection
        .where('id', '==', deleteBook.id)
        .get();
      if (result.empty) {
        return left(`can not find book: ${deleteBook.id}`);
      }
      result.forEach(doc => doc.ref.delete());
      this.context.action.delete(deleteBook);
      return right(null);
    } catch (e) {
      console.error(e);
      return left(`delete failed: ${deleteBook.id}`);
    }
  }

  async findByUserId(userId: UserId): Promise<Collection> {
    try {
      const result = await this.collection
        .where('userId', '==', userId.value)
        .get();
      return result.docs.map(doc => doc.data() as CollectionRow);
    } catch (e) {
      return [];
    }
  }
}
