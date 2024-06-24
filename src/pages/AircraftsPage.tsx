import NavBar from "../components/NavBar";

export default function AircraftsPage() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex p-2 w-full h-full"></div>
      </div>
    </div>
  );
}
