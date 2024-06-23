import NavBar from "../components/NavBar";

function HomePage() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-4xl">Hello, world!</h1>
        <p className="text-lg">Welcome to your new app!</p>
      </div>
    </div>
  );
}

export default HomePage;
