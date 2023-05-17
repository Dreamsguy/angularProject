import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { ProfileListComponent } from './components/profile/profile-list/profile-list.component';
import { AddCarComponent } from './components/addCar/add-car/add-car.component';
import { MainMenuListComponent } from './components/mainMenu/main-menu-list/main-menu-list.component';
import { EditCarComponent } from './components/editCar/edit-car/edit-car.component';

const routes: Routes = [
  {
    path: 'MainMenu',
    component: MainMenuListComponent
  },

  {
    path: 'cars',
    component: CarsListComponent
  },

  {
    path: 'orders',
    component: OrdersListComponent
  },

  {
    path: 'profile',
    component: ProfileListComponent // profile
  },

  {
    path: 'cars/addCar',
    component: AddCarComponent
  },

  {
    path: 'cars/editCar/:color',
    component: EditCarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
