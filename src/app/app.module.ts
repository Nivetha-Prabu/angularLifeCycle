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
import { ArHomeComponent } from './ar-home/ar-home.component';
import { ArChatComponent } from './ar-chat/ar-chat.component';
import { ArChatMessagesComponent } from './ar-chat-messages/ar-chat-messages.component';
import { ExampleStoreComponent } from './example-store/example-store.component';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/reducer';
import { ArWriteMessageComponent } from './ar-write-message/ar-write-message.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    HelloComponent,
    ChildComponent,
    CityComponent,
    FavouriteCitiesComponent,
    EmployeeBonusComponent,
    IfthenelseComponent,
    ExampleStoreComponent,
    ArHomeComponent,
    ArChatComponent,
    ArChatMessagesComponent,
    ArWriteMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      todoState: todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
