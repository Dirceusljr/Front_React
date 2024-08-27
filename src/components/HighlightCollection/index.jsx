import React from "react";
import CollectionCard from "./CollectionCard";
import Headphone from "../../assets/collections/Headphone";
import Pants from "../../assets/collections/Pants";
import Sneakers from "../../assets/collections/Sneakers";
import Tshirt from "../../assets/collections/Tshirt";
import Cap from "../../assets/collections/Cap";

const highlightCategory = [
  {
    title: "Camisetas",
    component: <Tshirt className='stroke-lightGray hover:stroke-primary' />,
  },
  {
    title: "Calças",
    component: <Pants className='stroke-lightGray hover:stroke-primary' />,
  },
  {
    title: "Bonés",
    component: <Cap className='fill-lightGray hover:fill-primary' />,
  },
  {
    title: "Headphones",
    component: <Headphone className='stroke-lightGray hover:stroke-primary' />,
  },
  {
    title: "Tênis",
    component: <Sneakers className='fill-lightGray stroke-lightGray hover:stroke-primary hover:fill-primary' />,
  },
];

const hightlightCollectionList = [{
  discount: "30%",
  title: "Novo drop Supreme",
  img: "https://picsum.photos/350/250",
},
{
  discount: "30%",
  title: "Coleção Adidas",
  img: "https://picsum.photos/350/250",
},
{
  discount: "30%",
  title: "Novo Beats Bass",
  img: "https://picsum.photos/350/250",
}]

const HighlightCollection = () => {
  return (
    <section className="w-full pt-[38px] h-full">
      <div className="px-[100px] mb-[100px]">
        <h3 className="text-large-bold mb-5">Coleções em destaque</h3>
        <div className="grid grid-cols-3 gap-x-3">
          {hightlightCollectionList.map((collection, index) => (
            <CollectionCard key={index} discount={collection.discount} title={collection.title} img={collection.img} />
          ))}
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-large-bold text-center mb-10">Coleções em destaque</h3>
        <div className="w-full flex flex-row justify-center items-center gap-x-[68px]">
        {highlightCategory.map((collection, index) => (
            <div key={index}>
                <div className="mb-3 w-24 flex justify-center">
                    {collection.component}
                  <span className="sr-only">{collection.title}</span>
                </div>
                <h5 className="text-xsmall-bold text-center">{collection.title}</h5>
            </div>
        ))}

        </div>
      </div>
    </section>
  );
};

export default HighlightCollection;
