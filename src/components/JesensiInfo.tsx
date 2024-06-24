import React from "react";
import Button from "./Button";

export default function JesensiInfo() {
  return (
    <div className="flex flex-col justify-between w-full h-full border-4 border-t-4 border-t col-span-2 rounded-lg p-2">
      {/* <h2 className="text-2xl text-a select-none">Hey There!</h2> */}
      <p className="text-xl text-[#ffffffdf]">
        Jesensi is your go-to resource for comprehensive information on military
        vehicles and equipment. This was created by me, aka Winit, as a way to
        test my web development skills. Jesensi is built with React and Tailwind
        CSS, and powered by Spring Boot and MongoDB on the backend, showcasing
        modern web development practices. Jesensi is a work in progress, and I
        am constantly adding new features and I would love to hear your
        feedback. Feel free to reach out.
      </p>
      <div className="w-full flex justify-end p-2 text-2xl">
        <Button onClick={() => {}} text="Contact" />
      </div>
    </div>
  );
}
