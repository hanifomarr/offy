import SearchBar from "../../components/searchBar/SearchBar";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          Office Sharing
          <br />
          <span>Redefined</span>
        </h1>
        <p>
          From cozy corners to bustling hubs, find your perfect office today.
        </p>
      </div>
      <SearchBar />
    </section>
  );
};

export default Home;
