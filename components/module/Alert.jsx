import React from 'react'

function Alert({ title }) {
    return (
        <div className="bg-gradient-to-r from-emerald-500 to-lime-600 text-center py-4 lg:px-4">
            <div className="p-2 bg-gradient-to-t from-red-500 to-rose-700 text-white items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span className="flex rounded-full bg-yellow-400 text-black uppercase px-2 py-1 text-xs font-bold mr-3">تازه</span>
                <span className="font-semibold mr-2 text-left flex-auto">{title}</span>
                <svg className="fill-current opacity-75 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </div>
        </div>
    )
}

export default Alert