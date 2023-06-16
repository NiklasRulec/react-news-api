import Header from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const [news, setNews] = useState();

  const API_KEY = import.meta.env.VITE_API_KEY;

  const searchFunction = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${searchInput}&language=${countryInput}&sortBy=${sortInput}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((news) => {
        setNews(news);
        console.log(news);
      })
      .catch((error) => {
        console.log("Fehler beim Laden", error);
      });
  };

  const [searchInput, setSearchInput] = useState();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const [countryInput, setCountryInput] = useState("de");

  const handleCountryChange = (e) => {
    setCountryInput(e.target.value);
  };

  const [sortInput, setSortInput] = useState("relevancy");

  const handleSortChange = (e) => {
    setSortInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunction();
    console.log(searchInput);
  };

  return (
    <>
      <Header />
      <article className="search-field">
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchInput} onChange={handleInputChange} />
          <select value={countryInput} onChange={handleCountryChange}>
            <option value="de">Deutsch</option>
            <option value="en">Englisch</option>
            <option value="fr">Französisch</option>
            <option value="es">Spanisch</option>
          </select>
          <select value={sortInput} onChange={handleSortChange}>
            <option value="relevancy">Relevanz</option>
            <option value="popularity">Popularität</option>
            <option value="publishedAt">Neueste</option>
          </select>
          <input type="submit" value="Suchen" />
        </form>
      </article>
      <h1>Articles</h1>
      {news ? (
        <section className="news-section">
          {news.articles.map((elm, index) => (
            <article key={index} className="news-card">
              <h2>{elm.title}</h2>
              {/* <img src={elm.urlToImage} alt="img" /> */}

              {elm.urlToImage ? (
                <img src={elm.urlToImage} alt="img" />
              ) : (
                <h2>Kein Vorschaubild verfügbar</h2>
              )}

              <p>{elm.description}</p>
              <Link to={elm.url} target="_blank">
                {" "}
                Zum Artikel
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <h1></h1>
      )}
    </>
  );
};

export default NewsSection;
