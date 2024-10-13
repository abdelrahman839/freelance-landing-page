const ProductCard = ({ imgURL, name, special }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full justify-center text-center">
      <div className="text-center flex justify-center">
        <img
          src={imgURL}
          alt={name}
          className={special ? "w-[120px] h-[220px]" : "w-[280px] h-[280px]"}
        />
      </div>
      <p className="font-montserrat text-xl leading-normal text-slate-gray">
        Nouriva
      </p>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
    </div>
  );
};

export default ProductCard;
