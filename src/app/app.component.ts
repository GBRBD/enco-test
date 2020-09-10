import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Component } from '@angular/core';

import { AuthState } from '@shared/state/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Select(AuthState.getIsLoggedIn) isLoggedIn$: Observable<boolean>;
}
