import { NavLink, useParams } from "react-router";

function News() {
  const { news } = useParams();
  return (
    <>
      <p className="read-the-docs">Dettaglio news</p>
      <NavLink to={`/news/${news}/edit`} end>
        Modifica news {news}
      </NavLink>
      <p></p>
      <NavLink to="/news" end>
        Torna alla lista
      </NavLink>
    </>
  );
}

export default News;
