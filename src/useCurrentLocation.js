import { useState } from "react";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

export function useCurrentLocation() {

    const [location, setLocation] = useState(null)

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    function getLocation() {

        setError(null);
        setLocation(null);
        setLoading(true);

        return navigator.geolocation.getCurrentPosition(getCurrentLocation, LocationError, options);

    }

    function getCurrentLocation(position) {

        const currentLocation = position.coords;
        setLoading(false);
        setLocation({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            accuracy: currentLocation.accuracy,
        });
    }

    function LocationError() {

        setLoading(false);
        return setError(new Error("Geolocation unavailable."));
    }

    return (
        {
            location: location,
            getLocation: getLocation,
            loading: loading,
            error: error,
        }
    )
}