export interface User {
  name: string,
  email: string,
  password: number,
  markers: any[]
}

export interface Marker {
  lat: number;
  lng: number;
  label?: string;
}
