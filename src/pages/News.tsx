import { NavLink, useParams } from "react-router";

function News() {
  const { news } = useParams();
  return (
    <>
      <p className="read-the-docs text-3xl font-bold pb-4">News detail</p>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
      >
        <img
          className="object-cover w-auto rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-4"
          src="/github.svg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            We are here to talk about news #{news}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ... and that's why this news is so important for the future of
            software development.
          </p>
        </div>
      </a>
      <p className="pb-2"></p>
      <NavLink to={`/news/${news}/edit`} end>
        Edit news {news}
      </NavLink>
      <p className="pb-4"></p>
      <NavLink to="/news" end>
        Back to list
      </NavLink>
    </>
  );
}

export default News;
