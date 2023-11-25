import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ContentWrapper from '../module/ContentWrapper'
import SearchBox from '../module/SearchBox'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

function MenuMobile({ open, }) {

    const [categories, setCategories] = useState()
    const [showCategories, setShowCategories] = useState(false)

    const [openAccordion, setOpenAccordion] = React.useState(0);
    const handleOpen = (value) => setOpenAccordion(openAccordion === value ? 0 : value);

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const res = await fetch(`/api/categories`)
        const data = await res.json()
        setCategories(data)
    }

    const showCategoriesHandler = () => {
        setShowCategories(prevState => !prevState)
    }

    return (
        <div className={`bg-gray-100 transition-all duration-300 ${open ? 'h-fit block opacity-100 mb-5' : 'h-0 hidden opacity-0'} text-lg py-2 border-t-4 shadow-lg`} >
            <ContentWrapper>
                <SearchBox styles={'flex justify-between mb-5'} />
                <ul className="space-y-5 text-gray-400 font-semibold">
                    <li className="group relative">
                        <Accordion open={openAccordion === 1} icon={<Icon id={1} open={openAccordion} />}>
                            <AccordionHeader onClick={() => handleOpen(1)}>دسته بندی</AccordionHeader>
                            <AccordionBody>
                                <div className='flex flex-col gap-2'>
                                    {categories?.map(cat => (
                                        <Link href={`/books?page=1&cat=${cat.route}`} key={cat._id}>
                                            {cat.text}
                                        </Link>
                                    ))}
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </li>
                    <li>
                        <Link href={'/'} className="pt-2 hover:text-rose-500 transition-colors">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href={'/books?page=1'} className="pt-2 hover:text-rose-500 transition-colors">فروشگاه </Link>
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