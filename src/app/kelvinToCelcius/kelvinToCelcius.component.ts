import { Component } from '@angular/core'

import { ConversionService } from '../conversion.Service'
@Component({ templateUrl: 'kelvinToCelcius.component.html' })
export class KelvinToCelcius {
  kelvin: number
  celsius: number
  message: string

  conversionService = new ConversionService()

  kelvinToCelsius () {
    this.conversionService
      .kelvinToCelsius(this.kelvin)
      .then(res => {
        this.celsius = res.data
      })
      .catch(err => {
        this.message = err
        alert(err)
      })
  }
}
