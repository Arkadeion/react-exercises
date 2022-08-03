export function Sum(props) {
    return (
        <div className="bg-white rounded-xl border border-red-700 p-3 mt-3 mb-5 max-w-fit">
            <h1 className="text-lg font-bold mb-4">The sum of the provided numbers is: {props.numbers.reduce((previous, current) => previous + current, 0)}</h1>
        </div>
    )
}