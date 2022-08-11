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

        setLoading(false);
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
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