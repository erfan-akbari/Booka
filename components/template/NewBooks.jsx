import React from 'react'
import CardV2 from '../module/CardV2'

function NewBooks({ data }) {
    return (
        <>
            <h2 className="text-indigo-600 text-3xl font-black mb-5">کتاب‌های جدید !</h2>
            <section className='flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {data?.slice(0, 8).map(book => (
                    <CardV2 key={book.id} {...book} />
                ))}
            </section>
        </>
    )
}

export default NewBooks