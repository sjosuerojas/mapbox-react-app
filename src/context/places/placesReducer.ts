import type { PlaceState } from "@/types/location";

type PlacesAction = {
  type: "SET_USER_LOCATION";
  payload: [number, number];
};

export const placesReducer = (
  state: PlaceState,
  action: PlacesAction
): PlaceState => {
  switch (action.type) {
    case "SET_USER_LOCATION":
      return { ...state, isLoading: false, userLocation: action.payload };
    default:
      return state;
  }
};
