import { useReducer } from "react";
import { placesReducer } from "@/context/places/placesReducer";
import { PlacesContext } from "@/context/places/PlacesContext";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: false,
  userLocation: undefined,
};

export default function PlacesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state] = useReducer(placesReducer, INITIAL_STATE);

  return (
    <PlacesContext.Provider value={{ ...state }}>
      {children}
    </PlacesContext.Provider>
  );
}
