import Carousel from "@/components/template/Carousel";
import SectionBookDetails from "@/components/template/SectionBookDetails";
import ContentWrapper from "@/components/module/ContentWrapper";
import Tab from "@/components/template/Tab";

import connectToDB from "@/utils/db";
import topRatedBooksModel from "@/models/topRatedBooks"
import featuredModel from "@/models/featured"


export default function BookDetails({ book, topRatedBooks }) {
  return (
    <main className="shadow-inner">
      <SectionBookDetails data={...book} />
      <ContentWrapper>
        <Tab />
        <Carousel data={topRatedBooks} title={'محصولات مرتبط'} type={'topRated'} />
      </ContentWrapper>
    </main>
  )
}

export async function getStaticPaths() {
  connectToDB()
  const books = await featuredModel.find()

  const paths = books?.slice(0, 3).map(book => {
    return {
      params: { id: String(book._id) }
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  connectToDB()
  const book = await featuredModel.findOne({ _id: params.id })
  const topRatedBooks = await topRatedBooksModel.find()
console.log(book);
  if (!book) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      book: JSON.parse(JSON.stringify(book)),
      topRatedBooks: JSON.parse(JSON.stringify(topRatedBooks)),
    },
    revalidate: 60 * 60 * 12 // 43,200
  }
}