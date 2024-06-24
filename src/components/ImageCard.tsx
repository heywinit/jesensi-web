import { NavLink } from "react-router-dom";

export default function ImageCard({
  imgUrl,
  title,
  description,
  titleUrl,
}: {
  imgUrl: string;
  title: string;
  description: string;
  titleUrl: string;
}) {
  return (
    <div className="flex rounded-lg p-2 bg-z">
      <img
        src={imgUrl}
        alt="Jet"
        className="w-16 h-16 mr-2 rounded-lg select-none"
      />
      <div className="flex flex-col">
        <NavLink to={titleUrl}>
          <h2 className="text-2xl hover:underline">{title}</h2>
        </NavLink>
        <p>{description}</p>
      </div>
    </div>
  );
}
