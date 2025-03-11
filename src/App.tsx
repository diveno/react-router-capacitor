import { NavLink } from "react-router";
import "./App.css";
import capacitorLogo from "./assets/capacitor.svg";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://capacitorjs.com" target="_blank">
          <img src={capacitorLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Capacitor</h1>
      <NavLink to="/contact" end>
        Contact us
      </NavLink>
      <p></p>
      <NavLink to="/news" end>
        News list
      </NavLink>
      <p></p>
      <a href="https://github.com/diveno">Github</a>
    </>
  );
}

export default App;
