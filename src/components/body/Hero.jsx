import { useAuth } from "../context/Context";


const Hero = () => {
  const auth = useAuth()
  return (
    <div
      className={`max-w-[1250px] mx-auto p-4 overflow-x-hidden cursor-pointer mt-[2.8rem] xl:mt-[3.8rem] ${auth.user && "mt-[4rem] md:mt-[4.5rem] lg:mt-[4.7rem] xl:mt-[5rem]"}`}
    >
      <div className="max-h-[500px] relative">
        <div className="absolute w-full sm:w-[110%] xl:w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex  flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-yellow-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-yellow-500"> Foods</span>Delivered
          </h1>
        </div>
        <div className="flex ">
          <img
            src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="object-center w-full"
            alt="pizza img"
          />
          <img
            className="hidden object-cover sm:flex"
            src="https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
