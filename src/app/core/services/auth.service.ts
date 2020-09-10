import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor() {
  }

  logIn(userName: string, password: string): Observable<boolean> {
    const user = JSON.parse(localStorage.getItem(userName));

    if (!user) {
      const data = { password };
      localStorage.setItem(userName, JSON.stringify(data));
      return of(true);
    } else {
      if (password === user.password) {
        return of(true);
      } else {
        return of(false);
      }
    }
  }
}
