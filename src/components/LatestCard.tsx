import { useEffect, useState } from "react";
import constants from "../util/constants";
import axios from "axios";
import ImageCard from "./ImageCard";
import { NavLink } from "react-router-dom";

export default function LatestCard({
  title,
  aircraftType,
}: {
  title: string;
  aircraftType: string;
}) {
  const [aircrafts, setAircrafts] =
    useState<[{ id: any; name: any; images: any }]>();

  function getRandomAircraft() {
    axios
      .get(constants.BASE_URL + "aircraft/getRandom?type=" + aircraftType)
      .then((res) => {
        const x: any = [];

        res.data.forEach((jet: { id: any; name: any; images: any }) => {
          for (let i = 0; i < 6; i++) {
            x.push({
              id: jet.id,
              name: jet.name,
              images: jet.images,
            });
          }
        });

        setAircrafts(x);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getRandomAircraft();
  }, []);

  return (
    <div className="w-full h-full row-span-2 rounded-lg p-2 bg-t overflow-hidden">
      <NavLink to={`/aircrafts?type=${aircraftType}`}>
        <h2 className="text-2xl mb-1 select-none">{title}</h2>
      </NavLink>
      <div className="flex flex-col h-[calc(100%-2rem)] space-y-2.5">
        {aircrafts?.map((a) => {
          return (
            <ImageCard
              key={a.id}
              imgUrl={a.images[0]}
              title={a.name}
              description={""}
              titleUrl={`/aircraft/${a.id}`}
            />
          );
        })}
      </div>
    </div>
  );
}
