import Link from 'next/link'
import React, { useState } from 'react'
import ScoreBox from '../module/ScoreBox'

function SectionBookDetails({ data }) {

    const [countBook, setCountBook] = useState(1)

    const minusCount = () => {
        setCountBook(prev => {
            if (prev === 0) {
                return prev = 0
            }
            return prev - 1
        })
    }
    const plusCount = () => {
        setCountBook(prev => {
            if (prev === 10) {
                return prev = 10
            }
            return prev + 1
        })
    }

    return (
        <section className="pt-10 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div className="sticky top-0 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-96">
                                <div className="absolute -top-2 -left-2 -rotate-45 rounded-full font-bold py-4 px-3 z-20 text-white bg-gradient-to-r hover:rotate-2 transition-all duration-300 cursor-pointer from-red-600 to-rose-600">
                                    %{data.discount}
                                </div>
                                <img className="object-contain w-full lg:h-full" src={data.poster} alt="poster" />
                            </div>
                            <div className="mb-6">
                                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">خلاصه کتاب :</h2>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                    <div className="p-3 lg:p-5 ">
                                        <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                            {data.caption}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <div className="lg:pl-20">
                            <div className="mb-6 ">
                                <span className="px-2.5 py-0.5 text-xs text-red-600 bg-red-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                                    ویژه
                                </span>
                                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    {data.title}
                                </h2>
                                <ScoreBox score={data.score} />
                                <div className="my-3 flex flex-col gap-2 items-start text-gray-400">
                                    <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap"><span className='text-black font-semibold'>نویسنده: </span> {data.writer}</div>
                                    <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap"><span className='text-black font-semibold'>مترجم: </span>{data.publication}</div>
                                    <div className="w-48 overflow-hidden text-ellipsis whitespace-nowrap"><span className='text-black font-semibold'>دسته بندی: </span>{data.category}</div>
                                </div>
                                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>{data.price} تومان </span>
                                    {/* <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">Rs.10,000.00</span> */}
                                </p>
                            </div>
                            <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                <span className="text-base text-gray-600 dark:text-gray-400">در انبار</span>
                                <p className="mt-2 text-sm text-red-500 dark:text-red-200">از تهران
                                    <span className="text-gray-600 dark:text-gray-400 mr-3">
                                        اکثر مشتریان ظرف 3-31 روز دریافت می کنند
                                    </span>
                                </p>
                            </div>
                            <div className="mb-6 "></div>
                            <div className="flex flex-wrap items-center mb-6">
                                <div className="mb-4 lg:mb-0">
                                    <div className="w-28">
                                        <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                            <button
                                                className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300"
                                                onClick={minusCount}
                                            >
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input value={countBook} onChange={e => setCountBook(e.target.value)} type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
                                            <button
                                                className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300"
                                                onClick={plusCount}
                                            >
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 lg:mb-0">
                                    <button className="flex items-center justify-center w-fit h-10 p-3 mr-4 rounded-full shadow-md shadow-rose-600 hover:shadow-xl hover:shadow-rose-600 text-lg text-rose-600 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <button onClick={() => { }} className="w-full px-4 py-3 mr-4 text-center text-lime-600 bg-lime-50 border border-lime-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-lime-600 hover:text-gray-100 lg:w-1/2 rounded-xl transition-all">
                                    افزودن به سبد خرید
                                </button>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <Link href="/payment" className="w-full px-4 py-3 text-center bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold border border-transparent rounded-xl">
                                    همین الان بخرید
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionBookDetails