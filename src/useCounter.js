import { useCallback, useEffect, useState } from "react";

export function useCounter({ initialValue = 0, onCounterChange}) {

    const [counter, setCounter] = useState(initialValue)

    useEffect(() => {
        onCounterChange(counter)
    });

    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    }, []) 

    const handleCounterDecrement = useCallback(function handleCounterDecrement() {
        setCounter(counter => counter - 1)
    }, []) 

    const handleResetCounter = useCallback(function handleResetCounter() {
        setCounter(initialValue)
    }, [initialValue])

    return (
        {
            counter: counter,
            handleIncrement: handleCounterIncrement,
            handleDecrement: handleCounterDecrement,
            handleReset: handleResetCounter,
        }
    )
}