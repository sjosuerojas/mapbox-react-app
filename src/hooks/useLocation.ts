import { useState, useEffect } from "react";

interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface LocationError {
  message: string;
}

interface useLocationProps {
  location: Location;
  error: LocationError | null;
}

export function useLocation(): useLocationProps {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<LocationError | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError({ message: error.message });
        }
      );
    } else {
      setError({ message: "Geolocation is not supported by your browser." });
    }
  }, []);

  return { location, error };
}
