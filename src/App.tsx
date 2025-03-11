import { NavLink } from "react-router";
import "./App.css";
import capacitorLogo from "./assets/capacitor.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 text-center">
        <a
          href="https://vite.dev"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            height={"128px"}
            width={"128px"}
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src={reactLogo}
            className="logo"
            alt="React logo"
            height={"128px"}
            width={"128px"}
          />
        </a>
        <a
          href="https://capacitorjs.com"
          target="_blank"
          className="flex justify-center"
        >
          <img
            src={capacitorLogo}
            className="logo"
            alt="Capacitor logo"
            height={"128px"}
            width={"128px"}
          />
        </a>
      </div>
      <div className="flex flex-col pb-4">
        <h1 className="pb-4">Vite + React + Capacitor</h1>
        <p>
          Welcome to this test project! Here's a little example of a Vite+React
          <br />
          application with Capacitor where I added React Router. Enjoy 😊
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <NavLink to="/news" end>
          News list
        </NavLink>
        <p></p>
        <NavLink to="/contact" end>
          Contact us
        </NavLink>
      </div>
    </>
  );
}

export default App;
