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

export interface backgroundColors {
  Snow: string
  Rain: string
  Drizzle: string
  Clouds: string
  Clear: string
  Thunderstorm: string
}