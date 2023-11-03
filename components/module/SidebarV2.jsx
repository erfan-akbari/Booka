import React from "react";
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

function SidebarV2({ categories }) {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <aside className='lg:sticky lg:top-5 w-full lg:basis-[25%]'>
            <h3 className="text-red-600 text-xl mb-5">براساس فیلتر خرید کنید</h3>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>دسته بندی</AccordionHeader>
                <AccordionBody>
                    <ul>
                        {categories.map(cat => (
                            <li key={cat.id}>
                                {cat.text}
                            </li>
                        ))}
                    </ul>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    گرونه سنی
                </AccordionHeader>
                <AccordionBody>
                    <ul>
                        <li>آقایان</li>
                        <li>بانوان</li>
                        <li>جوانان</li>
                        <li>نوجوانان</li>
                        <li>کودکان</li>
                    </ul>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    سایز کتاب (قطع)
                </AccordionHeader>
                <AccordionBody>
                    <ul>
                        <li>وزیری</li>
                        <li>رقعی</li>
                        <li>رحلی</li>
                        <li>خشتی</li>
                        <li>سلطانی</li>
                        <li>جیبی</li>
                    </ul>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                    ناشران
                </AccordionHeader>
                <AccordionBody>
                    <ul>
                        <li className="box">ناشر یک</li>
                        <li className="box">ناشر دو</li>
                        <li className="box">ناشر سه</li>
                        <li className="box">ناشر چهار</li>
                        <li className="box">ناشر پنج</li>
                        <li className="box">ناشر شش</li>
                    </ul >
                </AccordionBody >
            </Accordion >
            <ul>

            </ul>
        </aside >
    )
}

export default SidebarV2