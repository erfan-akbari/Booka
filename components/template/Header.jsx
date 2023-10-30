import SelectBox from "../module/SelectBox"
import ContentWrapper from "../module/ContentWrapper"
import useSelect from "@/hooks/useSelect";
import Link from "next/link";
import MediaIcons from "../module/MediaIcons";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import { IoMenu } from 'react-icons/io5'
import { useState } from "react";

function Header() {
    const { countries, mony } = useSelect();

    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(prev => !prev);

    return (
        <header>
            <ContentWrapper>
                {/* header content */}
                <div className="flex items-center justify-center my-7 flex-wrap sm:flex-nowrap sm:justify-between gap-10 sm:gap--0">
                    <div className="">
                        <img src="/logo/logo.png" alt="log" />
                    </div>
                    <div className="flex items-center flex-col gap-4">
                        <div className="flex items-center justify-center gap-5">
                            <div className="">
                                <SelectBox data={countries} />
                            </div>
                            <div className="">
                                <SelectBox data={mony} />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <MediaIcons />
                            <Link href={''}>ورود | ثبت نام</Link>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            {/* navbar */}
            <nav className='border-t sticky top-0 left-0 right-0'>
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
                                <input className="outline-none border-none" type="text" placeholder="جستجو..." />
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
            <div className={`transition-all duration-300 ${open ? 'h-fit  opacity-100 mb-5' : 'h-0 opacity-0'} text-lg py-2`} >
                <ContentWrapper>
                    <div className="flex items-center border py-1.5 px-3 rounded-full mb-5">
                        <input className="w-full outline-none border-none" type="text" placeholder="جستجو..." />
                        <CiSearch />
                    </div>
                    <ul className="space-y-5 text-gray-400 font-semibold divide-y-4">
                        <li>
                            <Link href={''} className="pt-2 hover:text-rose-500 transition-colors">صفحه اصلی</Link>
                        </li>
                        <li>
                            <Link href={''} className="pt-2 hover:text-rose-500 transition-colors">فروشگاه </Link>
                        </li>
                        <li>
                            <Link href={''} className="pt-2 hover:text-rose-500 transition-colors">بلاگ </Link>
                        </li>
                        <li>
                            <Link href={''} className="pt-2 hover:text-rose-500 transition-colors">امکانات</Link>
                        </li>
                        <li>
                            <Link href={''} className="pt-2 hover:text-rose-500 transition-colors">درباره ما</Link>
                        </li>
                        <li>
                            <Link href={''} className="pt-2 hover:text-rose-500 transition-colors">تماس با ما</Link>
                        </li>
                    </ul>
                </ContentWrapper>
            </div>
        </header>
    )
}

export default Header