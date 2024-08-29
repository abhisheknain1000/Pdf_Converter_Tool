  import { features } from "../constants";

  const FeatureSection = () => {
    return (
      <section id="features" className="min-h-[600px] bg-secondBackgroundColor">
      <div className="relative py-16 lg:py-20 px-6  lg:px-16" >
        <div className="text-center">
          <h3 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">FEATURES</h3>
          <h2 className="px-2 text-neutral-900 font-medium bg-clip-text text-2xl lg:text-5xl text-center tracking-widest">
            Easily Build{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text font-medium title-font text-gray-900">
              Your PDF
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap mt-12 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="p-2 w-full md:w-1/2 lg:w-1/3 px-4 py-4">
              <div className="flex bg-white p-6 rounded-lg shadow-md h-full">
                <div className="flex flex-shrink-0 h-12 w-12 p-2 text-primaryColor justify-center items-center rounded-full bg-gray-100">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-md font-medium text-black mb-2">{feature.text}</h5>
                  <p className="text-sm text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    );
  };

  export default FeatureSection;
