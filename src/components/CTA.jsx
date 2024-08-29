const PremiumFeatures = () => {
  return (
    <div className=" px-10 lg:px-14 w-full min-h-[520px] bg-miniBlack flex flex-col md:flex-row  justify-center items-center py-16 lg:py-20 text-white">
      <div className="md:max-w-2xl md:flex-1 md:mr-6 mb-6 md:mb-0 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest mb-4">Get More With Premium</h2>
        <p className="py-2">Complete projects faster with batch file processing, convert scanned documents with OCR, and e-sign your business agreements.</p>
        <button
          type="button"
          className="w-full md:w-48 py-2 mt-6 bg-primaryColor text-white text-xl tracking-widest rounded-lg hover:bg-red-800 transition-all"
        >   
          Premium
        </button>
      </div>
      <div className="flex justify-center items-center md:flex-1">
        <img src={"prem.jpg"} alt="Premium Features" className="max-w-full h-auto text-white shadow-2xl shadow-black" />
      </div>
    </div>
  );
};

export default PremiumFeatures;
