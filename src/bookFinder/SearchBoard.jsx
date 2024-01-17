import { useState } from "react";
import BookList from "./BookList";
import BooksSorting from "./BooksSorting";
import { bookDefault, sortCul } from "./DefaultData";
import SearchForm from "./SearchForm";

export default function SearchBoard() {
  let [books, setBooks] = useState(bookDefault);

  let hanldeSearchBooks = (searchValue) => {
    let searchingVal = books.filter((book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setBooks([...searchingVal]);
  };

  let handleFavorite = (book) => {
    let favIndex = books.findIndex((item) => item.id === book.id);
    let newBookFav = [...books];
    newBookFav[favIndex].isFavorite = !newBookFav[favIndex].isFavorite;
    setBooks([...newBookFav]);
  };

  let handleSorting = (e) => {
    let nameValue = e.target.value;
    if (nameValue === "name_asc") {
      const bookslist = [...books];
      sortCul(bookslist);
      setBooks(bookslist);
    } else if (nameValue === "name_desc") {
      const bookslist = [...books];
      sortCul(bookslist);
      setBooks(bookslist.reverse());
    } else if (nameValue === "year_asc") {
      const bookslist = [...books];
      bookslist.sort((year1, year2) => year1.published - year2.published);
      setBooks(bookslist);
    } else if (nameValue === "year_desc") {
      const bookslist = [...books];
      bookslist.sort((year1, year2) => year1.published - year2.published);
      setBooks(bookslist.reverse());
    }
  };

  return (
    <>
      <main className="my-10 lg:my-14">
        <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
          <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            <SearchForm onSearchValue={hanldeSearchBooks} />
            <BooksSorting onSort={handleSorting} />
          </div>
        </header>
        <BookList books={books} onFav={handleFavorite} />
      </main>
    </>
  );
}
