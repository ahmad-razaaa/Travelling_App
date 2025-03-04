export default function Route() {
  const routes = [
    { name: "Lahore", image: "lhr.jpg" },
    { name: "Karachi", image: "khi.JPG" },
    { name: "Islamabad", image: "isl.jpg" },
    { name: "Multan", image: "mlt.jpeg" },
    { name: "Peshawar", image: "psh.jpg" },
    { name: "Quetta", image: "qu.jpg" },
  ];

  return (
    <div className="border-t-4 border-gray-800 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {routes.map((route, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={route.image}
              alt={route.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-md">
              {route.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
