export interface WeatherInfo {
  id: number
  name: string
  weather: Array<object>
  main: object
  wind: object
  timezone: number
  sys: object
  clouds: object
}

export interface extractedWeather {
  city: string
  cityWeather: Array<object>
  cloudiness: object
  id: number
  temperature: object
  timezone: number
  wind: object
}
