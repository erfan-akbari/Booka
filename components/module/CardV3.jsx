import React from 'react'

function CardV3({ poster, title, price, score, caption }) {
    return (
        <div className="w-full h-full relative">
            <div className="pb-20 bg-white py-4 border-4 border-gray-300 rounded-3xl h-full shadow-xl">
                <img src={poster} className="w-64 h-54 " />
                    <div className="py-4 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        <p className="text-lg font-semibold">{title}</p>
                    </div>
            </div>
            <div className="absolute bottom-0 right-0 ">
                <div className="flex justify-between">
                    <div className="bg-gray-300 px-2 rounded-lg w-full ">
                    <div className="py-4 pr-5">
                        <p className="text-sm font-semibold text-gray-400">5.{score}</p>
                        <p className="text-lg font-semibold">{price}</p>
                    </div>
                    </div>
                    <div className="py-4 pr-6 rounded-lg w-full flex items-center">
                        <button
                            className="bg-indigo-600 text-white font-bold p-1 rounded-lg uppercase text-sm  shadow-lg">
                            همین الان بخون
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardV3

