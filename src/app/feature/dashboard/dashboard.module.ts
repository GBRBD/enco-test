import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DashboardComponent } from './dashboard.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { AddCityDialogComponent } from './components/add-city-dialog/add-city-dialog.component';

@NgModule({
  declarations: [DashboardComponent, AddCityDialogComponent, WeatherDataComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  exports: [
    DashboardComponent,
  ],
  entryComponents: [
    AddCityDialogComponent
  ]
})
export class DashboardModule {
}
