import CardV2 from "@/components/module/CardV2";
import ContentWrapper from "@/components/module/ContentWrapper";
import SelectBox from "@/components/module/SelectBox";
import SidebarV2 from "@/components/module/SidebarV2";
import useSelect from "@/hooks/useSelect";
import { useEffect, useState } from "react";
import LoaderShimmer from "@/components/module/LoaderShimmer";

import connectToDB from "@/utils/db";
import booksModel from "@/models/book";
import categoriesModel from "@/models/categories";
import writersModel from "@/models/writer";
import translatorsModel from "@/models/translator";
import publicationsModel from "@/models/publication";
import Title from "@/components/module/Title";
import { useRouter } from "next/router";
import Link from "next/link";
import PaginationBtn from "@/components/module/PaginationBtn";

export default function Books(props) {
  const { filtersType } = useSelect();
  const { asPath, query } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const { books, btnCount } = props;

  const changeHandler = (value) => {
    setValue(value);
    sortBooksHandler(+value);
  };

  useEffect(() => {
    setValue("");
  }, [asPath]);

  useEffect(() => {
    setIsLoading(true);
  }, [books]);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const sortBooksHandler = async (val) => {
    switch (val) {
      case 1:
        books.sort((a, b) => b.discount - a.discount);
        break;

      case 2:
        books.sort((a, b) => a.discount - b.discount);
        break;

      case 3:
        books.sort((a, b) => a.price - b.price);
        break;

      case 4:
        books.sort((a, b) => b.price - a.price);
        break;

      case 5:
        books.sort((a, b) => a.score - b.score);
        break;

      case 6:
        books.sort((a, b) => b.score - a.score);
        break;

      default:
        books.reverse();
        break;
    }
  };

  return (
    <div className="shadow-inner py-10">
      <ContentWrapper>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-5">
          <SidebarV2 data={props} />
          <main className="w-full lg:basis-[75%] flex flex-col gap-6">
            <div className="flex justify-between mb-5">
              <Title value={"همه محصولات"} />
              <div className="w-72">
                <SelectBox
                  value={value}
                  data={filtersType}
                  changeHandler={changeHandler}
                />
              </div>
            </div>
            {!isLoading ? (
              <div className="w-full lg:basis-[75%] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {books?.map((book) => (
                  <CardV2 key={book._id} {...book} />
                ))}
              </div>
            ) : (
              <div className="w-full lg:basis-[75%] flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
                <LoaderShimmer />
              </div>
            )}
            <PaginationBtn btnCount={btnCount} query={query} />
          </main>
        </div>
      </ContentWrapper>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  connectToDB();
  let books;
  let btnCount;

  if (query.cat) {
    books = await booksModel.find({ category: query.cat });
  } else if (query.t) {
    books = await booksModel.find({ translators: query.t });
  } else if (query.w) {
    books = await booksModel.find({ writer: query.w });
  } else if (query.p) {
    books = await booksModel.find({ publication: query.p });
  } else {
    books = await booksModel.find();
  }

  if (query.page) {
    const currentPage = +query.page;
    const itemCount = 6;
    const endIndex = currentPage * itemCount;
    const startIndex = endIndex - itemCount;
    btnCount = Math.ceil(books.length / itemCount);
    books = books.slice(startIndex, endIndex);
  }

  const categories = await categoriesModel.find();
  const writers = await writersModel.find();
  const translators = await translatorsModel.find();
  const publications = await publicationsModel.find();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
      categories: JSON.parse(JSON.stringify(categories)),
      writers: JSON.parse(JSON.stringify(writers)),
      translators: JSON.parse(JSON.stringify(translators)),
      publications: JSON.parse(JSON.stringify(publications)),
      btnCount,
    },
  };
}
