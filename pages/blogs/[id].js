// import Comments from '@/components/module/Comments'
import ContentWrapper from '@/components/module/ContentWrapper'
import Sidebar from '@/components/module/Sidebar'
import React from 'react'
import Link from 'next/link'

import connectToDB from '@/utils/db'
import articlesModel from "@/models/article"

export default function Blog({ article }) {
    const { creator, posters, description, title } = article;

    return (
        <div>
            <ContentWrapper>
                <div className="flex items-start flex-col lg:flex-row gap-10">
                    <div className="basis-[65%]">
                        <header className="mb-10 not-format shadow-md p-2 rounded-lg border-t-4">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <img className="ml-4 w-16 h-16 rounded-full" src="/logo/avatar-1.png" alt="Jese Leos" />
                                    <div>
                                        <Link href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{creator.title}</Link>
                                        <p className="text-base text-gray-500 dark:text-gray-400"><time  dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h2 className="mb-2 text-lg leading-tight text-gray-400 lg:mb-4 lg:text-2xl dark:text-white">
                                16 بهمن 1400 / بدون نظر / نویسنده: {creator.title}
                            </h2>
                        </header>
                        <main>
                            <article className='shadow-md p-6 rounded-lg border-t-4'>
                                <div className="flex flex-col gap-10">
                                    <h1 className='text-2xl text-rose-600'>{title}</h1>
                                    <p className="text-gray-400 font-semibold">{description}</p>
                                    <div className="flex flex-col gap-10">
                                        {posters.map(({ img, caption }, index) => (
                                            <div key={index + 1} className='flex flex-col gap-5'>
                                                {img && <img className='rounded-lg' src={img} alt="image post" />}
                                                {caption && <p className="text-gray-400 font-semibold">{caption}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </main>
                        {/* <footer className='shadow-md p-2 rounded-lg border-t-4 my-10'> */}
                            {/* <Comments /> */}
                        {/* </footer> */}
                    </div>
                    <Sidebar />
                </div>
            </ContentWrapper>
        </div>
    )
}

export async function getStaticPaths() {
    connectToDB()
    const articles = await articlesModel.find({}).populate("creator");

    const paths = articles?.slice(0, 3).map(article => {
        return {
            params: { id: String(article._id) }
        }
    })

    return {
        paths,
        fallback: "blocking",
    }
}

export async function getStaticProps({ params }) {
    connectToDB()
    const article = await articlesModel.findOne({ _id: params.id }).populate("creator");

    if (!article) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            article: JSON.parse(JSON.stringify(article)),
        },
        revalidate: 60 * 60 * 12 // 43,200
    }
}