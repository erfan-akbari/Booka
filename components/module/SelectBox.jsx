export default function SelectBox({ data, value, changeHandler }) {
    return (
        <select value={value} onChange={e => changeHandler(e.target.value)} id="states" className="transition-colors duration-300 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg border-l-gray-100 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full h-8 px-5">
            {data.map(({ name, id }) => (
                <option
                    key={id}
                    value={id}
                    className="flex items-center justify-center"
                >
                    {name}
                </option>
            ))}
        </select>
    );
}