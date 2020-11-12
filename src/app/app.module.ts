import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { ChildComponent } from './child.component';
import { CityComponent } from './city/city.component';
import { FavouriteCitiesComponent } from './favourite-cities/favourite-cities.component';
import { EmployeeBonusComponent } from './employee-bonus/employee-bonus.component';
import { IfthenelseComponent } from './ifthenelse/ifthenelse.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    HelloComponent,
    ChildComponent,
    CityComponent,
    FavouriteCitiesComponent,
    EmployeeBonusComponent,
    IfthenelseComponent
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
