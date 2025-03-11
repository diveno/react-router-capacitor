import { NavLink, useParams } from "react-router";

function EditNews() {
  const { news } = useParams();

  return (
    <>
      <p className="read-the-docs">Modifica news {news}</p>
      <NavLink to={`/news/${news}`} end>
        Torna al dettaglio
      </NavLink>
    </>
  );
}

export default EditNews;
