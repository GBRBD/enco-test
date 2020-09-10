import { NgxsModule } from '@ngxs/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { LoginModule } from '@feature/login/login.module';
import { DashboardModule } from '@feature/dashboard/dashboard.module';
import { HeaderModule } from '@shared/components/header/header.module';
import { AuthState } from '@shared/state/auth/auth.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    HeaderModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AuthState,
    ], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
