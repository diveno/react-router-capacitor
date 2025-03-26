import uboxLogo from "../assets/logo.svg";
import settingsSvg from "../assets/settings.svg";
import uboxCard from "../assets/ubox-card.svg";

function Navbar() {
  return (
    <>
      <div className="flex justify-between fixed top-4 left-0 right-0 p-4">
        <img src={uboxCard} alt="Ubox card" />
        <img src={uboxLogo} alt="Ubox logo" />
        <img src={settingsSvg} alt="Settings" />
      </div>
      <div className="sticky top-0 h-16"></div>
    </>
  );
}

export default Navbar;
