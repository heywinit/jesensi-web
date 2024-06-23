import { NavLink } from "react-router-dom";
import IconButton from "./IconButton";
import {
  BiColor,
  BiHome,
  BiInfoCircle,
  BiSolidPlane,
  BiSun,
} from "react-icons/bi";
import { BsAirplaneEngines } from "react-icons/bs";

export default function NavBar() {
  const pageName = window.location.pathname.split("/").pop() || "home";
  return (
    <div className="flex p-2">
      <div className="flex flex-col px-2 justify-between rounded-lg bg-z">
        <div className="p-2">
          <h1 className="text-4xl text-a w-full text-center">Jesensi</h1>
        </div>
        <nav className="flex flex-col space-y-2 h-full text-xl px-2">
          {[{ name: "home" }, { name: "aircrafts" }, { name: "engines" }].map(
            (page) => {
              return (
                <NavLink
                  key={page.name}
                  to={`/${page.name === "home" ? "" : page.name}`}
                  className="flex items-center text-white rounded-lg w-full px-3 py-2 bg-t space-x-2"
                >
                  <span>{page.name}</span>
                </NavLink>
              );
            }
          )}
        </nav>
        <div className="flex justify-center">
          <div className="flex flex-row px-4 py-2 space-x-4">
            <IconButton
              buttonStyle={
                "flex justify-center align-center p-2 bg-[#3A6EA5] rounded-lg text-white"
              }
              icon={<BiSun size={24} />}
            />
            <IconButton
              buttonStyle={
                "flex justify-center align-center p-2 bg-[#3A6EA5] rounded-lg text-white"
              }
              icon={<BiInfoCircle size={24} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
