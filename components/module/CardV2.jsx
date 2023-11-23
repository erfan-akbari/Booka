import Link from 'next/link'
import React from 'react'

function CardV2({ _id, poster, title, price, score, shadow, color, writer, publication, category, discount }) {
    return (
        <div className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg ${shadow} dark:bg-gray-800 dark:border-gray-700 relative`}>
            <div className="absolute -top-2 -left-2 -rotate-45 rounded-full font-bold py-4 px-3 z-20 text-white bg-gradient-to-r hover:rotate-2 transition-all duration-300 cursor-pointer from-red-600 to-rose-600">
                %{discount}
            </div>
            <Link href={`/books/${_id}`}>
                <img className="mx-auto h-[370px] w-full max-w-[300px] p-8 rounded-t-lg hover:grayscale transition-all duration-300" src={poster} alt="product image" />
            </Link>
            <div className="px-5 pb-5">
                <Link href={`/books/${_id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white overflow-hidden whitespace-nowrap text-ellipsis">{title}</h5>
                </Link>
                <div className="flex items-center my-2.5 gap-1">
                    {
                        new Array(5 - score).fill('star').map(star => (
                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))
                    }
                    {
                        new Array(score).fill('starFill').map(starFill => (
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))
                    }
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{score}</span>
                </div>
                <div className="my-3 flex flex-col gap-2 items-start text-gray-400">
                    <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap"><span className='text-black font-semibold'>نویسنده: </span> {writer}</div>
                    <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap"><span className='text-black font-semibold'>مترجم: </span>{publication}</div>
                    <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap"><span className='text-black font-semibold'>دسته بندی: </span>{category}</div>
                </div>
                <div className="border-t pt-3 flex items-center justify-between">
                    <span className="text-base font-bold text-gray-900 dark:text-white">{price} تومان</span>
                    <Link href={`/books/${_id}`} className={`text-white bg-gradient-to-t ${color} hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        مشاهد کتاب
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CardV2