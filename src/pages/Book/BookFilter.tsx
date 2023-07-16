import { Link } from "react-router-dom";

const BookFilter = ({
  priceRange,
  setSelectedGenre,
  setSearchText,
  searchText,
  selectedGenre,
  setSelectedYear,
  selectedYear,
  value,
  handleRangeChange,
}: any) => {
  return (
    <div className="p-5">
      <h1 className="text-2xl uppercase">Price Range</h1>
      <input
        type="range"
        defaultValue={50}
        max={400}
        min={0}
        step={1}
        onChange={handleRangeChange}
        className="range range-info"
      />
      <h1 className="font-bold mb-2 text-red-500 ">From 0$ To {value}$</h1>

      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs mb-3"
        placeholder="Search by title, author, or genre"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        className="select select-info w-full max-w-xs mb-5"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        <option value="nonfiction">Non-fiction</option>
        <option value="humor">Humor</option>
        <option value="memoir">Memoir</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
        <option value="mystery">Mystery & Thriller</option>
        <option value="historical">Historical Fiction</option>
        <option value="science">Science-Fiction</option>
      </select>

      <select
        className="select select-bordered w-full max-w-xs"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">All Years</option>
        <option value="20010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>

      <Link
        to="/add-new-book"
        className="hover:text-black btn btn-primary mt-5 hover:bg-transparent"
      >
        Add New Books
      </Link>
    </div>
  );
};

export default BookFilter;
