import React from 'react'
import Link from 'next/link'
import ContentWrapper from '../module/ContentWrapper'

function ConfirmatioPayment() {
    return (
        <ContentWrapper>
            <div>
                <div className="bg-gray-100 px-10 py-10 my-20">

                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">سبد خرید</h1>
                        <h2 className="font-semibold text-2xl">تعداد 3 عدد</h2>
                    </div>

                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">محصولات</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">تعداد</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">قیمت</h3>
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">جمع</h3>
                    </div>

                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex flex-wrap w-2/5">
                            <div className="w-28 ml-2">
                                <img className="h-24" src="/images/products/product-1.jpg" alt="" />
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">کتاب Jessies Song </span>
                                <span className="text-red-500 text-xs">نویسنده خانم جرمی ویلیامسو</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <p className="mx-2 border text-center w-8 bg-white">1</p>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">400.00 تومان</span>
                        <span className="text-center w-1/5 font-semibold text-sm">400.00 تومان</span>
                    </div>

                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex flex-wrap w-2/5">
                            <div className="w-28 ml-2">
                                <img className="h-24" src="/images/products/product-2.jpg" alt="" />
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">کتاب Investing</span>
                                <span className="text-red-500 text-xs"> نویسنده دورست</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <p className="mx-2 border text-center w-8 bg-white">1</p>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">40.00 تومان</span>
                        <span className="text-center w-1/5 font-semibold text-sm">40.00 تومان</span>
                    </div>

                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div className="flex flex-wrap w-2/5">
                            <div className="w-28 ml-2">
                                <img className="h-24" src="/images/products/product-3.jpg" alt="" />
                            </div>
                            <div className="flex flex-col justify-between ml-4 flex-grow">
                                <span className="font-bold text-sm">کتاب City On The Edge</span>
                                <span className="text-red-500 text-xs"> نویسنده مارک گلدمن</span>
                                <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">حذف</a>
                            </div>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <p className="mx-2 border text-center w-8 bg-white">1</p>
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">150.00 تومان</span>
                        <span className="text-center w-1/5 font-semibold text-sm">150.00 تومان</span>
                    </div>

                    <Link href={`/`} className="flex font-semibold text-white bg-indigo-500 w-fit p-2 text-sm mt-10">
                        تاييد و پرداخت
                        <svg className="fill-current mr-2 text-white w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                    </Link>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default ConfirmatioPayment