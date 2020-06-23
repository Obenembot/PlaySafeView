import { Component } from '@angular/core'
import { ConversionService } from '../conversion.Service'

@Component({ templateUrl: 'kilometerToMiles.component.html' })
export class KilometerToMiles {
  miles: number
  kilometer: number
  message: string

  conversionService = new ConversionService()

  kilometerToMiles () {
    this.conversionService
      .kilometerToMiles(this.kilometer)
      .then(res => {
        this.miles = res.data
      })
      .catch(err => {
        this.message = err
        alert(err)
      })
  }
}
