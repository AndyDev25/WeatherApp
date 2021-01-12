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

export interface WeatherData {
	coord:      object;
	weather:    Array<object>;
	base:       string;
	main:       object;
	visibility: number;
	wind:       object;
	clouds:     object;
	dt:         number;
	sys:        object;
	timezone:   number;
	id:         number;
	name:       string;
	cod:        number;
}
