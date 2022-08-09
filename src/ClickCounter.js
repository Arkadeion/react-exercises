import { useEffect, useState } from "react";
import { CounterButton } from "./CounterButton";

export function ClickCounter({ initialValue, onCounterChange }) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        onCounterChange(counter)
    });

    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    }

    function handleResetCounter() {
        setCounter(initialValue)
    }

    return (
        <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8" >
            <h1 className="text-xl font-bold">Counter: {counter}</h1>
            <CounterButton handleCounterIncrement={handleCounterIncrement} className="rounded-xl border-black border-2 p-3 mt-3 mr-3" />
            <button onClick={handleResetCounter} className="rounded-xl border-black border-2 p-3 mt-3 mr-3">Reset</button>
        </div>
    )
}