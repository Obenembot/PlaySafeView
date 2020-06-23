import { Component } from '@angular/core'
import { ConversionService } from '../conversion.Service'

@Component({ templateUrl: 'celciusToKelvin.component.html' })
export class CelciusToKelvin {
  kelvin: number
  celsius: number
  message: string

  conversionService = new ConversionService()

  celsiusToKelvin () {
    this.conversionService
      .celsiusToKelvin(this.celsius)
      .then(res => {
        this.kelvin = res.data
      })
      .catch(err => {
        this.message = err
        alert(err)
      })
  }
}
