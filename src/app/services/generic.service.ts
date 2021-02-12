import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private _db: AngularFirestore) {}

  getAll(collection: any): AngularFirestoreCollection {
    return this._db.collection(collection);
  }
}
