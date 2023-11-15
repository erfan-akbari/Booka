import Link from 'next/link'

function CardV3({ _id, poster, title, price, score, caption, type }) {
    return (
        <div className="my-5 w-fit relative flex flex-col text-gray-700 bg-gray-100 shadow-md rounded-xl bg-clip-border">
            <Link href={`/books/${type}/${_id}`} className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border group">
                <img className='group-hover:grayscale transition-all duration-200' src={poster} alt="profile-picture" />
            </Link>
            <div className="p-6 text-start">
                <Link href={`/books/${type}/${_id}`} className="w-20 sm:w-32 md:w-52 lg:w-64 overflow-hidden whitespace-nowrap text-ellipsis block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </Link>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-600">
                    {caption}
                </p>
                <div className="flex items-center justify-between border-t pt-2 mt-2">
                    <p className='text-yellow-500 font-bold'>امتیاز {score}</p>
                    <p className='text-red-500 font-semibold'>{price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardV3

