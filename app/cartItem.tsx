import Image from "next/image";
import { useEffect, useState } from "react";
import MinusLogo from "./assets/minus.png";
import PlusLogo from "./assets/plus.png";
import TrashLogo from "./assets/trash.png";

export interface ICartItemProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  color: string;
  size: number;
  removeItem: (id: number) => any;
  changeAmount: (id: number, size: number) => any;
}

export default function CartItem(props: ICartItemProps) {
  const [amount, setAmount] = useState<number>(1);

  useEffect(() => {
    if (props.size != 1) {
      setAmount(props.size);
      console.log("amount: " + amount);
    }
  }, []);

  function changeAmount(id: number, size: number) {
    props.changeAmount(id, size);
  }

  function removeItem(id: number) {
    props.removeItem(id);
  }

  return (
    <div className="flex flex-col w-full lg:flex-row p-6">
      <div className="grid h-32 rounded-box place-items-center">
        <div
          className="rounded-full"
          style={{ width: "90px", height: "90px", background: props.color }}
        >
          <Image
            src={props.image}
            alt="Shoes"
            width={100}
            height={100}
            className="rotate justify-center"
          ></Image>
        </div>
      </div>
      <div className="divider"> </div>
      <div className="grid h-32 rounded-box place-items-center">
        <div className="">
          <h2 className="card-title" style={{ fontSize: "medium" }}>
            {props.name}
          </h2>
          <div style={{ fontSize: "18px", fontWeight: "400" }}>
            ${props.price}
          </div>
          <div className="card-actions items-center">
            <button
              className="btn btn-circle btn-sm"
              onClick={() => {
                setAmount(amount - 1);
                changeAmount(props.id, amount - 1);
              }}
              style={{
                backgroundColor: "#eee",
              }}
            >
              <Image src={MinusLogo} alt="Minus" width={10} height={10}></Image>
            </button>
            <div>
              {amount}
              {/* {props.size} */}
              {/* {props.size != 1 ? amount : props.size} */}
            </div>
            <button
              className="btn btn-circle btn-sm"
              onClick={() => {
                setAmount(amount + 1);
                changeAmount(props.id, amount + 1);
              }}
              style={{
                backgroundColor: "#eee",
              }}
            >
              <Image src={PlusLogo} alt="Plus" width={10} height={10}></Image>
            </button>
            <button
              className="btn btn-circle"
              onClick={() => removeItem(props.id)}
              style={{
                backgroundColor: "#f6c90e",
              }}
            >
              <Image
                className="items-end"
                src={TrashLogo}
                alt="Remove"
                width={16}
                height={16}
              ></Image>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
