import avatar from "../assets/placeholder-avatar.png";
import Events from "./Events";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full items-start gap-4 px-3 py-0 mt-8">
        <div className="flex items-center gap-2">
          <img src={avatar} alt="Ubox card" width={"48px"} height={"48px"} />

          <div className="flex flex-col text-left">
            <h3 className="font-bold text-xl text-text-primary">Ciao Maria,</h3>
            <p className="text-sm text-text-primary">cosa vuoi fare oggi?</p>
          </div>
        </div>
        <SearchBar />
        <Events />
        <div
          className="flex flex-col h-48 items-center justify-between p-3 rounded-2xl border border-solid border-stroke bg-cover bg-center w-full"
          style={{ backgroundImage: "url(../src/assets/gardaland.png)" }}
        >
          <div className="relative w-6 h-6" />

          <div className="inline-flex items-end justify-center gap-1 h-16">
            <div className="inline-flex items-center gap-1 px-1.5 py-1 bg-[#ffffff99] rounded-[9rem]">
              <div className="w-1.5 h-1.5 bg-[#444444] rounded-[0.5rem]" />
              <div className="w-1.5 h-1.5 bg-[#33333380] rounded-[0.5rem]" />
              <div className="w-1.5 h-1.5 bg-[#33333380] rounded-[0.5rem]" />
              <div className="w-1.5 h-1.5 bg-[#33333380] rounded-[0.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
