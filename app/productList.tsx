import ProductItem from "./productItem";

export interface IProductListProps {
  products: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    color: string;
    isAdded: number;
  }[];
  addToCart: (id: number) => any;
}

export default function ProductList(props: IProductListProps) {
  return (
    <div>
      {props.products == null ? (
        <h2 className="flex justify-start w-full ml-8">Nothing here</h2>
      ) : (
        props.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              color={product.color}
              isAdded={product.isAdded}
              addToCart={props.addToCart}
            />
          );
        })
      )}
    </div>
  );
}
