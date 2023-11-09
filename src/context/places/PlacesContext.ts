import { createContext } from "react";
import type { PlaceState } from "@/types/location";

export const PlacesContext = createContext<PlaceState>({} as PlaceState);
