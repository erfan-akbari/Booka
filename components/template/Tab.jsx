import React, { useState } from 'react'


function Tab() {
    const [typeShowContent, setTypeShowContent] = useState('خلاصه')

    return (
        <div className='py-10 transition-all'>
            <div className="grid grid-cols-3 gap-5 font-bold">
                <button
                    onClick={() => setTypeShowContent('خلاصه')}
                    className={`p-4 rounded  ${typeShowContent === 'خلاصه' ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white' : 'text-rose-700 bg-gray-100'}  shadow-md flex items-center justify-center`}
                > خلاصه کتاب
                </button>
                <button
                    onClick={() => setTypeShowContent('بریده ای از این کتاب')}
                    className={`p-4 rounded ${typeShowContent === 'بریده ای از این کتاب' ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white' : 'text-rose-700 bg-gray-100'} shadow-md flex items-center justify-center`}
                >
                    بریده ای از این کتاب
                </button>
                <button
                    onClick={() => setTypeShowContent('مشخصات بیشتر')}
                    className={`p-4 rounded ${typeShowContent === 'مشخصات بیشتر' ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white' : 'text-rose-700 bg-gray-100'} shadow-md flex items-center justify-center`}
                >
                    مشخصات بیشتر
                </button>
            </div>
            {typeShowContent === 'خلاصه' && (
                <div className="shadow-xl border border-gray-100 font-semibold p-8 rounded text-gray-500 bg-white mt-6">
                    توضیحات محصول
                    لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته، حال و آینده را شامل گردد. سی و پنج درصد از طراحان در قرن پانزدهم میبایست پرینتر در ستون و سطر حروف لازم است، بلکه شناخت این ابزار گاه اساسا بدون هدف بود و سئوالهای زیادی در گذشته بوجود می آید، تنها لازمه آن بود.
                    لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته، حال و آینده را شامل گردد. سی و پنج درصد از طراحان در قرن پانزدهم میبایست پرینتر در ستون و سطر حروف لازم است، بل.
                </div>
            )}
            {typeShowContent === 'بریده ای از این کتاب' && (
                <div className="shadow-xl border border-gray-100 font-semibold p-8 rounded text-gray-500 bg-white mt-6">

                    <div className="max-w-2xl mx-auto px-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white"> بریده های دیگر کاربران (20)</h2>
                        </div>
                        <form className="mb-6">
                            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                <label htmlFor="comment" className="sr-only">بریده ای از این کتاب</label>
                                <textarea id="comment" rows="6"
                                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                    placeholder="تایپ کنید..." required></textarea>
                            </div>
                            <button type="submit"
                                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-500 ">
                                ارسال
                            </button>
                        </form>
                    </div>

                    <section className="relative flex items-center justify-center min-h-max py-5 antialiased bg-gray-100 min-w-screen">
                        <div className="container px-0 mx-auto sm:px-5">

                            <div
                                className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                <div className="flex flex-row">
                                    <img className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full" alt="Noob master's avatar"
                                        src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                    <div className="flex-col mt-1">
                                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">نوب مستر
                                            <span className="ml-2 text-xs font-normal text-gray-500">2 هفته پیش</span>
                                        </div>
                                        <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                            عاااالی این کتاب
                                        </div>
                                        <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                                            <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                                viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                                    fillRule="nonzero" />
                                            </svg>
                                        </button>
                                        <button className="inline-flex items-center px-1 -ml-1 flex-column">
                                            <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidthe="2"
                                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr className="my-2 ml-16 border-gray-200" />
                                <div className="flex flex-row pt-1 md-10 md:ml-16">
                                    <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Emily's avatar"
                                        src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                    <div className="flex-col mt-1">
                                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">الهام
                                            <span className="ml-2 text-xs font-normal text-gray-500">5 روز پیش</span>
                                        </div>
                                        <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                            پیشنهاد میکنم
                                        </div>
                                        <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                                            <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                                viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                                    fillRule="nonzero" />
                                            </svg>
                                        </button>
                                        <button className="inline-flex items-center px-1 -ml-1 flex-column">
                                            <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
                                <div className="flex flex-row md-10">
                                    <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar"
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                                    <div className="flex-col mt-1">
                                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">علی احمدی
                                            <span className="ml-2 text-xs font-normal text-gray-500">3 روز پیش</span>
                                        </div>
                                        <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                            بسیار عالی و زیبا ممنون ازسایت خوبتون
                                        </div>
                                        <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                                            <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                                viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                                    fillRule="nonzero" />
                                            </svg>
                                        </button>
                                        <button className="inline-flex items-center px-1 -ml-1 flex-column">
                                            <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidthe="2"
                                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            )}
            {typeShowContent === 'مشخصات بیشتر' && (
                <div className="shadow-xl border border-gray-100 font-semibold p-8 rounded text-gray-500 bg-white mt-6">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 overflow-x-scroll">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        نویسنده
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        شابک
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        رده بندی کتاب
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        قطع (سایز)
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        نوع جلد
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        تعداد صفحه
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        سایر توضیحات
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        ویکتور فرانکل
                                    </th>
                                    <td className="px-6 py-4">
                                        21584586589210125
                                    </td>
                                    <td className="px-6 py-4">
                                        فلسفه و روانشناسی
                                    </td>
                                    <td className="px-6 py-4">
                                        رقعی
                                    </td>
                                    <td className="px-6 py-4">
                                        شومیز
                                    </td>
                                    <td className="px-6 py-4">
                                        116
                                    </td>
                                    <td className="px-6 py-4">
                                        <ul className='text-start list-disc'>
                                            <li>جزو پرفروش ترین کتاب ها و رمان های ایران جزو فهرست کتاب هایی که زندگی تان را دگرگون خواهند کرد</li>
                                            <li>بهترین کتاب از نظر مردم</li>
                                            <li>دارای فایل pdf و صوت</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Tab