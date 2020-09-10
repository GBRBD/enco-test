import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';

import {WeatherData} from '@shared/models/weatherData';
import {WeatherService} from '@core/services/weather.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit, OnDestroy {
  @Input() city: string;

  @Output() delete = new EventEmitter();

  weatherData: WeatherData;
  destroy$: Subject<boolean> = new Subject<boolean>();
  currentError = false;
  forecastError = false;

  multi = [];
  view: any[] = [1000, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Temperature';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  autoScale = true;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeatherData(this.city)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
          this.weatherData = {
            temperature: res.main.temp,
            humidity: res.main.humidity,
            pressure: res.main.pressure,
            windSpeed: res.wind.speed,
            windDeg: res.wind.deg,
          };
        },
        () => {
          this.currentError = true;
        });

    this.weatherService.getFiveDayForecast(this.city)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {

        const series = [];
        res.list.forEach(x => {
          series.push({name: x.dt_txt, value: x.main.temp});
        });

        this.multi = [
          {
            name: this.city,
            series,
          },
        ];

      }, () => {
        this.forecastError = true;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onDelete() {
    this.delete.emit();
  }
}
