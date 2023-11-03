import Link from 'next/link'
import React from 'react'

function CardV4() {
    return (
        <Link href={`/blogs/1`} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover object-center w-full rounded-t-lg h-64 lg:h-auto lg:w-48 md:rounded-none md:rounded-r-lg" src="/images/image-4.jpg" alt="poster" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    عنوان مطلب شما
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    در این قسمت میتوانید مطلب خود را بنویسید. این یک نوشته ی آزمایشی است که صرفا برای پر کردن این بخش به کار رفته و جنبه ی دیگری ندارد. شما میتوانید این ناحیه را با محتوای دلخواه خود پر کنید..</p>
                </div>
        </Link>

    )
}

export default CardV4