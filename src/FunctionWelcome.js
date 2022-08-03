import { Age } from './Age'

export function FunctionWelcome(props) {
    return (

    <div className="bg-white rounded-xl border border-red-700 p-3 mb-5 max-w-xs">
        <h1 className="text-2xl font-bold mb-4">Welcome, {props.name}!</h1>
        <Age age={props.age} />
    </div>

    )
}