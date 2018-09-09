import { Injectable } from '@angular/core';
import { UserModel } from './User.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  users: UserModel[] = [];
  private userSubject: BehaviorSubject<UserModel[]> = new BehaviorSubject<UserModel[]>([]);
  data = this.userSubject.asObservable(); constructor() { }

  addPerson(data: any) {
    this.users.push(new UserModel(data));
    this.userSubject.next(this.users);
  }

  deletePerson(person: UserModel) {
    const index = this.users.indexOf(person);
    this.users.splice(index, 1);
    this.userSubject.next(this.users);
  }

  editPerson(oldPerson: UserModel, newPerson: UserModel) {
    const index = this.users.indexOf(oldPerson);
    this.users[index] = newPerson
    this.userSubject.next(this.users);
  }

  getPersonByEmail(email: string) {
    const person = this.users.filter((user) => {
      return user.email === email
    })
    return person[0];
  }

}
