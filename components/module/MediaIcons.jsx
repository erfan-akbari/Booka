import Link from "next/link";
import { BsInstagram } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'

function MediaIcons() {
    return (
        <div className="flex items-center gap-1.5">
            <Link
                href={''}
                className="flex items-center justify-center text-lg text-gray-400 hover:bg-gradient-to-r from-green-400  to-blue-800 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <CgMail />
            </Link>
            <Link
                href={''}
                className="flex items-center justify-center text-lg text-gray-400 hover:bg-orange-500 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <AiOutlineGooglePlus />
            </Link>
            <Link
                href={''}
                className="flex items-center justify-center text-lg text-gray-400 hover:bg-blue-700 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <BiLogoFacebook />
            </Link>
            <Link
                href={''}
                className="flex items-center justify-center text-lg text-gray-400 hover:bg-blue-500 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <BiLogoTelegram />
            </Link>
            <Link
                href={''}
                className="flex items-center justify-center text-lg text-gray-400 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-slate-50 rounded-full p-1 transition-colors duration-300">
                <BsInstagram />
            </Link>
        </div>
    )
}

export default MediaIcons