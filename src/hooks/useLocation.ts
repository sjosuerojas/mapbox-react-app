import { useState, useEffect } from "react";
import type { LocationError, Location } from "@/types/location";

interface GeoLocation {
  location: Location;
  error: LocationError | null;
}

const initialState = {
  latitude: 0,
  longitude: 0,
};

export function useLocation(): GeoLocation {
  const [error, setError] = useState<LocationError | null>(null);
  const [location, setLocation] = useState<Location>(initialState);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          setLocation({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        ({ message }) => {
          setError({ message });
        }
      );
    } else {
      setError({ message: "Geolocation is not supported by your browser." });
    }
  }, []);

  return { location, error };
}
