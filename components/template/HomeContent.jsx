import CardV1 from "../module/CardV1"
import ContentWrapper from "../module/ContentWrapper"
import Featureds from "./Featureds"
import NewBooks from "./NewBooks"
import TopRatedBooks from "./TopRatedBooks"
import { booksBanner, featured, books, topRatedBooks } from "@/Data/HomData"

function HomeContent() {


    return (
        <div className="">
            <ContentWrapper>
                <main className="">
                    <section className='flex flex-col md:flex-row items-center justify-between gap-5'>
                        {booksBanner.map(book => (
                            <CardV1 key={book.id} {...book} />
                        ))}
                    </section>
                    <Featureds data={featured} />
                    <NewBooks data={books} />
                    <TopRatedBooks data={topRatedBooks} />
                </main>
            </ContentWrapper>
        </div>
    )
}

export default HomeContent