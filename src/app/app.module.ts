import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CelciusToKelvin } from "./celciusToKelvin";
import { KelvinToCelcius } from "./kelvinToCelcius";
import { KilometerToMiles } from './kilometerToMiles'
import { MilesToKilometer } from './milesToKilometer'
@NgModule({
  declarations: [
    AppComponent,
    CelciusToKelvin,
    KelvinToCelcius,
    KilometerToMiles,
    MilesToKilometer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
