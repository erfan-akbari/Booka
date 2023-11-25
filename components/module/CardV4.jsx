import Link from 'next/link'
import React from 'react'

function CardV4({ shortName, title, posters, description }) {
    return (
        <Link href={`/blogs/${shortName}`} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
                className="object-cover object-center w-full rounded-t-lg lg:h-auto md:rounded-none md:rounded-r-lg"
                src={posters[0].img} alt="poster"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </Link>

    )
}

export default CardV4