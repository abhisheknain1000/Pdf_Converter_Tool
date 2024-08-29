import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-20 mx-auto lg:px-16">
      <div className="px-6 tracking-wide">
        <h3 className="text-xs text-indigo-500 tracking-widest font-medium title-font text-center mb-1">
          TESTIMONIALS
        </h3>
        <h2 className="px-2 text-neutral-900 font-medium bg-clip-text text-2xl lg:text-5xl text-center tracking-widest">
          What People Say{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            About Us
          </span>
        </h2>
        <div className="flex flex-wrap justify-center mt-12 lg:mt-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 py-4 group hover">
              <div className="text-black rounded-md p-6 shadow-xl relative border-2">
                <div className="absolute top-6 left-6 flex gap-1">
                  {[...Array(testimonial.starNumber)].map((_, i) => (
                    <img
                      key={i}
                      src="star.svg"
                      alt="star review"
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 mt-10 text-base">{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                  <img
                    className="w-12 h-12 mr-4 rounded-full border-2 border-red-500 object-cover group-hover:scale-[106%] transition-all"
                    src={testimonial.image}
                    alt={`${testimonial.user}'s profile`}
                  />
                  <div>
                    <h6 className="font-medium text-base group-hover:scale-100 transition-all group-hover:font-bold  group-hover:text-primaryColor  ">
                      {testimonial.user}
                    </h6>
                    <span className="text-sm font-normal group-hover:font-medium transition-all">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
