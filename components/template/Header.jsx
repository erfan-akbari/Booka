import SelectBox from "../module/SelectBox"
import ContentWrapper from "../module/ContentWrapper"
import useSelect from "@/hooks/useSelect";
import Link from "next/link";
import MediaIcons from "../module/MediaIcons";
import { CiSearch } from 'react-icons/ci'
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

function Header() {
    const { countries, mony } = useSelect();
    const { pathname } = useRouter()
    const [open, setOpen] = useState(false);
    const [isLoginUser, setIsLoginUser] = useState(false);
    const [userData, setUserData] = useState(null);

    const openDrawer = () => setOpen(prev => !prev);

    useEffect(() => {
        setOpen(false)
        getMe()
    }, [pathname])

    useEffect(() => {
    }, [])

    const getMe = async () => {
        const userID = localStorage.getItem('ID')
        if (userID) {
            const res = await fetch(`/api/users/${userID}`)
            const data = await res.json()
            setUserData(data)
            setIsLoginUser(true)
        } else {
            setIsLoginUser(false)
        }
    }

    return (
        <header>
            <ContentWrapper>
                {/* header content */}
                <div className="flex items-center justify-center py-3 flex-wrap sm:flex-nowrap sm:justify-between gap-10 sm:gap--0">
                    <Link href='/'>
                        <img src="/logo/logo.png" alt="log" />
                    </Link>
                    <div className="flex items-center flex-col gap-4">
                        <div className="flex items-center justify-center gap-5">
                            <div>
                                <SelectBox data={countries} />
                            </div>
                            <div>
                                <SelectBox data={mony} />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <MediaIcons />
                            {isLoginUser ? (
                                <div className="bg-gradient-to-r from-emerald-500 to-lime-600 text-white px-5 py-1 font-semibold rounded-lg">
                                    <Link href={''}>{userData.username}</Link>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    <Link className="hover:text-rose-600 transition-colors" href='/login'>ورود</Link>
                                    |
                                    <Link className="hover:text-rose-600 transition-colors" href='/register'> ثبت نام</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            {/* navbar */}
            <Navbar openDrawer={openDrawer} />
            <div className={`transition-all duration-300 ${open ? 'h-fit  opacity-100 mb-5' : 'h-0 opacity-0'} text-lg py-2`} >
                <ContentWrapper>
                    <div className="flex items-center border py-1.5 px-3 rounded-full mb-5">
                        <input className="w-full outline-none border-none" type="text" placeholder="جستجو..." />
                        <CiSearch />
                    </div>
                    <ul className="space-y-5 text-gray-400 font-semibold divide-y-4">
                        <li>
                            <Link href={'/'} className="pt-2 hover:text-rose-500 transition-colors">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href={'/books'} className="pt-2 hover:text-rose-500 transition-colors">فروشگاه </Link>
                        </li>
                        <li>
                            <Link href={'/blogs'} className="pt-2 hover:text-rose-500 transition-colors">بلاگ </Link>
                        </li>
                        <li>
                            <Link href={'/'} className="pt-2 hover:text-rose-500 transition-colors">امکانات</Link>
                        </li>
                        <li>
                            <Link href={'/aboutUs'} className="pt-2 hover:text-rose-500 transition-colors">درباره ما</Link>
                        </li>
                        <li>
                            <Link href={'/contactUs'} className="pt-2 hover:text-rose-500 transition-colors">تماس با ما</Link>
                        </li>
                    </ul>
                </ContentWrapper>
            </div>
        </header>
    )
}

export default Header