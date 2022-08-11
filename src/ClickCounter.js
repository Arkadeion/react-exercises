import { useCounter } from "./useCounter";

export function ClickCounter({ initialValue, onCounterChange }) {

    const { counter, handleIncrement, handleDecrement, handleReset } = useCounter({ initialValue, onCounterChange })
    
    return (
        <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8" >
            <h1 className="text-xl font-bold">Counter: {counter}</h1>
            <div>
                <button className="rounded-xl border-black border-2 p-3 mt-3 mr-3" onClick={handleIncrement}>Add</button>
                <button className="rounded-xl border-black border-2 p-3 mt-3 mr-3" onClick={handleDecrement}>Subtract</button>
            </div>
            <button onClick={handleReset} className="rounded-xl border-black border-2 p-3 mt-3 mr-3">Reset</button>
        </div>
    )
}