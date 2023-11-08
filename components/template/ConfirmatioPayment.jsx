import React from 'react'
import Link from 'next/link'
import ContentWrapper from '../module/ContentWrapper'

function ConfirmatioPayment() {
    return (
        <ContentWrapper>
            <div>
                <div class="bg-gray-100 px-10 py-10 my-20">

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
                        <div class="flex flex-wrap w-2/5">
                            <div class="w-28 ml-2">
                                <img class="h-24" src="/images/products/product-1.jpg" alt="" />
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm">کتاب Jessies Song </span>
                                <span class="text-red-500 text-xs">نویسنده خانم جرمی ویلیامسو</span>
                                <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <input class="mx-2 border text-center w-8" type="text" value="1" />
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">400.00 تومان</span>
                        <span class="text-center w-1/5 font-semibold text-sm">400.00 تومان</span>
                    </div>

                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex flex-wrap w-2/5">
                            <div class="w-28 ml-2">
                                <img class="h-24" src="/images/products/product-2.jpg" alt="" />
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm">کتاب Investing</span>
                                <span class="text-red-500 text-xs"> نویسنده دورست</span>
                                <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <input class="mx-2 border text-center w-8" type="text" value="1" />
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">40.00 تومان</span>
                        <span class="text-center w-1/5 font-semibold text-sm">40.00 تومان</span>
                    </div>

                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex flex-wrap w-2/5">
                            <div class="w-28 ml-2">
                                <img class="h-24" src="/images/products/product-3.jpg" alt="" />
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                                <span class="font-bold text-sm">کتاب City On The Edge</span>
                                <span class="text-red-500 text-xs"> نویسنده مارک گلدمن</span>
                                <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <input class="mx-2 border text-center w-8" type="text" value="1" />
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">150.00 تومان</span>
                        <span class="text-center w-1/5 font-semibold text-sm">150.00 تومان</span>
                    </div>

                    <Link href={`/`} class="flex font-semibold text-white bg-indigo-500 w-fit p-2 text-sm mt-10">
                        تاييد و پرداخت
                        <svg class="fill-current mr-2 text-white w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                    </Link>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default ConfirmatioPayment