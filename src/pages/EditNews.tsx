import { NavLink, useParams } from "react-router";

function EditNews() {
  const { news } = useParams();

  return (
    <>
      <p className="read-the-docs text-3xl font-bold pb-4">Edit news {news}</p>
      <NavLink to={`/news/${news}`} end>
        Back to detail
      </NavLink>
    </>
  );
}

export default EditNews;
