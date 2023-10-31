import ContentWrapper from "../module/ContentWrapper"
import BloggSlider from "./BloggSlider"
import BooksBanner from "./BooksBanner"
import Carousel from "./Carousel"
import NewBooks from "./NewBooks"
import { booksBanner, featured, books, topRatedBooks } from "@/Data/HomData"
import TopPublishers from "./TopPublishers"

function HomeContent() {


    return (
        <div>
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

export default HomeContent