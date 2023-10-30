import React from 'react'

function CardV3({ poster, title, price, score, caption }) {
    return (
        <div class="w-80 h-full  relative">

            <div class="pb-24 bg-white py-4 px-4 border-4 border-gray-300 rounded-3xl h-full shadow-2xl">
                <img src={poster}
                    class="w-64 h-56 " />
                <div class="flex justify-between">
                    <div class="py-4 flex space-x-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                        <p class="text-lg font-semibold">{title}</p>
                    </div>
                    <div class="py-4 pr-5">
                        <p class="text-sm font-semibold text-gray-400">5.{score}</p>
                        <p class="text-lg font-semibold">{price}</p>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-0 right-0 ">
                <div class="flex justify-between">
                    <div class="bg-gray-300 py-4 px-6 rounded-lg w-full ">
                        <p class="text-white text-lg font-semibold pb-4">
                        تقسیم با
                        </p>
                        <div class="flex space-x-2">
                            <img src="/logo/avatar-1.png"
                                class="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="/logo/avatar-1.png"
                                class="w-8 h-8 rounded-full border-2 border-white" />
                            <img src="/logo/avatar-1.png"
                                class="w-8 h-8 rounded-full border-2 border-white" />
                        </div>
                    </div>
                    <div class="py-4 px-6 rounded-lg w-full flex items-end">
                        <button
                            class="bg-indigo-600 text-white font-bold py-4 px-4 rounded-lg uppercase text-sm  shadow-xl">
                            همین الان بخون
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardV3

