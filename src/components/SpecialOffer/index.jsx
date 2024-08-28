import Button from "../Button";
import ImgSpecialOffer from "/SpecialOffer.png";

const SpecialOffer = () => {
  return (
    <section className="py-[106px] pr-[5%] w-full h-fit flex items-center justify-center gap-16">
      <div className="w-[466px] h-[466px] rounded-[466px] bg-gradient-to-b from-[#4400ff18] to-white flex items-center justify-center">
          <img src={ImgSpecialOffer} className="self-center" />
          <span className="sr-only">
            Imagem de um tênis que está em oferta especial
          </span>
      </div>
      <div className="flex flex-col w-[50%]">
        <h5 className="text-xsmall-bold text-primary mb-[17px]">
          Oferta especial
        </h5>
        <h2 className="title-medium-bold mb-[20px]">
          Air Jordan edição de colecionador
        </h2>
        <p className="text-small mb-[30px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae
          repudiandae eos voluptas numquam cum fugiat nostrum molestiae, vero ex
          praesentium id quibusdam optio voluptate labore voluptatum magni
          quisquam! Tempora consequuntur laudantium dignissimos sint
          exercitationem dicta necessitatibus commodi ut nulla debitis sequi
          eligendi, obcaecati velit libero. Earum vero accusantium libero!
        </p>
        <Button>Ver Oferta</Button>
      </div>
    </section>
  );
};

export default SpecialOffer;
