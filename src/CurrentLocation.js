import { useCurrentLocation } from "./useCurrentLocation"

export function CurrentLocation() {

    const { location, loading, error, getLocation } = useCurrentLocation()

    return <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
        <button className="rounded-xl border-black border-2 p-1 mb-3 mr-3" onClick={getLocation}>Get Coordinates</button>
        {loading && <h1 className="text-xl font-bold" >Loading...</h1>}
        {location && <div>
            <h1 className="text-xl font-bold" >Latitude: {location.latitude}</h1>
            <h1 className="text-xl font-bold" >Longitude: {location.longitude}</h1>
            <h1 className="text-xl font-bold" >Accuracy: {location.accuracy} meters of error from the location.</h1>
        </div>}
        {error && <h1 className="text-xl font-bold" >{error.message}</h1>}
    </div>
}