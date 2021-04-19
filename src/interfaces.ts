export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Timezone {
  offset: string
  discription: string
}

export interface Street {
  number: string
  name: string
}

export interface Location {
  street: Street
  city: string,
  state: string,
  postcode: string,
  coordinates: Coordinates
  timezone: Timezone
}

export interface Name {
  title: string
  first: string
  last: string
}

export interface User {
  name: Name
  email: string
  phone: string
  picture: Picture
  location: Location
}

export interface RandomUserInfo {
  page: number
  results: number
  seed: string
  version: string
}

export interface RandomUserData {
  info: RandomUserInfo
  results: Array<User>
}

export interface AxiosResponse {
  data: RandomUserData
}
