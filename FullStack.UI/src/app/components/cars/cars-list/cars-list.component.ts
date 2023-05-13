import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model'

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{

  cars: Car[] = [];
  constructor() {}

  ngOnInit(): void {
    
  }
}
