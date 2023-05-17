import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { ProfileListComponent } from './components/profile/profile-list/profile-list.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { MainMenuListComponent } from './components/mainMenu/main-menu-list/main-menu-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './components/addCar/add-car/add-car.component';  
import { FormsModule } from '@angular/forms';
import { EditCarComponent } from './components/editCar/edit-car/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    ProfileListComponent,
    OrdersListComponent,
    MainMenuListComponent,
    AddCarComponent,
    EditCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
