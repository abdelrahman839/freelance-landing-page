import { about } from "../assets/images";
import Button from "../components/Button";

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col-reverse gap-10 w-full max-container"
    >
      <div className={`flex-1 flex  justify-center items-center w-full `}>
        <img
          src={about}
          alt="about"
          width={550}
          height={600}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
            Enjoy
          </span>
          <span className="text-purple-900">Premium </span>
          <span className="text-purple-900">Quality</span> Dry Fruits
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience the finest flavors and nutrition with our carefully
          selected dry fruits. Our commitment to excellence ensures your
          satisfaction with every bite, offering you unmatched freshness, health
          benefits, and a touch of natural goodness.
        </p>
        {/* <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p> */}
      </div>
    </section>
  );
};

export default About;
