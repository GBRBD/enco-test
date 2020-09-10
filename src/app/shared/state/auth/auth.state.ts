import { AuthActions } from '@shared/state/auth/auth.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface AuthStateModel {
  isLoggedIn: boolean;
  userName: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLoggedIn: false,
    userName: '',
  },
})
@Injectable()
export class AuthState {


  @Selector()
  static getIsLoggedIn(state: AuthStateModel): boolean {
    return state.isLoggedIn;
  }

  @Action(AuthActions.SetIsLoggedIn)
  setIsLoggedIn(ctx: StateContext<AuthStateModel>, action: AuthActions.SetIsLoggedIn): void {
    ctx.patchState({
      isLoggedIn: action.payload,
    });
  }

  @Action(AuthActions.SetUserName)
  setUserName(ctx: StateContext<AuthStateModel>, action: AuthActions.SetUserName): void {
    ctx.patchState({
      userName: action.payload,
    });
  }

}
