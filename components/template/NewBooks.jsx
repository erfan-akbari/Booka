import React from 'react'
import CardV2 from '../module/CardV2'
import Title from '../module/Title'
import Link from 'next/link'
import { TiArrowBack } from "react-icons/ti";

function NewBooks({ data }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <Title value={'کتاب‌های جدید'} />
                <Link className='text-lime-600 font-extrabold text-xl flex items-center' href={`/books?page=1`}>
                    مشاهد همه
                    <TiArrowBack className='text-3xl' />
                </Link>
            </div>
            <section className='flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                {data?.slice(0, 8).map(book => (
                    <CardV2 key={book._id} {...book} />
                ))}
            </section>
        </>
    )
}

export default NewBooks