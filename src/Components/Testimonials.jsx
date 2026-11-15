
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Gregg Bergstrom",
      email: "greggbergstrom@gmail.com",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
      profile:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=85",
      review:
        "Working with Bricklane was a fantastic experience from start to finish. They listened to exactly what I wanted, and within a few short weeks, I found my dream home.",
      secondReview:
        "They went above and beyond to ensure everything went smoothly. Communication was always clear and timely.",
    },
    {
      name: "Michael Anderson",
      email: "michaelanderson@gmail.com",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85",
      profile:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=85",
      review:
        "The entire property buying journey was simple and stress-free. The team understood our needs and helped us find a home that perfectly matched our lifestyle.",
      secondReview:
        "Their professional guidance and attention to detail made the whole experience truly exceptional.",
    },
    {
      name: "Daniel Williams",
      email: "danielwilliams@gmail.com",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
      profile:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=85",
      review:
        "Bricklane made finding our new home an enjoyable experience. Every property recommendation was thoughtful and perfectly suited to our expectations.",
      secondReview:
        "I truly appreciated their transparency, dedication and excellent communication throughout the process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const active = testimonials[activeIndex];

  const changeTestimonial = (direction) => {
    setChanging(true);

    setTimeout(() => {
      setActiveIndex((prev) =>
        (prev + direction + testimonials.length) %
        testimonials.length
      );
      setChanging(false);
    }, 250);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#eeeeee] px-5 py-14 text-[#292929] sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24"
    >
      <div className="relative mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between gap-4">

          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Our client testimonial
          </h2>

          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-3 border border-gray-400 px-3 py-2.5 text-[9px] font-semibold tracking-wide transition-all duration-300 hover:border-[#df6040] hover:bg-[#df6040] hover:text-white sm:px-5"
          >
            OUR CLIENTS

            <ChevronRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

          {/* LEFT SIDE */}
          <div
            className={`transition-all duration-700 ${
              changing
                ? "translate-y-3 opacity-40"
                : "translate-y-0 opacity-100"
            }`}
          >

            {/* Main Property Image */}
            <div className="group relative h-[280px] overflow-hidden bg-gray-300 sm:h-[350px] md:h-[330px] lg:h-[410px]">

              <img
                key={active.image}
                src={active.image}
                alt="Client property"
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />

            </div>

            {/* Client Information */}
            <div className="mt-4 flex items-center gap-3">

              <img
                key={active.profile}
                src={active.profile}
                alt={active.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
              />

              <div>
                <h3 className="text-sm font-medium">
                  {active.name}
                </h3>

                <p className="mt-1 text-[10px] text-gray-500">
                  {active.email}
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex min-h-[320px] flex-col justify-between pt-1 md:min-h-[390px] md:pt-3 lg:min-h-[430px]">

            {/* Testimonial Text */}
            <div
              className={`max-w-xl transition-all duration-500 ${
                changing
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >

              <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                {active.review}
              </p>

              <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                {active.secondReview}
              </p>

            </div>

            {/* Navigation */}
            <div className="mt-9 flex max-w-[280px] items-center gap-4">

              <button
                onClick={() => changeTestimonial(-1)}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:border-[#df6040] hover:bg-[#df6040] hover:text-white"
              >
                <ArrowLeft size={15} />
              </button>

              <div className="h-[2px] flex-1 overflow-hidden bg-gray-300">
                <div
                  className="h-full bg-gray-700 transition-all duration-500"
                  style={{
                    width: `${
                      ((activeIndex + 1) / testimonials.length) * 100
                    }%`,
                  }}
                />
              </div>

              <button
                onClick={() => changeTestimonial(1)}
                aria-label="Next testimonial"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:border-[#df6040] hover:bg-[#df6040] hover:text-white"
              >
                <ArrowRight size={15} />
              </button>

            </div>

            {/* Decorative Property Image */}
            <div className="mt-8 flex justify-end md:absolute md:-bottom-8 md:right-0 md:mt-0">

              <div className="group relative h-[140px] w-[220px] overflow-hidden sm:h-[175px] sm:w-[270px] lg:h-[195px] lg:w-[320px]">

                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85"
                  alt="Modern luxury house"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Explore Clients */}
        <div className="mt-12 flex justify-center md:mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border-b border-gray-400 pb-2 text-xs font-semibold transition-colors duration-300 hover:border-[#df6040] hover:text-[#df6040]"
          >
            DISCOVER OUR CLIENTS

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
