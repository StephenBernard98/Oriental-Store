import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickFired = () => {
    var element = document.querySelector(".top_nav");
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {scrolled && (
        <span
          className={`bg-black text-3xl md:text-5xl lg:text-4xl text-yellow-500 font-bold rounded-full px-5 py-4 md:px-7 md:py-4 lg:px-5 lg:py-2 fixed bottom-5 right-4 cursor-pointer`}
          onClick={handleClickFired}
        >
          &#8593;
        </span>
      )}
    </div>
  );
};

export default ScrollTop;
