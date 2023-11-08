import Link from 'next/link'
import React from 'react'

function Cart({ setActiveStep }) {
    return (
        <>
            <div>
                <div class="container mx-auto mt-10 mb-20">
                    <div class="flex flex-col items-center lg:flex-row shadow-lg my-10">
                        <div class="md:w-3/4 bg-gray-100 px-10 py-10">
                            <div class="flex justify-between border-b pb-8">
                                <h1 class="font-semibold text-2xl">سبد خرید</h1>
                                <h2 class="font-semibold text-2xl">تعداد 3 عدد</h2>
                            </div>
                            <div class="flex mt-10 mb-5">
                                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">محصولات</h3>
                                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">تعداد</h3>
                                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">قیمت</h3>
                                <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">جمع</h3>
                            </div>
                            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex w-2/5">
                                    <div class="w-20">
                                        <img class="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                                    </div>
                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                        <span class="font-bold text-sm">کتاب Jessies Song </span>
                                        <span class="text-red-500 text-xs">نویسنده خانم جرمی ویلیامسو</span>
                                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                                    </div>
                                </div>
                                <div class="flex justify-center w-1/5">
                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>

                                    <input class="mx-2 border text-center w-8" type="text" value="1" />

                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                                <span class="text-center w-1/5 font-semibold text-sm">400.00 تومان</span>
                                <span class="text-center w-1/5 font-semibold text-sm">400.00 تومان</span>
                            </div>

                            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex w-2/5">
                                    <div class="w-20">
                                        <img class="h-24" src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw" alt="" />
                                    </div>
                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                        <span class="font-bold text-sm">کتاب Investing</span>
                                        <span class="text-red-500 text-xs"> نویسنده دورست</span>
                                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                                    </div>
                                </div>
                                <div class="flex justify-center w-1/5">
                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>

                                    <input class="mx-2 border text-center w-8" type="text" value="1" />

                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                                <span class="text-center w-1/5 font-semibold text-sm">40.00 تومان</span>
                                <span class="text-center w-1/5 font-semibold text-sm">40.00 تومان</span>
                            </div>

                            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex w-2/5">
                                    <div class="w-20">
                                        <img class="h-24" src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v" alt="" />
                                    </div>
                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                        <span class="font-bold text-sm">کتاب City On The Edge</span>
                                        <span class="text-red-500 text-xs"> نویسنده مارک گلدمن</span>
                                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                                    </div>
                                </div>
                                <div class="flex justify-center w-1/5">
                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                    <input class="mx-2 border text-center w-8" type="text" value="1" />

                                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                    </svg>
                                </div>
                                <span class="text-center w-1/5 font-semibold text-sm">150.00 تومان</span>
                                <span class="text-center w-1/5 font-semibold text-sm">150.00 تومان</span>
                            </div>

                            <Link href={`/books`} class="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                به خرید ادامه دهید
                            </Link>
                        </div>

                        <div id="summary" class="lg:w-1/4 px-8 py-10">
                            <h1 class="font-semibold text-2xl border-b pb-8">خلاصه سفارش</h1>
                            <div class="flex justify-between mt-10 mb-5">
                                <span class="font-semibold text-sm uppercase">تعداد 3 عدد</span>
                                <span class="font-semibold text-sm">590 تومان</span>
                            </div>
                            <div>
                                <label class="font-medium inline-block mb-3 text-sm uppercase">حمل دریایی</label>
                                <select class="block p-2 text-gray-600 w-full text-sm">
                                    <option>حمل و نقل استاندارد - 100.00  تومان</option>
                                </select>
                            </div>
                            <div class="py-10">
                                <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">کد تخفیف</label>
                                <input type="text" id="promo" placeholder="کد را تایپ کنید" class="p-2 text-sm w-full" />
                            </div>
                            <button class="bg-rose-600 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">اعمال کردن</button>
                            <div class="border-t mt-8">
                                <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>هزینه کل</span>
                                    <span>600 تومان</span>
                                </div>
                                <button
                                    onClick={() => setActiveStep(1)}
                                    class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                                    ادامه
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart