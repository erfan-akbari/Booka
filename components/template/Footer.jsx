import React from 'react'
import MediaIcons from '../module/MediaIcons'
import ContentWrapper from '../module/ContentWrapper'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='bg-gradient-to-t from-red-500 to-rose-700 text-white py-10'>
            <ContentWrapper>
                <div className='flex items-start justify-between flex-wrap gap-2'>
                    <div className="flex flex-col items-start gap-5 basis-[30%]">
                        <h3>
                            <img src="/logo/logo-white.png" alt="logo-white" />
                        </h3>
                        <ul className='font-semibold flex items-center gap-3 flex-wrap bg-white rounded-lg text-red-600 px-2'>
                            <li className='hover:text-rose-950 transition-colors'><Link href={'/'}>خانه</Link></li>
                            <li className='hover:text-rose-950 transition-colors'><Link href={'/'}>صفحات</Link></li>
                            <li className='hover:text-rose-950 transition-colors'><Link href={'/'}>درباره ما</Link></li>
                            <li className='hover:text-rose-950 transition-colors'><Link href={'/'}>قوانین</Link></li>
                            <li className='hover:text-rose-950 transition-colors'><Link href={'/'}>تماس با ما</Link></li>
                        </ul>
                        <p>
                            این بخشی از یک نوشتار آزمایشی صرفا برای پر کردن این ناحیه است. جهت عضویت در خبرنامه ایمیل خود را وارد کنید.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-5 basis-[30%]">
                        <h3 className="text-2xl font-bold">ما را دنبال کنید</h3>
                        <div className="bg-white w-40 rounded-lg">
                            <MediaIcons />
                        </div>
                        <p className="w-full">
                            این یک نوشته آزمایشی است. شما میتوانید این قسمت را با نوشته های دلخواه خود که مناسب این ناحیه باشند پر نمایید. ما این بخش را با نوشته هایی بی معنی پر کرده ایم
                        </p>
                    </div>
                    <div className="flex flex-col gap-5 items-start basis-[30%]">
                        <h3 className="text-2xl font-bold">عضویت در خبرنامه</h3>
                        <div className="rounded-lg overflow-hidden flex items-start bg-white">
                            <input type="text" className='bg-white w-52  text-gray-400 outline-none border-none px-2' />
                            <button className='text-red-600 bg-red-200 px-2 font-bold'>ارسال</button>
                        </div>
                        <p>
                            این بخشی از یک نوشتار آزمایشی صرفا برای پر کردن این ناحیه است. جهت عضویت در خبرنامه ایمیل خود را وارد کنید.
                        </p>
                    </div>
                </div>
            </ContentWrapper>
        </footer>
    )
}

export default Footer