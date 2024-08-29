import { MoveRight, Tv } from "lucide-react";
import Button from "../constants/button";

const HeroSection = () => {
  return (
    <section className="hero py-16 lg:py-20" id="#">
    <div className="flex flex-col items-center">
      <h1 className="px-2 text-neutral-900 font-medium bg-clip-text text-2xl lg:text-5xl text-center tracking-widest ">
      Simplify Your PDF Tasks With Our 
        <span className="text-gradient">
          {" "}
          ALL-IN-ONE 
        </span>
        <br />Tool Suite.
      </h1>
      <p className="px-3 mt-10 text-sm lg:text-lg text-center text-blackHover tracking-wider max-w-4xl">
      Every tool you need to use PDFs, at your fingertips. <br /> All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
      </p>
      <div className="flex justify-center my-10 ">
        <Button label={"Get Started"} link={"#tools"} icon={<MoveRight/>}/>
        
      </div>
      <div className="flex flex-col mt-3 lg:mt-10 justify-center px-2">
        <video
          autoPlay
          loop
          muted
          controls
          className="rounded-lg w-full border border-red-700 shadow-sm shadow-red-400"
          alt="PDFTool Demo Video"
        >
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className="text-center mt-8 font-bold flex justify-center gap-4 underline underline-offset-8"> <Tv/> demo video</h3>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
