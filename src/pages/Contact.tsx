import { NavLink } from "react-router";
import githubLogo from "/github.svg";

function Contact() {
  return (
    <>
      <p className="read-the-docs text-3xl font-bold pb-4">Contacts</p>
      <div className="flex flex-col items-center gap-y-2">
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
        <NavLink to="/" end>
          Back to home
        </NavLink>
      </div>
    </>
  );
}

export default Contact;
