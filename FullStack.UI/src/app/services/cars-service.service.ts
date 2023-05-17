import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  baseApiUrl: string = 'https://localhost:7139';

  constructor(private http: HttpClient) { }

  getData(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseApiUrl + '/api/Car');
  }

}
