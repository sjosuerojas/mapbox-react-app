import type { PlacesState } from "@/context/places/PlacesProvider";
import * as PlacesTypes from "@/constants/places";

type PlacesAction = {
  type: typeof PlacesTypes.setUserLocation;
  payload: [number, number];
};

export const placesReducer = (
  state: PlacesState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case PlacesTypes.setUserLocation:
      return { ...state, isLoading: false, userLocation: action.payload };

    default:
      return state;
  }
};
