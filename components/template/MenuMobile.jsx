import Link from 'next/link'
import React from 'react'
import ContentWrapper from '../module/ContentWrapper'
import SearchBox from '../module/SearchBox'

function MenuMobile({ open,  }) {
    return (
        <div className={`bg-gray-100 transition-all duration-300 ${open ? 'h-fit block opacity-100 mb-5' : 'h-0 hidden opacity-0'} text-lg py-2 border-t-4 shadow-lg`} >
            <ContentWrapper>
                <SearchBox styles={'flex justify-between mb-5'} />
                <ul className="space-y-5 text-gray-400 font-semibold">
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
    )
}

export default MenuMobile