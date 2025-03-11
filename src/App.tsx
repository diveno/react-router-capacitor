import { NavLink } from "react-router";
import "./App.css";
import capacitorLogo from "./assets/capacitor.svg";
import reactLogo from "./assets/react.svg";
import githubLogo from "/github.svg";
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
      <h1 className="pb-4">Vite + React + Capacitor</h1>
      <div className="flex flex-col items-center gap-y-2">
        <NavLink to="/news" end>
          News list
        </NavLink>
        <p></p>
        <NavLink to="/contact" end>
          Contact us
        </NavLink>
        <p></p>
        <div className="flex items-center">
          <a href="https://github.com/diveno" target="_blank">
            <img
              src={githubLogo}
              className="react"
              alt="Github logo"
              width={"14px"}
              height={"14px"}
            />
          </a>
          <a href="https://github.com/diveno" className="pl-1">
            Github
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
