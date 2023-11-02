import { CiSearch } from 'react-icons/ci'
import { useState } from 'react'

function Sidebar() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <aside className="sticky top-5  w-full lg:basis-[35%] p-2 flex flex-col justify-center gap-5">
            <h4 className="font-bold text-rose-600 text-lg">جستجو</h4>
            <div className='shadow-md p-2 rounded-lg border-t-4'>
                <div className="w-full flex items-center border py-1.5 px-3 rounded-lg mb-5">
                    <input
                        className="w-full outline-none border-none text-black"
                        type="text" placeholder="جستجو..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)} />
                    <CiSearch />
                </div>
            </div>

            <h4 className="font-bold text-rose-600 text-lg">مطالب اخیر</h4>
            <div className='shadow-md p-2 rounded-lg border-t-4'>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5 border h-24 rounded-lg overflow-hidden">
                        <img className='w-24 h-full' src="/images/blogs/blog-1.jpg" alt="poster" />
                        <div className="overflow-hidden">
                            <p>عنوان نوشته اول</p>
                            <p className='mt-2'>لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 border h-24 rounded-lg overflow-hidden">
                        <img className='w-24 h-full' src="/images/blogs/blog-2.jpg" alt="poster" />
                        <div className="overflow-hidden">
                            <p>عنوان نوشته اول</p>
                            <p className='mt-2'>لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 border h-24 rounded-lg overflow-hidden">
                        <img className='w-24 h-full' src="/images/blogs/blog-3.jpg" alt="poster" />
                        <div className="overflow-hidden">
                            <p>عنوان نوشته اول</p>
                            <p className='mt-2'>لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="font-bold text-rose-600 text-lg">آرشیو مطالب</h4>
            <div className='shadow-md p-2 rounded-lg border-t-4'>
                <div className="">
                    <ul className='space-y-2 list-disc mr-5'>
                        <li>دی 1400 (2)</li>
                        <li>آذر 1400 (3)</li>
                        <li>آبان 1400 (10)</li>
                        <li>مهر 1400 (5)</li>
                        <li>شهریور 1400 (1)</li>
                        <li>مرداد 1400 (3)</li>
                    </ul>
                </div>
            </div>

            <h4 className="font-bold text-rose-600 text-lg">نظرات اخیر</h4>
            <div className="flex flex-col gap-8">
                <div className="relative shadow-lg p-5 rounded-lg border-t-4">
                    <h5 className='font-bold text-lg text-gray-800'>صابر افشاری</h5>
                    <span className='font-semibold text-gray-600'>مطلب شماره یک</span>
                    <p className='text-gray-400'>لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است.</p>
                    <img className='g-16 w-16 rounded-full absolute -top-5 -left-5' src="/logo/avatar-1.png" alt="profile" />
                </div>
                <div className="relative shadow-lg p-5 rounded-lg border-t-4">
                    <h5 className='font-bold text-lg text-gray-800'>سامیار افشاری</h5>
                    <span className='font-semibold text-gray-600'>مطلب شماره یک</span>
                    <p className='text-gray-400'>لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است.</p>
                    <img className='g-16 w-16 rounded-full absolute -top-5 -left-5' src="/logo/avatar-1.png" alt="profile" />
                </div>
                <div className="relative shadow-lg p-5 rounded-lg border-t-4">
                    <h5 className='font-bold text-lg text-gray-800'>مهشید محمدپور</h5>
                    <span className='font-semibold text-gray-600'>مطلب شماره یک</span>
                    <p className='text-gray-400'>لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است.</p>
                    <img className='g-16 w-16 rounded-full absolute -top-5 -left-5' src="/logo/avatar-1.png" alt="profile" />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar