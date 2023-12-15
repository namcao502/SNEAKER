import Products from "./data/shoes.json";
import ProductItem from "./productItem";

export interface IProductListProps {}

export default function ProductList(props: IProductListProps) {
  return (
    <div>
      {Products["shoes"].map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            color={product.color}
          />
        );
      })}
    </div>
  );
}
