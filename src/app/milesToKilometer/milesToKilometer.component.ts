import { Component } from '@angular/core'

import { ConversionService } from '../conversion.Service'

@Component({ templateUrl: 'milesToKilometer.component.html' })
export class MilesToKilometer {
  miles: number
  kilometer: number
  message: string

  conversionService = new ConversionService()

  milesToKilometer () {
    this.conversionService
      .milesToKilometer(this.miles)
      .then(res => {
        this.kilometer = res.data
      })
      .catch(err => {
        this.message = err
        alert(err)
      })
  }
}
