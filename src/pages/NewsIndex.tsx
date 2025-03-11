import { NavLink } from "react-router";

function NewsIndex() {
  return (
    <>
      <p className="read-the-docs">Lista news</p>
      <NavLink to="/news/1" end>
        News 1
      </NavLink>
      <p></p>
      <NavLink to="/news/2" end>
        News 2
      </NavLink>
      <p></p>
      <NavLink to="/" end>
        Torna alla home
      </NavLink>
    </>
  );
}

export default NewsIndex;
