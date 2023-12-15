import Image from "next/image";

export interface IProductItemProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  color: string;
}

export default function ProductItem(props: IProductItemProps) {
  return (
    <div className="card w-96">
      <div
        className="justify-center flex ml-8 mr-8 mt-8"
        style={{ background: props.color, borderRadius: "30px" }}
      >
        <Image
          src={props.image}
          alt="Shoes"
          width={300}
          height={480}
          className="rotate"
        ></Image>
      </div>

      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p
          style={{
            fontSize: "13px",
            color: "#777",
            lineHeight: "1.8",
            marginBottom: "20px",
          }}
        >
          {props.description}
        </p>
        <div className="card-actions justify-between items-center">
          <div style={{ fontSize: "18px", fontWeight: "700" }}>
            ${props.price}
          </div>
          <button
            className="btn rounded-3xl"
            style={{
              backgroundColor: "#f6c90e",
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
