import { hero } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
        <h1 className="mt-7 font-palanquin text-4xl max-sm:text-[68px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap xl:pr-10 max-sm::p-0">
            Nourish Naturally
          </span>
          <br />
          <span className="text-purple-900 inline-block mt-3">
            with Premium Dry Fruits{" "}
          </span>{" "}
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Delivering freshness and quality to your doorstep
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center xl:min-h-screen bg-center">
        <img
          src={hero}
          alt="shoe collection"
          height={500}
          width={610}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
