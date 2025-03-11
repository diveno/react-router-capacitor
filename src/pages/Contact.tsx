import { NavLink } from "react-router";

function Contact() {
  return (
    <>
      <p className="read-the-docs text-3xl font-bold pb-4">Contacts</p>
      <NavLink to="/" end>
        Back to home
      </NavLink>
    </>
  );
}

export default Contact;
