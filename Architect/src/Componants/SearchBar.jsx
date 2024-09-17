const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input type="text" placeholder="Search by Name 🔎" />
        <input type="text" placeholder="Location 🌍" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
