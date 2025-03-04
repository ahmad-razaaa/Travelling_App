import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBus,
  faCalendarAlt,
  faUser,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import info from "./data.json";

export default function Booking() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fare, setFare] = useState(null);
  const [seats, setSeats] = useState(1);
  const [date, setDate] = useState("");

  function calculateFare() {
    const route = `${fromCity}-${toCity}`;
    const route2 = `${toCity}-${fromCity}`;
    const distance = info.distances[route] || info.distances[route2] || 0;
    setFare(info.fare_per_km * seats * distance);
  }

  return (
    <div
      className="h-[90vh] relative z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/interior.jpg')" }}
    >
      <div className="h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-lg shadow-2xl w-[600px]">
          <h2 className="text-2xl font-bold text-center mb-5 text-gray-800">
            Book Your Bus Ticket
          </h2>

          {/* From & To Fields */}
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">From</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faBus}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Enter city"
                  className="pl-10 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setFromCity(e.target.value)}
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block font-semibold mb-1">To</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Enter city"
                  className="pl-10 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setToCity(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Date & Passengers */}
          <div className="flex gap-3 mb-4">
            <div className="w-1/2">
              <label className="block font-semibold mb-1">Departure Date</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <input
                  type="date"
                  className="pl-10 p-2 w-full border rounded-md"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="w-1/2">
              <label className="block font-semibold mb-1">Passengers</label>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-3 top-3 text-gray-500"
                />
                <select
                  className="pl-10 p-2 w-full border rounded-md"
                  onChange={(e) => setSeats(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button
              className="bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700"
              onClick={calculateFare}
            >
              Calculate Fare
            </button>
            <button className="bg-green-600 text-white py-2 rounded-md font-bold hover:bg-green-700">
              Confirm Booking
            </button>
          </div>

          {/* Display Fare */}
          {fare !== null && (
            <p className="text-center mt-4 text-lg font-semibold text-gray-800">
              Estimated Fare: <span className="text-green-600">${fare}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
