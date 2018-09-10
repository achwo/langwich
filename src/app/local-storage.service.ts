import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  addItem(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: any) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: any) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
