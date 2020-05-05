import firebase from 'firebase/app';
import 'firebase/firestore';
import { right, left } from 'fp-ts/lib/Either';
import { Status, Type } from '.';
import { BookRepository, UpdateResult } from './BookRepository';
import { RegisterInputData } from '@/usecase/book/Register';
import { useBooksContext } from '@/components/context';
import { UpdateInputData } from '@/usecase/book/Update';
import { DeleteInputData, DeleteOutputData } from '@/usecase/book';
import { Id as UserId } from '@/model/User';
import { UUID } from '@/libs/UUID';

type Timestamp = firebase.firestore.Timestamp;
type UnwrappedBook = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

type OutPutDate = ReadonlyArray<UnwrappedBook>;

type BaseBookDoc = {
  id: string;
  name: string;
  status: Status;
  type: Type;
  link: string;
  price: number;
  userId: string;
  createdAt: firebase.firestore.FieldValue;
  updatedAt: firebase.firestore.FieldValue;
};

const convertToCollectionRow: firebase.firestore.FirestoreDataConverter<BaseBookDoc> = {
  toFirestore(modelObject: BaseBookDoc): firebase.firestore.DocumentData {
    return modelObject;
  },
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot<BaseBookDoc>,
    options: firebase.firestore.SnapshotOptions
  ): BaseBookDoc {
    return snapshot.data(options);
  }
};

export class FirebaseBookRepository implements BookRepository {
  private readonly collection = firebase
    .firestore()
    .collection('books')
    .withConverter(convertToCollectionRow);

  private readonly context = useBooksContext();

  async save(newBook: RegisterInputData): Promise<UpdateResult> {
    try {
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      const book = {
        id: UUID.timeStamp(),
        createdAt,
        updatedAt: createdAt,
        ...newBook
      };
      const result = await this.collection.add(book);
      const data = await this.collection
        .doc(result.id)
        .get()
        .then(doc => doc.data());
      if (data != null) {
        this.context.action.register({
          ...data,
          createdAt: (data.createdAt as Timestamp).toDate(),
          updatedAt: (data.createdAt as Timestamp).toDate()
        });
      }

      return right(null);
    } catch (e) {
      console.error(e);
      return left('register failed.');
    }
  }

  all(): OutPutDate {
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
      result.forEach(doc =>
        doc.ref.set({
          ...updateBook,
          createdAt: firebase.firestore.Timestamp.fromDate(
            updateBook.createdAt
          ),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        })
      );
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

  async findByUserId(userId: UserId): Promise<OutPutDate> {
    try {
      const result = await this.collection
        .where('userId', '==', userId.value)
        .get();
      return result.docs
        .map(doc => doc.data())
        .map(data => ({
          ...data,
          createdAt: (data.createdAt as Timestamp).toDate(),
          updatedAt: (data.createdAt as Timestamp).toDate()
        }));
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
