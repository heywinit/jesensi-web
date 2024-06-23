export default function ErrorPage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-4xl">{title}</h1>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
}
