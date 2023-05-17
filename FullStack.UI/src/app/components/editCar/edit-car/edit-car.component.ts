import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model'
import { DataService } from 'src/app/services/cars-service.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent{

  carDetails: Car = {

    name: '',
    model: '',
    horsepower: '',
    color: '',
    cost: ''

  };

  constructor(private route: ActivatedRoute, private service: DataService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
       const id = params.get('color');

       if (id){
        this.service.getCar(id).subscribe({
          next: (response) => {
            this.carDetails = response;
          }
        })
       }

      }
    })
  }

  updateCar() {
    this.service.updateCar(this.carDetails.color, this.carDetails).
    subscribe({
      next: (response) =>{
        this.router.navigate(['cars'])
      }
    });
  }
}
