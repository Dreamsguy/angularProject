import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { ProfileListComponent } from './components/profile/profile-list/profile-list.component';

const routes: Routes = [

  {
    path: 'cars',
    component: CarsListComponent
  },

  {
    path: 'orders',
    component: OrdersListComponent
  },

  {
    path: '',
    component: ProfileListComponent // profile
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
