import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private _db: AngularFirestore) {}

  getAll(collection: any): AngularFirestoreCollection {
    return this._db.collection(collection);
  }
  checkDeviceTypeMobile(): boolean {
    return window.innerWidth <= 700 && window.innerHeight <= 900 ? true : false;
  }

  checkDarkMode() {
    let isDarkMode = false;
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      isDarkMode = true;
    }
    return isDarkMode;
  }
}
