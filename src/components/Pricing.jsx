import { useState } from "react";
import { plans } from "../constants";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <section
      id="pricing"
      className="px-6 py-16 lg:py-20 mx-auto text-gray-600 body-font overflow-hidden bg-secondBackgroundColor"
    >
      <div className="container mx-auto">
        <div className="flex flex-col text-center">
          <h3 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            PLAN
          </h3>
          <h2 className="px-2 text-neutral-900 font-medium bg-clip-text text-2xl lg:text-5xl text-center tracking-widest">
            Choose The Right{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-800 text-transparent bg-clip-text">
              Plan For You
            </span>
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 mt-6">
            All prices are here including free version
          </p>
          <div className="flex mx-auto border-2 border-red-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 ${
                monthly ? "bg-red-500 text-white" : "text-miniBlack-500"
              } focus:outline-none`}
              onClick={() => setMonthly(true)}
              aria-current={monthly ? "page" : undefined}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-4 ${
                !monthly ? "bg-red-500 text-white" : "text-miniBlack-500"
              } focus:outline-none`}
              onClick={() => setMonthly(false)}
              aria-current={!monthly ? "page" : undefined}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-20 gap-6 grid sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col p-8 rounded-xl border-2 hover:shadow-2xl hover:scale-[102%] transition-all overflow-hidden bg-white"
            >
              {item.type && (
                <div className="absolute w-full h-full right-0 top-0">
                  <div className="py-1 text-textColor bg-red-500 absolute font-bold font-title tracking-widest right-3 top-3 px-4 rounded-lg text-center">
                    <span>POPULAR</span>
                  </div>
                </div>
              )}
              <div>
                <span className="text-primaryColor font-medium tracking-widest">
                  {item.name}
                </span>
                <div className="mt-4 text-gray-800 text-3xl font-semibold">
                  ${monthly ? item.mPrice : item.yPrice}{" "}
                  <span className="text-xl text-gray-600 font-normal">
                    {monthly ? "/mo" : "/yr"}
                  </span>
                </div>
              </div>
              <ul className="py-8 space-y-3 ">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primaryColor"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
              <div className="flex-1 flex items-end">
                <button className="z-10 cursor-pointer px-3 py-3 rounded-lg w-full font-medium tracking-wider text-sm duration-150 text-white bg-red-500 hover:bg-primaryColor">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
