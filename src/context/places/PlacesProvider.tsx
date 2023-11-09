import { useEffect, useReducer } from "react";
import { placesReducer } from "@/context/places/placesReducer";
import { PlacesContext } from "@/context/places/PlacesContext";
import { useLocation } from "@/hooks/useLocation";
import type { PlaceState } from "@/types/location";

const InitialValue: PlaceState = {
  isLoading: true,
  userLocation: [0, 0],
};

interface PlacesProviderProps {
  children: React.ReactNode;
}

export default function PlacesProvider({ children }: PlacesProviderProps) {
  const [state, dispatch] = useReducer(placesReducer, InitialValue);
  const { location } = useLocation();

  useEffect(() => {
    dispatch({
      type: "SET_USER_LOCATION",
      payload: [location.longitude, location.latitude],
    });
  }, [location.latitude, location.longitude]);

  return (
    <PlacesContext.Provider value={{ ...state }}>
      {children}
    </PlacesContext.Provider>
  );
}
