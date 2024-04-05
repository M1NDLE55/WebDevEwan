export default function Shapes() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-[calc(100vh+120px)] w-full overflow-clip sm:overflow-visible">
      <Circle
        className="-top-40 right-1/2 bg-gradient-to-r from-orange-500 to-pink-600"
        type={5}
      />
      <Circle
        className="right-16 top-28 bg-gradient-to-br from-yellow-400 to-orange-600 sm:right-1/4 sm:top-48"
        type={2}
      />
      <Circle
        className="left-44 top-56 hidden bg-gradient-to-br from-cyan-400 to-blue-600 sm:inline"
        type={1}
      />
      <Circle
        className="-right-20 bottom-1/4 bg-gradient-to-br from-lime-400 to-cyan-600 sm:left-3/4"
        type={3}
      />
      <Circle
        className="bottom-0 right-2/3 bg-gradient-to-r from-fuchsia-400 to-indigo-600"
        type={4}
      />
    </div>
  );
}

function Circle({ className: style, type }) {
  const sizes = [
    "h-10 w-10",
    "h-20 w-20",
    "h-40 w-40",
    "h-60 w-60",
    "h-72 w-72",
  ];

  return (
    <div
      className={`absolute rounded-full shadow-md ${style} ${sizes[type - 1]}`}
    />
  );
}
