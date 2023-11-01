import { books } from "@/Data/HomData"
import Carousel from "@/components/template/Carousel";
import SectionBookDetails from "@/components/template/SectionBookDetails";
import { featured } from "../../Data/HomData"
import ContentWrapper from "@/components/module/ContentWrapper";
import Tab from "@/components/template/Tab";

export default function BookDetails({ book }) {
  console.log(book.poster);

  return (
    <main className="shadow-inner">
      <SectionBookDetails data={book} />
      <ContentWrapper>
        <Tab />
        <Carousel data={featured} title={'محصولات مرتبط'} />
      </ContentWrapper>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = books.map(book => {
    return {
      params: { id: String(book.id) }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const book = books.find(book => book.id === +params.id)

  return {
    props: {
      book
    }
  }
}