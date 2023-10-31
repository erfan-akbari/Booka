import ContentWrapper from "../module/ContentWrapper"
import BooksBanner from "./BooksBanner"
import Featureds from "./Featureds"
import NewBooks from "./NewBooks"
import TopRatedBooks from "./TopRatedBooks"
import { booksBanner, featured, books, topRatedBooks } from "@/Data/HomData"

function HomeContent() {


    return (
        <div>
            <ContentWrapper>
                <main>
                    <BooksBanner data={booksBanner} />
                    <Featureds data={featured} />
                    <NewBooks data={books} />
                    <TopRatedBooks data={topRatedBooks} />
                </main>
            </ContentWrapper>
        </div>
    )
}

export default HomeContent