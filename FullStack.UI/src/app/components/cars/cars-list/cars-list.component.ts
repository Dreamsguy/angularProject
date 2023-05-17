import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model'
import { DataService } from 'src/app/services/cars-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{

  cars: Car[] = [];
  constructor(private carsService: DataService) {}

  ngOnInit(): void {
    this.carsService.getData()
    .subscribe({
      next: (cars) => {
        console.log(cars)
        this.cars = cars;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
