import React from 'react'
import ContentWrapper from '../module/ContentWrapper'

function PaymentMethod({ setActiveStep }) {
    return (
        <ContentWrapper>
            <div className="py-10 space-y-12 divide-y-2">
                <div className="flex flex-col items-start gap-3">
                    <h3 className='text-2xl'>نحوه پرداخت</h3>
                    <span className='text-gray-400'>تمام کارت‌های عضو شتاب قابل قبول هستند.</span>
                    {/* -- -- */}
                    <div className="font-bold">
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokewidthe="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="text-rose-600">پرداخت نقدی</div>
                        </div>
                        {/* -- -- */}
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokewidthe="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="text-rose-600">پرداخت در محل</div>
                        </div>
                        {/* -- -- */}
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokewidthe="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="text-rose-600">پرداخت آنلاین</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-3 pt-10">
                    <h3 className='text-2xl'>درگاه پرداخت</h3>
                    <span className='text-gray-400'>یکی از درگاه های پرداخت را انتخاب کنید.</span>
                    {/* -- -- */}
                    <div className="font-bold">
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokewidthe="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="text-rose-600">بانک ملت</div>
                        </div>
                        {/* -- -- */}
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokewidthe="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="text-rose-600">بانک تجارت</div>
                        </div>
                        {/* -- -- */}
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center">
                                <label
                                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                                    htmlFor="checkbox"
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        id="checkbox"
                                    />
                                    <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokewidthe="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                            <div className="text-rose-600">زرین پال</div>
                        </div>
                    </div>
                </div>
                <div className='py-10 flex items-center gap-5'>
                    <p className='text-gray-400'>در مرحله بعدي شما قادر هستيد سفارشتان را بازبيني کرده و آن را تاييد کنيد</p>
                    <button
                        onClick={() => setActiveStep(3)}
                        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-[40%]">
                        ادامه
                    </button>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default PaymentMethod