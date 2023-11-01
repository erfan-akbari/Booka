import Link from "next/link";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'
import ContentWrapper from "../module/ContentWrapper";

function Navbar({ openDrawer }) {
    return (
        <nav className='border-t z-50'>
            <ContentWrapper>
                <div className="flex items-center justify-between">
                    <div className="w-full flex items-center justify-between">
                        <ul className="flex items-center gap-5 text-gray-400 font-semibold">
                            <li className="hidden lg:block">
                                <Link href={''} className="px-1 hover:text-rose-500 transition-colors">صفحه اصلی</Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={''} className="px-1 hover:text-rose-500 transition-colors">فروشگاه </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={''} className="px-1 hover:text-rose-500 transition-colors">بلاگ </Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={''} className="px-1 hover:text-rose-500 transition-colors">امکانات</Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={''} className="px-1 hover:text-rose-500 transition-colors">درباره ما</Link>
                            </li>
                            <li className="hidden lg:block">
                                <Link href={''} className="px-1 hover:text-rose-500 transition-colors">تماس با ما</Link>
                            </li>
                            <li className="lg:hidden text-3xl cursor-pointer" onClick={openDrawer}>
                                <IoMenu />
                            </li>
                        </ul>
                        <div className="hidden lg:flex items-center border py-1.5 px-3 rounded-full ml-16">
                            <input className="outline-none border-none bg-transparent" type="text" placeholder="جستجو..." />
                            <CiSearch />
                        </div>
                    </div>
                    <div className="min-w-max flex items-center gap-2 border-r-2 pr-10 cursor-pointer hover:shadow-xl p-4">
                        <div className="text-xl flex items-center gap-1">
                            سبد خرید
                            <div className="ml-2 font-semibold">(3)</div>
                        </div>
                        <div className=" bg-rose-500 text-white text-2xl rounded-full rounded-se-md p-2">
                            <AiOutlineShoppingCart />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </nav>
    )
}

export default Navbar