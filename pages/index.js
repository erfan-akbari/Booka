import HeroBanner from "@/components/template/HeroBanner"
import ContentWrapper from "@/components/module/ContentWrapper"
import BloggSlider from "@/components/template/BloggSlider"
import BooksBanner from "@/components/template/BooksBanner"
import Carousel from "@/components/module/Carousel"
import NewBooks from "@/components/template/NewBooks"
import TopPublishers from "@/components/template/TopPublishers"
import Banner from "@/components/module/Banner"

import connectToDB from "@/utils/db"
import booksModel from "@/models/book"
import bookBannerModel from "@/models/bookBanner"
import articlesModel from "@/models/article"
import topRatedBooksModel from "@/models/topRatedBooks"
import foreignBooksModel from "@/models/foreignBook"
import SlideBanner from "@/components/module/SlideBanner"

export default function Home({ bookBanner, featured, books, topRatedBooks, foreignBooks, topScoreBooks, articles }) {
  const slide1 = [
    '/images/slide/banner-10.jpg',
    '/images/slide/banner-9.jpg',
    '/images/slide/banner-8.jpg'
  ]

  const slide2 = [
    '/images/slide/banner-11.jpg',
    '/images/slide/banner-12.jpg',
    '/images/slide/banner-13.jpg'
  ]

  const slide3 = [
    '/images/slide/banner-20.jpg',
    '/images/slide/banner-21.jpg',
    '/images/slide/banner-22.jpg',
    '/images/slide/banner-23.jpg'
  ]

  return (
    <div>
      <ContentWrapper>
        <HeroBanner />
        <main>
          <BooksBanner data={bookBanner} />
          <SlideBanner data={slide1} />
          <Carousel data={featured} title={'فروش ویژه جشنواره'} type={'featured'} />
          <SlideBanner data={slide3} />
          <Carousel data={topScoreBooks} title={'پرامتیازترین کتاب‌ها'} type={'topScoreBook'} />
          <Banner img={'/images/slide/banner-5.jpg'} />
          <NewBooks data={books} />
          <Banner img={'/images/slide/banner-6.jpg'} />
          <Carousel data={topRatedBooks} title={'کتاب های دارای رتبه برتر'} type={'topRated'} />
          <SlideBanner data={slide2} />
          <Carousel data={foreignBooks} title={'کتاب های برتر خارجی'} type={'foreignBook'} />
          <Banner img={'/images/slide/banner-7.jpg'} />
          <BloggSlider data={articles} title={'آخرین مطالب سایت'} />
          <TopPublishers title={'ناشران برتر'} />
        </main>
      </ContentWrapper>
    </div>
  )
}

export async function getStaticProps() {
  connectToDB()
  const articles = await articlesModel.find()
  const books = await booksModel.find()
  const bookBanner = await bookBannerModel.find()
  const topRatedBooks = await topRatedBooksModel.find()
  const foreignBooks = await foreignBooksModel.find()
  const featured = [...books].sort((a, b) => b.discount - a.discount)
  const topScoreBooks = [...books].sort((a, b) => a.score - b.score)

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
      books: JSON.parse(JSON.stringify(books)),
      bookBanner: JSON.parse(JSON.stringify(bookBanner)),
      featured: JSON.parse(JSON.stringify(featured.slice(0, 10))),
      topRatedBooks: JSON.parse(JSON.stringify(topRatedBooks)),
      foreignBooks: JSON.parse(JSON.stringify(foreignBooks.slice(0, 10))),
      topScoreBooks: JSON.parse(JSON.stringify(topScoreBooks.slice(0, 10))),
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}