const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full justify-center text-center">
      <div className="text-center flex justify-center">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      </div>
      <p className="font-montserrat text-xl leading-normal text-slate-gray">
        Brand name
      </p>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-gray-900 text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
