import Tag from "../../Tag";

const Card = ({ id, title, price, discount, category, image }) => {
  return (
    <div
      className="flex flex-col rounded-sm max-w-[292px] w-full h-full relative justify-between"
      key={id}
    >
      {discount != 0 && <Tag>{discount}</Tag>}
      <div className="w-full rounded-[4px] bg-white shadow-card flex justify-center mb-[18px]">
        <img src={image} className="max-h-52" />
        <span className="sr-only">{title}</span>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-xxsmall-bold ">{category}</p>
          <h3 className="text-large">{title}</h3>
        </div>
        <div className="flex gap-x-2">
          {discount != 0 && (
            <div className="text-large line-through text-lightGray">
              {price - discount}
            </div>
          )}
          <p className="text-large-bold ">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
