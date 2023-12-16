import CartItem from "./cartItem";

export interface ICartListProps {
  carts: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    color: string;
    size: number;
  }[];
  removeItem: (id: number) => any;
  changeAmount: (id: number, size: number) => any;
}

export default function CartList(props: ICartListProps) {
  return (
    <div>
      {props.carts == null || props.carts.length == 0 ? (
        <h2 className="flex justify-start ml-8 mt-4" style={{ fontSize: 14 }}>
          Your cart is empty.
        </h2>
      ) : (
        props.carts.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              id={cartItem.id}
              name={cartItem.name}
              image={cartItem.image}
              description={cartItem.description}
              price={cartItem.price}
              color={cartItem.color}
              size={cartItem.size}
              removeItem={props.removeItem}
              changeAmount={props.changeAmount}
            ></CartItem>
          );
        })
      )}
    </div>
  );
}
