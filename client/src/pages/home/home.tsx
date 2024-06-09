import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">
            Office Sharing Redefined: Where Work Meets Community
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of exh2erience</h2>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h2>Years of exh2erience</h2>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h2>Years of exh2erience</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="./bg.png" />
      </div>
    </div>
  );
};

export default Home;
