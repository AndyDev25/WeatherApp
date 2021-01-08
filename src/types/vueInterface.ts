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
