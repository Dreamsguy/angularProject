import { Component} from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { DataService } from 'src/app/services/cars-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  addCarClass: Car = {

    name: '',
    model: '',
    horsepower: '',
    color: '',
    cost: ''

  }

  constructor(private carService: DataService, private router: Router) { }

  addNewCar() {
    this.carService.addNewCar(this.addCarClass)
    .subscribe({
      next: (car) => { 
        console.log(car)
      }
    });
  }
}
