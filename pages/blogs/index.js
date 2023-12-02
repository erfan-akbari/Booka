import ContentWrapper from '@/components/module/ContentWrapper'
import Sidebar from '@/components/module/Sidebar'
import Title from '@/components/module/Title'
import Link from 'next/link'

import connectToDB from '@/utils/db'
import articlesModel from "@/models/article"

export default function Blogs({ articles }) {

  return (
    <div className='shadow-inner py-10'>
      <ContentWrapper>
        <div className="flex items-start flex-col lg:flex-row gap-10">
          <main className="basis-[65%]">
            <Title value={'مقاله ها'} />
            <div className="flex flex-col gap-10">
              {articles?.map(article => (
                <article key={article._id} className='shadow-md p-2 rounded-lg border-t-4'>
                  <div className="flex flex-col gap-5 py-5">
                    {article.posters[0].img && <Link href={`/blogs/${article.shortName}`}>
                      <img className='rounded-lg' src={article.posters[0].img} alt="image post" />
                    </Link>}
                    <Link href={`/blogs/${article.shortName}`}>
                      <h4 className='text-2xl text-rose-600'>{article.title}</h4>
                    </Link>
                    <div className="text-gray-600">16 بهمن 1400 / بدون نظر / نویسنده:  {article.creator.title}</div>
                    <p className="text-gray-400 font-semibold">{article.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </main>
          <Sidebar />
        </div>
      </ContentWrapper>
    </div>
  )
}

export async function getStaticProps({ params }) {
  connectToDB()
  const articles = await articlesModel.find().populate("creator");
  console.log(articles);
  if (!articles) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles))
    }
  }
}