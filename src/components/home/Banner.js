import { useEffect, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: "https://ng.jumia.is/cms/0-5-brand-festival/2023/Brand-days/defacto/712x384.jpg",
    },
    {
      url: "https://ng.jumia.is/cms/0-5-brand-festival/2023/Initiatives/CPR/CPR__712x384CP.jpg",
    },
    {
      url: "https://ng.jumia.is/cms/0-5-brand-festival/2023/Brand-days/defacto/BRAND-DAY-slider-FS.jpg",
    },
    {
      url: "https://ng.jumia.is/cms/0-5-brand-festival/2023/BFEST-LIVE.gif",
    },
    {
      url: "https://ng.jumia.is/cms/0-5-brand-festival/2023/Consumer-deals/SX__712x384_computing-deals.png",
    },
    {
      url: "https://ng.jumia.is/cms/0-5-brand-festival/2023/Consumer-deals/SX__712x384_phone_dealas.png",
    },
  ];
  return (
    <div className="flex">
      <div className=" h-[14rem] md:h-[27rem] lg:h-[30rem] w-[950px] px-2 lg:ml-12 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 rounded-xl object-contain cursor-pointer"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer font-extrabold">
          <BsChevronCompactLeft onClick={prevSlide} size={35} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer font-extrabold">
          <BsChevronCompactRight onClick={nextSlide} size={35} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="cursor-pointer text-2xl"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="mx-10 hidden lg:block">
        <img
          src="https://ng.jumia.is/cms/0-5-brand-festival/2023/218pxx184px.gif"
          alt="sub_banner"
          className="rounded-xl h-52"
        />
        <img
          src="https://ng.jumia.is/cms/0-1-initiatives/clearance-sale/2023/Clearance.gif"
          alt="sub_banner"
          className="rounded-xl mt-10 h-52"
        />
      </div>
    </div>
  );
};

export default Banner;
