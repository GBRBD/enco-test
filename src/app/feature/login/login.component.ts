import { Subject } from 'rxjs';
import { Store } from '@ngxs/store';
import { takeUntil } from 'rxjs/operators';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthService } from '@core/services/auth.service';
import { AuthActions } from '@shared/state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  error = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  onSubmit(form: FormGroup): void {
    if (!form.valid) {
      return;
    }
    const userName = form.value.userName;
    const password = form.value.password;
    this.authService.logIn(userName, password).pipe(takeUntil(this.destroy$)).subscribe((res: boolean) => {
      this.handleLogIn(res, userName);
    });
  }

  private handleLogIn(isLoggedIn: boolean, userName): void {
    isLoggedIn ? this.dispatchUserData(userName) : this.error = true;
  }

  private dispatchUserData(userName: string): void {
    this.store.dispatch(new AuthActions.SetIsLoggedIn(true));
    this.store.dispatch(new AuthActions.SetUserName(userName));
  }
}
