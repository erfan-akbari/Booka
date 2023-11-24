import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoMenu } from 'react-icons/io5'
import { IoClose } from "react-icons/io5";
import ContentWrapper from "../module/ContentWrapper";
import SearchBox from "../module/SearchBox";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";

function Navbar({ open, openDrawer }) {
    const [categories, setCategories] = useState()
    const { pathname } = useRouter()

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const res = await fetch(`/api/categories`)
        const data = await res.json()
        setCategories(data)
    }

    return (
        <nav className='border-t z-50'>
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <div className="w-full flex items-center justify-between">
                        <ul className="flex items-center gap-3 text-gray-400 font-semibold text-base">
                            <li className="hidden lg:block">
                                <Link href={'/'} className={`px-1 ${pathname === '/' && 'text-rose-600 hover:text-black'} hover:text-rose-600 transition-colors`}>صفحه اصلی</Link>
                            </li>
                            <li className="hidden lg:block group relative">
                                <div className="px-1 hover:text-rose-600 transition-colors flex items-end gap-1">
                                    دسته بندی
                                    <IoIosArrowDown />
                                </div>
                                <ul className="hidden group-hover:block absolute top-full lg:w-[800px] xl:w-[1000px] bg-gray-50 pl-4 pr-2 py-2 shadow-lg z-40 border rounded-lg space-y-2">
                                    {categories?.map(cat => (
                                        <li key={cat._id} className="cursor-pointer hover:text-rose-600">
                                            <Link href={`/books?cat=${cat.route}`}>{cat.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={'/books?page=1'} className={`px-1 ${pathname === '/books' && 'text-rose-600 hover:text-black'} hover:text-rose-600 transition-colors`}>فروشگاه</Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={'/blogs'} className={`px-1 ${pathname === '/blogs' && 'text-rose-600 hover:text-black'} hover:text-rose-600 transition-colors`}>مقاله ها</Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={'/aboutUs'} className={`px-1 ${pathname === '/aboutUs' && 'text-rose-600 hover:text-black'} hover:text-rose-600 transition-colors`}>درباره ما</Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={'/contactUs'} className={`px-1 ${pathname === '/contactUs' && 'text-rose-600 hover:text-black'} hover:text-rose-600 transition-colors`}>تماس با ما</Link>
                            </li>
                            <li className="lg:hidden text-3xl cursor-pointer" onClick={openDrawer}>
                                {open ? <IoClose /> : <IoMenu />}
                            </li>
                        </ul>
                        <SearchBox styles={'hidden lg:flex ml-4'} />
                    </div>
                    <div className="min-w-max flex items-center gap-2 border-r-2 pr-10 cursor-pointer hover:shadow-xl p-4">
                        <Link href={'/payment'} className="text-xl flex items-center gap-1">
                            سبد خرید
                            <div className="ml-2 font-semibold">(3)</div>
                        </Link>
                        <div className="bg-rose-600 text-white text-2xl rounded-full rounded-se-md p-2">
                            <AiOutlineShoppingCart />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar