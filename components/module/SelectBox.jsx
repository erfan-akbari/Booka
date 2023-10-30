import { Select, Option } from "@material-tailwind/react";

export default function SelectBox({ data }) {

    return (
        <select id="states" className="hover:bg-rose-500 transition-colors duration-300 hover:text-slate-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm h-6 rounded-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {data.map(({ name, id }) => (
                <option
                    key={id}
                    value={name}
                    className="flex items-center justify-center"
                >
                    {name}
                </option>
            ))}
        </select>
    );
}