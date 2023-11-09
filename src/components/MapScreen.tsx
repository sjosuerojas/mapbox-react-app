import { useContext, useEffect, useRef } from "react";
import { PlacesContext } from "@/context";
import { Loader } from "./ui/Loader";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapScreen() {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) {
      const map = new maplibregl.Map({
        container: mapRef.current!,
        style:
          "https://api.maptiler.com/maps/streets/style.json?key=noDgJgMvSYQwyKRx58bi",
        center: userLocation,
        zoom: 18,
      });
      map.addControl(new maplibregl.AttributionControl(), "top-left");
    }
  }, [isLoading, userLocation]);

  if (isLoading)
    return <Loader text="Please wait, trying to access location..." />;

  return <div ref={mapRef} className="position-fixed vw-100 vh-100" />;
}
