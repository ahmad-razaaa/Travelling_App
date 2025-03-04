export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-6 md:px-16 py-10">
     
      <div className="flex flex-col md:flex-row gap-10 border-t-4 border-blue-600 pt-10">

        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="services.png"
            className="w-full max-w-lg rounded-lg shadow-lg"
            alt="Services"
          />
        </div>


        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-blue-700 tracking-wide">
            Services
          </h2>
          <div className="h-1 w-36 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full my-2"></div>

          <h3 className="text-2xl font-semibold text-gray-800 mt-5">
            Punctuality
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Time is the most precious asset. At Fastway, safety of this asset is
            guaranteed. Punctuality & regularity are key features of our
            service, ensuring timely departures and arrivals. Your time is
            valuable to us.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-8">
            Audio / Visual Entertainment
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Fastway is committed to making your journey full of comfort &
            excitement. Traveling starts with the recitation of the 'Journey
            Prayer,' followed by:
          </p>
        </div>
      </div>


      <div className="mt-6 md:px-10">
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>Audio Songs</li>
          <li>Family Movies, Dramas, and Documentaries</li>
          <li>Switching System with Multiple Audio & Video Choices</li>
          <li>Daily Newspapers Available on Board</li>
          <li>Headphones Provided for Undisturbed Enjoyment</li>
        </ul>
      </div>


      <div className="mt-10 md:px-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Luxury Buses
        </h3>
        <p className="text-gray-600">
          Add comfort to your journey with our luxury buses, equipped with:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-3">
          <li>Comfortable and Spacious Seats</li>
          <li>Latest Audio-Visual Technologies</li>
          <li>Online Tracking System</li>
        </ul>
        <p className="text-gray-600 mt-3">
          A calm and peaceful environment is maintained for a luxurious travel
          experience.
        </p>
      </div>


      <div className="mt-10 md:px-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">Luggage</h3>
        <p className="text-gray-600">
          We offer support for carrying personal luggage. Please note that local
          regulations may prohibit certain items in carry-on baggage. Facilities
          include:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mt-3">
          <li>Up to 30 kg of Luggage Allowed per Passenger</li>
          <li>Extra Luggage? Use Our ELT Facility</li>
          <li>Luggage Tags for Safety and Security</li>
          <li>Trained Loaders Handle Your Bags</li>
          <li>Free Porter Services Available</li>
        </ul>
      </div>


      <div className="mt-10 md:px-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Courteous & Trained Crew
        </h3>
        <p className="text-gray-600">
          Our professional crew ensures a safe & luxurious journey. We
          introduced road hostesses in buses. The crew, including the Driver,
          Hostess, and a Guard, is trained for professional service.
        </p>
      </div>


      <div className="mt-10 md:px-10 mb-10">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Newspapers & Magazines
        </h3>
        <p className="text-gray-600">
          Passengers can enjoy their journey by reading the latest newspapers
          and informative content in our Fastway Magazine, widely admired by our
          customers.
        </p>
      </div>
    </div>
  );
}
