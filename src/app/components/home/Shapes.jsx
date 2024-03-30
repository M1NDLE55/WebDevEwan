export default function Shapes() {
  return (
    <div className="absolute left-0 top-0 -z-10 h-[calc(100dvh+100px)] w-full">
      <Circle
        className="-top-40 right-1/2 bg-gradient-to-r from-orange-500 to-pink-600"
        type={5}
      />
      <Circle
        className="right-1/4 top-48 bg-gradient-to-br from-yellow-400 to-orange-600"
        type={2}
      />
      <Circle
        className="left-44 top-56 bg-gradient-to-br from-cyan-400 to-blue-600"
        type={1}
      />
      <Circle
        className="bottom-1/4 left-3/4 bg-gradient-to-br from-lime-400 to-cyan-600"
        type={3}
      />
      <Circle
        className="right-2/3 top-3/4 bg-gradient-to-r from-fuchsia-400 to-indigo-600"
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
    <div className={`absolute rounded-full ${style} ${sizes[type - 1]}`} />
  );
}
