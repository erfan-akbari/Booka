import HeroBanner from "@/components/template/HeroBanner"
import ContentWrapper from "@/components/module/ContentWrapper"
import BloggSlider from "@/components/template/BloggSlider"
import BooksBanner from "@/components/template/BooksBanner"
import Carousel from "@/components/template/Carousel"
import NewBooks from "@/components/template/NewBooks"
import TopPublishers from "@/components/template/TopPublishers"

const fs = require('fs')
const path = require('path')

export default function Home({ booksBanner, featured, books, topRatedBooks }) {
  return (
    <div>
      <HeroBanner />
      <ContentWrapper>
        <main>
          <BooksBanner data={booksBanner} />
          <Carousel data={featured} title={'فروش ویژه جشنواره'} />
          <NewBooks data={books} />
          <Carousel data={topRatedBooks} title={'پرامتیازترین کتاب‌ها'} />
          <BloggSlider title={'آخرین مطالب سایت'} />
          <TopPublishers title={'ناشران برتر'} />
        </main>
      </ContentWrapper>
    </div>
  )
}

export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), 'Data', 'db.json')
  const data = fs.readFileSync(dbPath)
  const parsedData = JSON.parse(data)

  return {
    props: {
      booksBanner: parsedData.booksBanner,
      featured: parsedData.featured,
      books: parsedData.books,
      topRatedBooks: parsedData.topRatedBooks
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}