import ContentWrapper from "@/components/module/ContentWrapper"
import HeroBanner from "@/components/template/HeroBanner"

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <ContentWrapper>
        <div className="">
          body
        </div>
      </ContentWrapper>
    </main>
  )
}