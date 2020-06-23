import axios from 'axios'

const localHost = 'http://localhost:9000'

export class ConversionService {

  kelvinToCelsius (kelvin:number) {
    return axios.get(`${localHost}/ktoc/` +kelvin)
  }

  celsiusToKelvin (celsius: number) {
    return axios.get(`${localHost}/ctok/` + celsius)
  }

  milesToKilometer (miles: number) {
    return axios.get(`${localHost}/mtok/` + miles)
  }
  
  kilometerToMiles (kilomerter: number) {
    return axios.get(`${localHost}/ktom/` + kilomerter)
  }
}
