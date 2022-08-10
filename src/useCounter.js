import { useEffect, useState } from "react";

export function useCounter({ initialValue = 0, onCounterChange}) {

    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        onCounterChange(counter)
    });

    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    }

    function handleCounterDecrement() {
        setCounter(counter => counter - 1)
    }

    function handleResetCounter() {
        setCounter(initialValue)
    }

    return (
        {
            counter: counter,
            handleIncrement: handleCounterIncrement,
            handleDecrement: handleCounterDecrement,
            handleReset: handleResetCounter,
        }
    )
}