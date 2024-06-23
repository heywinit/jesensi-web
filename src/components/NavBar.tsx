import { NavLink } from "react-router-dom";
import IconButton from "./IconButton";
import { BiInfoCircle, BiSun } from "react-icons/bi";

export default function NavBar() {
  return (
    <div className="flex p-2">
      <div className="flex flex-col px-2 justify-between rounded-lg bg-z">
        <div className="p-2">
          <h1 className="text-4xl text-a w-full text-center select-none">
            Jesensi
          </h1>
        </div>
        <nav className="flex flex-col space-y-2 h-full text-lg px-2">
          {[
            { name: "home" },
            { name: "aircrafts" },
            { name: "engines" },
            { name: "missiles" },
            { name: "ships" },
          ].map((page) => {
            return (
              <NavLink
                key={page.name}
                to={`/${page.name === "home" ? "" : page.name}`}
                className={({ isActive }) =>
                  `flex items-center rounded-lg w-full px-3 py-1 space-x-2 ${
                    isActive
                      ? "bg-t/40 text-gray-400"
                      : "text-white bg-t hover:bg-t/40"
                  }`
                }
              >
                <span>{page.name}</span>
              </NavLink>
            );
          })}
        </nav>
        <div className="flex justify-center">
          <div className="flex flex-row px-4 py-2 space-x-4">
            <IconButton
              buttonStyle={
                "flex justify-center align-center p-2 bg-t rounded-lg hover:bg-t/40 text-white"
              }
              icon={<BiSun size={24} />}
            />
            <IconButton
              buttonStyle={
                "flex justify-center align-center p-2 bg-t rounded-lg hover:bg-t/40 text-white"
              }
              icon={<BiInfoCircle size={24} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
