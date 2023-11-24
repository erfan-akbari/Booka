import Link from 'next/link'
import ScoreBox from './ScoreBox'

function CardV3({ _id, poster, title, price, score, caption, type, discount, color, shadow }) {
    return (
        <div className="my-5 w-fit relative flex flex-col text-gray-700 bg-gray-100 shadow-md rounded-xl bg-clip-border">
            <Link href={`/books/${type}/${_id}`} className={`relative mx-4 mt-4 p-1 overflow-hidden text-gray-700 bg-gradient-to-r ${color} ${shadow} rounded-xl bg-clip-border group`}>
                <img className='h-[350px] w-full max-w-[300px] group-hover:grayscale transition-all duration-200 shadow-sm rounded-xl' src={poster} alt="profile-picture" />
            </Link>
            <div className="pt-6 px-6 pb-3">
                <ScoreBox score={score} />
            </div>
            <div className="px-6 pb-6 text-start">
                <Link href={`/books/${type}/${_id}`} className="w-20 sm:w-32 md:w-52 lg:w-64 overflow-hidden whitespace-nowrap text-ellipsis block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </Link>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-gray-600 h-32 overflow-hidden">
                    {caption}
                </p>
                <div className="flex items-center justify-between border-t pt-2 mt-2">
                    <span className="text-base font-bold text-rose-600 dark:text-white">{price} تومان</span>
                    <Link href={`/books/${type}/${_id}`} className={`text-white bg-gradient-to-t ${color} hover:opacity-60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        بیشتر
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardV3

