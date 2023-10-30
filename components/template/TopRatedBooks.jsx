import CardV3 from "../module/CardV3"


function TopRatedBooks({ data }) {
    return (
        <>
            <h2 className="text-indigo-600 text-3xl font-black mt-10 mb-5">--- پرامتیازترین کتاب‌ها</h2>
            <section className="pt-5 pb-10 grid grid-cols-3">
                {data?.map(book => (
                    <CardV3 key={book.id} {...book} />
                ))}
            </section>
        </>
    )
}

export default TopRatedBooks