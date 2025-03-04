export default function Hero() {
  return (
    <>
      <div
        className="flex bg-no-repeat bg-cover h-[80vh]   justify-center items-center py-10 "
        style={{ backgroundImage: "url('./bg.jpg')" }}
      >
        <div className="w-[50%] text-start"></div>
        <div className="w-[50%] ml-28 px-10 pb-24">
          <div>
            <span className="text-5xl text-blue-600   font-bold leading-normal">
              Welcome To <span className="text-orange-600">Fastway</span>
            </span>
          </div>
          <span className="text-lg text-black">
            Embark on unforgettable journeys with us! Whether you're chasing
            adventure, relaxation, or cultural exploration, we make every trip
            seamless and extraordinary. Let’s explore the world together!
          </span>
        </div>
      </div>

      <div className="bg-white px-16 mb-10 text-center pt-16">
        <p className="font-bold text-4xl">Our Services</p>
        <div className="grid grid-cols-3 gap-10 mt-10  text-white  font-normal text-base">
          <div className="bg-[#0095DA] rounded-lg px-5 py-8 text-left transition-all hover:scale-105">
            <div className="font-bold text-2xl mb-2 ">On Time Departure</div>
            At Fastway, we take proud at our on-time departures and strict
            adherence to policies, ensuring a reliable and seamless travel
            experience for millions of passengers. Our commitment to punctuality
            and rigorous operational standards—from staff behavior to departure
            protocols—has consistently set us apart in Pakistan’s transport
            sector.
          </div>
          <div className="bg-[#0066B3] rounded-lg px-5 py-8 text-left transition-all hover:scale-105">
            <div className="font-bold text-2xl mb-2">Safe Journey</div>
            Safety is our top priority at Fastway, ensuring every journey is as
            secure as it is comfortable. Our buses are equipped with the latest
            safety features, with emergency doors, hammers and fire
            extinguishers. Our staff undergo rigorous training to guarantee a
            smooth and worry-free travel experience.
          </div>
          <div className="bg-[#0095DA] rounded-lg px-5 py-8 text-left transition-all  hover:scale-105">
            <div className="font-bold text-2xl mb-2">Online Ticket Booking</div>
            Fastway makes travel easier with our online ticket booking available
            through both our app and website. Enjoy a smooth booking process
            that allows you to reserve your seat in just a few clicks.
          </div>
          <div className=" bg-[#0066B3] rounded-lg px-5 py-8 text-left transition-all hover:scale-105">
            <div className="font-bold text-2xl mb-2 ">
              Air Conditioned Buses
            </div>
            Experience unmatched comfort with Fastway, where our fleet of
            air-conditioned buses guarantees a pleasant journey in any season.
            We pride ourselves on delivering top-tier services, from clean,
            spacious seating to modern on-board amenities, ensuring every trip
            is as comfortable as it is reliable.
          </div>
          <div className="bg-[#0095DA] rounded-lg px-5 py-8 text-left transition-all  hover:scale-105">
            <div className="font-bold text-2xl mb-2">Professional Drivers </div>
            Our team of professional drivers is at the heart of our reliable
            service. Each driver undergoes comprehensive training, covering
            defensive driving, road safety, and customer service. With adherence
            to safety and schedules, our drivers consistently deliver a travel
            experience that passengers can trust.
          </div>
          <div className="bg-[#0066B3] rounded-lg px-5 py-8 text-left transition-all hover:scale-105">
            <div className="font-bold text-2xl mb-2">Cargo</div>
            Fastway FastEx offers fast, reliable, and secure solutions for your
            shipping needs across Pakistan and globally. With an extensive
            network and dedicated staff, we ensure that your cargo reaches its
            destination safely and on time. Our services include Smart Cargo,
            which offers efficient tracking and management of shipments.
          </div>
        </div>
      </div>

      <div className="w-screen bg-gradient-to-l from-[#03def2] to-[#0066B3] flex justify-between items-center mb-5">

        <div className="px-20 pt-10 w-1/2">
          <div className="font-bold text-white text-4xl">
            Fastway Mobile App Available
          </div>
          <div className="mt-3 text-white text-lg ">
            Fastway, a pioneer in Pakistan's private transport, offers
            the largest fleet and modern technology to enhance your travel
            experience. Book and purchase your seat effortlessly through our
            mobile app, available on Android and iOS.
          </div>

          <div className="flex justify-start gap-3 mt-5">
            <img
              src="./playstore.png"
              className="h-12 w-auto"
              alt="Google Play Store"
            />
            <img src="./appstore.png" className="h-12 w-auto" alt="App Store" />
          </div>
        </div>

        {/* Mobile Image Section - Increased Size */}
        <div className="w-1/2 flex justify-center">
          <img
            src="./mobile.jpg"
            className="h-[500px] w-auto object-contain" // Increased size
            alt="Mobile Image"
          />
        </div>
      </div>
    </>
  );
}
