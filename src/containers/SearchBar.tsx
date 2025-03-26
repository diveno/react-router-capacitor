import chevronDownIcon from "../assets/chevron-down.svg";
import pinMapIcon from "../assets/pin-map.svg";
import searchIcon from "../assets/search.svg";

function SearchBar() {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-solid border-gray-300 w-full h-[50px]">
      <div className="flex items-center gap-2">
        <img src={searchIcon} alt="Search" />
        <span className="font-normal text-text-secondary text-xs">
          Cerca su UniversityBox
        </span>
      </div>

      <div className="flex items-center justify-end gap-1">
        <div className="w-px h-3 bg-gray-300"></div>
        <img src={pinMapIcon} alt="Map Pin" />
        <span className="font-normal text-text-primary text-xs leading-4">
          Milano
        </span>
        <img src={chevronDownIcon} alt="Open" />
      </div>
    </div>
  );
}

export default SearchBar;
