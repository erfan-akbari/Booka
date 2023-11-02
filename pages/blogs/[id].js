import Comments from '@/components/module/Comments'
import ContentWrapper from '@/components/module/ContentWrapper'
import Sidebar from '@/components/module/Sidebar'
import React from 'react'

function Blog() {
    return (
        <div className="">
            <ContentWrapper>
                <div className="flex items-start flex-col lg:flex-row gap-10">
                    <div className="basis-[65%]">
                        <header class="mb-10 not-format shadow-md p-2 rounded-lg border-t-4">
                            <address class="flex items-center mb-6 not-italic">
                                <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img class="ml-4 w-16 h-16 rounded-full" src="/logo/avatar-1.png" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">فرشاد محدی</a>
                                        <p class="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">لورم ایپسوم متنی است که ساختگی و چاپ آن مورد است.</h1>
                        </header>
                        <main>
                            <article className='shadow-md p-2 rounded-lg border-t-4'>
                                <div className="flex flex-col gap-5">
                                    <img className='rounded-lg' src="/images/blogs/post-1.jpg" alt="image post" />
                                    <h4 className='text-2xl text-rose-600'>نوشته به همراه تصویر</h4>
                                    <div className="text-gray-600">16 بهمن 1400 / بدون نظر / نویسنده: مدیر سایت</div>
                                    <p className="text-gray-400 font-semibold">
                                        لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                                    </p>
                                    <p className="text-gray-400 font-semibold">
                                        لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                                    </p>
                                    <p className="text-gray-400 font-semibold">
                                        لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                                    </p>
                                    <p className="text-gray-400 font-semibold">
                                        لورم ایپسوم متنی است که ساختگی برای طراحی و چاپ آن مورد است. صنعت چاپ زمانی لازم بود شرایطی شما باید فکر ثبت نام و طراحی، لازمه خروج می باشد. در ضمن قاعده همفکری ها جوابگوی سئوالات زیاد شاید باشد، آنچنان که لازم بود طراحی گرافیکی خوب بود. کتابهای زیادی شرایط سخت ، دشوار و کمی در سالهای دور لازم است. هدف از این نسخه فرهنگ پس از آن و دستاوردهای خوب شاید باشد. حروفچینی لازم در شرایط فعلی لازمه تکنولوژی بود که گذشته.
                                    </p>
                                </div>
                            </article>
                        </main>
                        <footer className='shadow-md p-2 rounded-lg border-t-4 my-10'>
                            <Comments />
                        </footer>
                    </div>
                    <Sidebar />
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Blog