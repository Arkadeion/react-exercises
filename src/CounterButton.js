import React from "react";

export function CounterButton({handleCounterIncrement}) {

    return(
        <button className="rounded-xl border-black border-2 p-3 mt-3 mr-3" onClick={handleCounterIncrement}>Add</button>
    )
}