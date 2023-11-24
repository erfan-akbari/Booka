import Link from 'next/link'
import React from 'react'

function PaginationBtn({ btnCount, query }) {
    return (
        <div className="flex flex-wrap items-center gap-3 w-full justify-center my-5">
            {btnCount > 1 &&
                Array.from({ length: btnCount }).map((val, index) => (
                    <Link
                        href={`/books?page=${index + 1}`}
                        key={index + 1}
                        className={`${+query.page === +index + 1 ? 'bg-rose-600 text-white' : 'bg-red-100 text-rose-950'} shadow-md shadow-gray-400 hover:shadow-rose-600 font-semibold transition-all border-rose-600 px-3 py-1.5 rounded-md cursor-pointer`}>
                        {index + 1}
                    </Link>
                ))
            }
        </div>
    )
}

export default PaginationBtn