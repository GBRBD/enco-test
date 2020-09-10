import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getCurrentWeatherData(city: string): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: '68b2709788c38c9bc682d246339d2ca0',
        units: 'metric',
      },
    });
  }

  getFiveDayForecast(city: string): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?', {
      params: {
        q: city,
        appid: '68b2709788c38c9bc682d246339d2ca0',
        units: 'metric',
      },
    });
  }

}
