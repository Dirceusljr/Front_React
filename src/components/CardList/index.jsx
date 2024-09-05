import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import Card from "./Card";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Spinner from "../Spinner";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProducts = async () => {
    const response = await getProducts();
    setIsLoading(false);
    return setProducts(response.content);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllProducts();
  }, []);

  return (
    <div>
      {isLoading ? (<Spinner />) : (<section className="w-full px-[100px] py-[60px] bg-[#F9F8FE]">
        <div className="flex justify-between items-center">
          <h3 className="text-large-bold mb-5">Produtos em alta</h3>
          <p className="text-medium text-primary flex items-center gap-x-2">
            Ver todos <span>{<ArrowLongRightIcon className="size-4" />}</span>
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </section>)}
    </div>
  )
};

export default CardList;
