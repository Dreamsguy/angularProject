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

  addNewCar(addCarClass: Car): Observable<Car>{
    return this.http.post<Car>(this.baseApiUrl + '/api/Car', addCarClass);
  }

  getCar(id: string): Observable<Car>{
    return this.http.get<Car>(this.baseApiUrl + '/api/Car' + id);
  }

  updateCar(id: string, updateCar: Car): Observable<Car>{
    return this.http.put<Car>(this.baseApiUrl + '/api/Car' + id, updateCar);
  }

}
