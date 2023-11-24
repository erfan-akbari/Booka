import HeroBanner from "@/components/template/HeroBanner"
import ContentWrapper from "@/components/module/ContentWrapper"
import BloggSlider from "@/components/template/BloggSlider"
import BooksBanner from "@/components/template/BooksBanner"
import Carousel from "@/components/module/Carousel"
import NewBooks from "@/components/template/NewBooks"
import TopPublishers from "@/components/template/TopPublishers"

import connectToDB from "@/utils/db"
import booksModel from "@/models/book"
import bookBannerModel from "@/models/bookBanner"
// import featuredModel from "@/models/featured"
import topRatedBooksModel from "@/models/topRatedBooks"
import foreignBooksModel from "@/models/foreignBook"

export default function Home({ bookBanner, featured, books, topRatedBooks, foreignBooks, topScoreBooks }) {
  return (
    <div>
      <HeroBanner />
      <ContentWrapper>
        <main>
          <BooksBanner data={bookBanner} />
          <Carousel data={featured} title={'فروش ویژه جشنواره'} type={'featured'} />
          <Carousel data={topScoreBooks} title={'پرامتیازترین کتاب‌ها'} type={'topScoreBook'} />
          <NewBooks data={books} />
          <Carousel data={topRatedBooks} title={'کتاب های دارای رتبه برتر'} type={'topRated'} />
          <Carousel data={foreignBooks} title={'کتاب های برتر خارجی'} type={'foreignBook'} />
          <BloggSlider title={'آخرین مطالب سایت'} />
          <TopPublishers title={'ناشران برتر'} />
        </main>
      </ContentWrapper>
    </div>
  )
}

export async function getStaticProps() {
  connectToDB()
  const books = await booksModel.find()
  const bookBanner = await bookBannerModel.find()
  // const featured = await featuredModel.find()
  const topRatedBooks = await topRatedBooksModel.find()
  const foreignBooks = await foreignBooksModel.find()
  const featured = [...books].sort((a, b) => b.discount - a.discount)
  const topScoreBooks = [...books].sort((a, b) => a.score - b.score)

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
      bookBanner: JSON.parse(JSON.stringify(bookBanner)),
      featured: JSON.parse(JSON.stringify(featured.slice(0 ,10))),
      topRatedBooks: JSON.parse(JSON.stringify(topRatedBooks)),
      foreignBooks: JSON.parse(JSON.stringify(foreignBooks.slice(0 ,10))),
      topScoreBooks: JSON.parse(JSON.stringify(topScoreBooks.slice(0 ,10))),
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}