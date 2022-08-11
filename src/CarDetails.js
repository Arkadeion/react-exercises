import { useEffect, useRef, useState } from "react"

export function CarDetails({ initialData }) {

    const [ carData, setCarData ] = useState({})

    const modelRef = useRef();
    const yearRef = useRef();
    const colorRef = useRef();

    useEffect(() => {
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
    }, [initialData])

    useEffect(() => {
        setCarData({
            model: initialData.model,
            year: initialData.year,
            color: initialData.color,
        })
    }, [initialData])

    function handleSubmit(event) {
        
        event.preventDefault();
        
        setCarData({

            model: event.target.elements.model.value,
            year: event.target.elements.year.value,
            color: event.target.elements.color.value,
        })

    }

    return (
        <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mt-4 mb-8">
            <div>
                <h1 className="text-2xl font-bold mb-4">Insert Car Data:</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label className="text-lg mr-3">Model:</label>
                    <input ref={modelRef} className="border-black border-2 pl-1 mr-3" name="model" />
                    <label className="text-lg mr-3">Year:</label>
                    <input ref={yearRef} className="border-black border-2 pl-1 mr-3" name="year" />
                    <label className="text-lg mr-3">Color:</label>
                    <input ref={colorRef} className="border-black border-2 pl-1 mr-3" name="color" />
                    <button className='rounded-xl border-black border-2 p-1 mr-3' name="submit" type='submit' >Submit Car Data</button>
                </form>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-4">Your Car Data:</h1>
                <p className="text-lg font-bold mb-4">Model: {carData.model}</p>
                <p className="text-lg font-bold mb-4">Year: {carData.year}</p>
                <p className="text-lg font-bold mb-4">Color: {carData.color}</p>
            </div>
        </div>
    )
}