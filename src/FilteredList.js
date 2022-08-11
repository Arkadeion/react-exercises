import { useMemo } from "react"

export function FilteredList({ list }) {

    const filtered = useMemo(() => list.filter(person => person.age > 18), [list]);

    return (
        <div className="bg-white rounded-xl border border-red-700 p-8 max-w-fit" >
            <h1 className="text-xl font-semibold mb-4">
                List of Adults:
            </h1>
            <ul>
                {filtered.map((user, index) => <li className="text-xl font-semibold mb-4" id={index} key={index} >Name: {user.name} / ID: {user.id} / Age: {user.age}</li>)}
            </ul>
        </div>
    )
}