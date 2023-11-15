import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessangerService {
  subject = new Subject();

  constructor() {}

  sendMessage(product: any) {
    this.subject.next(product);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
