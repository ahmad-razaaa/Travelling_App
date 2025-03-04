export default function About() {
  return (
    <section className="border-t-2 border-gray-600 px-6 sm:px-10 lg:px-20 pt-10 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="old.jpg"
            alt="Old bus"
            className="w-11/12 max-w-lg h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-orange-300 after:mt-2">
            About Us
          </h2>
          <p className="mt-5 leading-relaxed text-gray-800 text-lg">
            Fastway Express is the first and the biggest foreign investment
            company with an advanced and organized transport system in Pakistan.
            It is the only transport company with a nationwide network and
            international trade links. The company owns a large fleet of buses,
            state-of-the-art terminals, and training institutes for drivers and
            mechanical staff.
          </p>
          <p className="mt-4 leading-relaxed text-gray-800 text-lg">
            Since its inception in 1997, Fastway Express has been providing
            transport facilities to the people of Pakistan.
          </p>
        </div>
      </div>

      <div className="my-8">
        <p className="leading-relaxed text-gray-800 text-lg">
          It is appreciated by the masses as well as the Governments of Pakistan
          and Korea for its consistent success. Media in both countries often
          express appreciation for its revolutionary achievements in the
          transport sector. Since 1997, Fastway Express has maintained a
          reputation for excellence and reliability.
        </p>
      </div>
    </section>
  );
}
