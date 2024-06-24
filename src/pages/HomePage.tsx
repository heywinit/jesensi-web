import JesensiInfo from "../components/JesensiInfo";
import LatestCard from "../components/LatestCard";
import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex p-2 w-full h-full">
          <div className="flex flex-col px-2 justify-between rounded-lg bg-z w-full h-full">
            <div className="p-2">
              <h1 className="text-3xl text-a select-none">Home</h1>
            </div>
            <div className="grid gap-2 grid-cols-5 grid-rows-3 h-full text-lg px-2 max-h-full">
              <JesensiInfo />
              <div></div>
              <LatestCard aircraftType="jet" title={"Helicopters"} />
              <LatestCard aircraftType="jet" title={"Fighter Jets"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
