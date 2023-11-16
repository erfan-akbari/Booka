import SelectBox from "../module/SelectBox"
import ContentWrapper from "../module/ContentWrapper"
import useSelect from "@/hooks/useSelect";
import Link from "next/link";
import MediaIcons from "../module/MediaIcons";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import SearchBox from "../module/SearchBox";
import MenuMobile from "./MenuMobile";

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
            <Navbar open={open} openDrawer={openDrawer} />
            <MenuMobile open={open} />
        </header>
    )
}

export default Header