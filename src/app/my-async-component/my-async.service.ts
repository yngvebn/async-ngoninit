import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAsyncService {

  constructor() { }

  async resolveImmediately(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
