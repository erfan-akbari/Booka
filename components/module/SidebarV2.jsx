import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { TiTick } from "react-icons/ti";
import Link from "next/link";

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

function SidebarV2({ data }) {
    const { categories, writers, translators, publications } = data

    const [open, setOpen] = useState(1);
    const [categorieFilter, setCategorieFilter] = useState("همه");
    const [publicationFilter, setPublicationFilter] = useState("همه");
    const [writerFilter, setWriterFilter] = useState("همه");
    const [translatorFilter, setTranslatorFilter] = useState("همه");


    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <aside className='lg:sticky lg:top-5 w-full lg:basis-[25%]'>
            <h3 className="text-red-600 text-xl mb-5">براساس فیلتر خرید کنید</h3>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>دسته بندی</AccordionHeader>
                <AccordionBody>
                    <ul className='flex flex-col gap-2'>
                        <Link
                            onClick={() => setCategorieFilter('همه')}
                            href={`/books`}
                            className={`hover:text-rose-800 cursor-pointer flex items-center ${categorieFilter === 'همه' && 'text-rose-800 font-bold'}`}
                        >
                            همه
                            {categorieFilter === 'همه' && <TiTick className="text-lime-500 text-xl" />}
                        </Link>
                        {categories?.map(item => (
                            <Link
                                onClick={() => setCategorieFilter(item.text)}
                                href={`/books?cat=${item.text}`}
                                className={`hover:text-rose-800 cursor-pointer flex items-center ${item.text === categorieFilter && 'text-rose-800 font-bold'}`}
                                key={item._id}>
                                {item.text}
                                {item.text === categorieFilter && <TiTick className="text-lime-500 text-xl" />}
                            </Link>
                        ))}
                    </ul>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    انتشارات
                </AccordionHeader>
                <AccordionBody>
                    <ul className='flex flex-col gap-2'>
                        <Link
                            onClick={() => setPublicationFilter('همه')}
                            href={`/books`}
                            className={`hover:text-rose-800 cursor-pointer flex items-center ${publicationFilter === 'همه' && 'text-rose-800 font-bold'}`}
                        >
                            همه
                            {publicationFilter === 'همه' && <TiTick className="text-lime-500 text-xl" />}
                        </Link>
                        {publications?.map(item => (
                            <Link
                                onClick={() => setPublicationFilter(item.title)}
                                href={`/books?p=${item.title}`}
                                className={`hover:text-rose-800 cursor-pointer flex items-center ${item.title === publicationFilter && 'text-rose-800 font-bold'}`}
                                key={item._id}>
                                {item.title}
                                {item.title === publicationFilter && <TiTick className="text-lime-500 text-xl" />}
                            </Link>
                        ))}
                    </ul>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    نویسنده
                </AccordionHeader>
                <AccordionBody>
                    <ul className='flex flex-col gap-2'>
                        <Link
                            onClick={() => setWriterFilter('همه')}
                            href={`/books`}
                            className={`hover:text-rose-800 cursor-pointer flex items-center ${writerFilter === 'همه' && 'text-rose-800 font-bold'}`}
                        >
                            همه
                            {writerFilter === 'همه' && <TiTick className="text-lime-500 text-xl" />}
                        </Link>
                        {writers?.map(item => (
                            <Link
                                onClick={() => setWriterFilter(item.title)}
                                href={`/books?w=${item.title}`}
                                className={`hover:text-rose-800 cursor-pointer flex items-center ${item.title === writerFilter && 'text-rose-800 font-bold'}`}
                                key={item._id}>
                                {item.title}
                                {item.title === writerFilter && <TiTick className="text-lime-500 text-xl" />}
                            </Link>
                        ))}
                    </ul>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    مترجم
                </AccordionHeader>
                <AccordionBody>
                    <ul className='flex flex-col gap-2'>
                        <Link
                            onClick={() => setTranslatorFilter('همه')}
                            href={`/books`}
                            className={`hover:text-rose-800 cursor-pointer flex items-center ${translatorFilter === 'همه' && 'text-rose-800 font-bold'}`}
                        >
                            همه
                            {translatorFilter === 'همه' && <TiTick className="text-lime-500 text-xl" />}
                        </Link>
                        {translators?.map(item => (
                            <Link
                                onClick={() => setTranslatorFilter(item.title)}
                                href={`/books?t=${item.title}`}
                                className={`hover:text-rose-800 cursor-pointer flex items-center ${item.title === translatorFilter && 'text-rose-800 font-bold'}`}
                                key={item._id}>
                                {item.title}
                                {item.title === translatorFilter && <TiTick className="text-lime-500 text-xl" />}
                            </Link>
                        ))}
                    </ul>
                </AccordionBody >
            </Accordion >
            <ul>

            </ul>
        </aside >
    )
}

export default SidebarV2