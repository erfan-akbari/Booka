import CardV1 from "../module/CardV1"

export default function BooksBanner({ data }) {

    return (
        <section className='flex flex-col md:flex-row items-center justify-between gap-5 py-6'>
            {data?.map(book => (
                <CardV1 key={book._id} {...book} />
            ))}
        </section>
    )
}
