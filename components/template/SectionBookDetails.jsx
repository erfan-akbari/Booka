import Link from 'next/link'
import React from 'react'

function SectionBookDetails({ data }) {


    return (
        <section className="py-10 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                        <div className="sticky top-0 overflow-hidden ">
                            <div className="relative mb-6 lg:mb-10 lg:h-96">
                                <img className="object-contain w-full lg:h-full" src={data.poster} alt="poster" />
                            </div>
                            <div className="flex-wrap hidden -mx-2 md:flex">
                                <div className="w-1/2 p-2 sm:w-1/4">
                                    <Link className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                        <img className="object-contain w-full lg:h-28" src="/images/products/product-9.jpg" alt="book poster" />
                                    </Link>
                                </div>
                                <div className="w-1/2 p-2 sm:w-1/4">
                                    <Link className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                        <img className="object-contain w-full lg:h-28" src="/images/products/product-4.jpg" alt="poster book" />
                                    </Link>
                                </div>
                                <div className="w-1/2 p-2 sm:w-1/4">
                                    <Link className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                        <img className="object-contain w-full lg:h-28" src="/images/products/product-7.jpg" alt="poster book" />
                                    </Link>
                                </div>
                                <div className="w-1/2 p-2 sm:w-1/4">
                                    <Link className="block border border-gray-200 hover:border-red-400 dark:border-gray-700 dark:hover:border-red-300" href="#">
                                        <img className="object-contain w-full lg:h-28" src="/images/products/product-1.jpg" alt="poster book" />
                                    </Link>
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
                                <div className="flex flex-wrap items-center mb-6">
                                    <ul className="flex mb-4 mr-2 lg:mb-0">
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                    </path>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                    <Link className="mb-4 text-xs underline hover:text-red-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="#">
                                        مشاهده  امتیازها
                                    </Link>
                                </div>
                                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>{data.price} تومان </span>
                                    {/* <span className="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">Rs.10,000.00</span> */}
                                </p>
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
                                            <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input type="number" className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
                                            <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 lg:mb-0">
                                    <button className="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 dark:bg-red-600 dark:hover:bg-red-500 dark:hover:border-red-500 dark:hover:text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <Link href="#" className="w-full px-4 py-3 mr-4 text-center text-red-600 bg-red-100 border border-red-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-red-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                                    افزودن به سبد خرید
                                </Link>
                            </div>
                            <div className="flex gap-4 mb-6">
                                <Link href="#" className="w-full px-4 py-3 text-center bg-gradient-to-t from-red-500 to-rose-700 text-white font-bold border border-transparent rounded-xl">
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