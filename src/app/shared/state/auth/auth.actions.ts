export namespace AuthActions {
  export class SetIsLoggedIn {
    static readonly type = '[Auth] Set Is Logged In';

    constructor(public payload: boolean) {
    }
  }

  export class SetUserName {
    static readonly type = '[Auth] Set User Name';

    constructor(public payload: string) {
    }
  }
}
