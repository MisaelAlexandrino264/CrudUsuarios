import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private dataBasestore: AngularFirestore) { }

  getAllUsers(){
    return this.dataBasestore.collection('users', user => user.orderBy('name')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  addUser(user: User){
    return this.dataBasestore.collection('users').add(user);
  }

  update(userId: string, user: User){
    return this.dataBasestore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string){
    return this.dataBasestore.collection('users').doc(userId).delete();
  }
}
