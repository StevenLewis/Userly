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

export interface Location {
  street: string
  city: string,
  state: string,
  postcode: number,
  coordinates: Coordinates
  timezone: Timezone
}

export interface User {
  name: string
  email: string
  phone: string
  picture: Picture
  location: Location
}
