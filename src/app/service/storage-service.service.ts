import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor( private storage: Storage) { }

  //store data based on key (userinfo, LID, password, airport, mytriplist, nextdate)
  setStorage(key, val) {
    this.storage.set(key, JSON.stringify(val));
  }

  //get data based on key (userinfo, LID, password, airport, mytriplist, nextdate)
  async getStorage(key) {
    return await this.storage.get(key);
  }
}
