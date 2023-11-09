import { PlacesProvider } from "@/context";
import MapScreen from "./components/MapScreen";

export default function MapboxApp() {
  return (
    <PlacesProvider>
      <MapScreen />
    </PlacesProvider>
  );
}
