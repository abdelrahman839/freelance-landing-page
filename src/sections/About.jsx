import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
            We provide you
          </span>
          <span className="text-purple-900">Super </span>
          <span className="text-purple-900">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          {" "}
          <Button label="View details" />
        </div>
      </div>
      <div className={`flex-1 flex justify-center items-center w-full `}>
        <img
          src={shoe8}
          alt="shoe8"
          width={550}
          height={600}
          className="object-contain rounded-lg"
        />
      </div>
    </section>
  );
};

export default About;
