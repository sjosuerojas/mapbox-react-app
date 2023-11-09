export interface Location {
  latitude: number;
  longitude: number;
}

export interface LocationError {
  message: string;
}

export interface PlaceState {
  isLoading: boolean;
  userLocation: [number, number];
}
