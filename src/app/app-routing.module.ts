import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CelciusToKelvin  } from "./celciusToKelvin";
import { KelvinToCelcius } from "./kelvinToCelcius";
import { KilometerToMiles } from "./kilometerToMiles";
import { MilesToKilometer } from "./milesToKilometer";

const routes: Routes = [
  { path: '', component: CelciusToKelvin },
  { path: 'kelvin', component: KelvinToCelcius },
  { path: 'kilometer', component: KilometerToMiles },
  { path: 'miles', component: MilesToKilometer },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
