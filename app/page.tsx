"use client";

import Image from "next/image";
import ProductList from "./productList";
import NikeLogo from "./assets/nike.png";
import Products from "./data/shoes.json";
import { useEffect, useState } from "react";
import CartList from "./cartList";

const LOCAL_STORAGE_KEY: string = "sneaker-secret-key";

export default function Home() {
  const [cart, setCart] = useState<any[]>();
  const [products, setProducts] = useState(Products["shoes"]);
  const [cash, setCash] = useState<number>(0);

  useEffect(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (typeof value !== undefined && value != "undefined") {
      const items = JSON.parse(value!);
      setCart(items);
    }
  }, []);

  useEffect(() => {
    // You can perform additional actions here after the component has re-rendered
    let total: number = 0;
    cart?.forEach((value) => {
      total += value.price * value.size;
    });
    setCash(total);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]); // This effect will run whenever cart changes

  function addToCart(id: number) {
    const tempProducts = [...products];
    const tempProduct = tempProducts.find((item) => item.id === id);
    tempProduct!.isAdded = 1;
    setProducts(tempProducts);
    const cartItem = products.find((item) => item.id === id);
    setCart((prevCart) => [...(prevCart || []), cartItem]);
  }

  function removeItem(id: number) {
    const tempCart = [...cart!];
    const tempItem = tempCart.find((item) => item.id === id);
    tempItem.size = 1;
    setCart(tempCart);
    setCart(cart!.filter((item) => item.id != id));
    const tempProducts = [...products];
    const tempProduct = tempProducts.find((item) => item.id === id);
    tempProduct!.isAdded = 0;
    setProducts(tempProducts);
  }

  function changeAmount(id: number, size: number) {
    if (size < 1) {
      removeItem(id);
      return;
    }
    const tempCart = [...cart!];
    const tempItem = tempCart.find((item) => item.id === id);
    tempItem.size = size;
    setCart(tempCart);
  }

  return (
    <div className="main">
      <div className="flex items-center h-screen">
        <div className="flex flex-col w-full lg:flex-row justify-center">
          <div className="shadow-2xl overflow-hidden h-full base-bg-card z-10">
            <Image
              src={NikeLogo}
              width={50}
              height={50}
              alt="Logo"
              className="mt-3 ml-14 mb-3 z-10"
            ></Image>
            <div
              style={{ fontSize: "24px", fontWeight: 700 }}
              className="flex justify-start ml-8 z-10"
            >
              Our products
            </div>
            <div
              className="grid flex-grow card rounded-box overflow-scroll no-scrollbar h-full"
              style={{
                borderRadius: "30px",
                height: "600px",
                minWidth: "384px",
                maxWidth: "384px",
              }}
            >
              <ProductList addToCart={addToCart} products={products!} />
            </div>
          </div>

          <div className="divider"> </div>

          <div className="base-bg-card z-0">
            <div className="overflow-hidden shadow-2xl h-full z-10">
              <Image
                src={NikeLogo}
                width={50}
                height={50}
                alt="Logo"
                className="mt-3 ml-14 mb-3"
              ></Image>
              <div
                className="flex justify-between"
                style={{ fontSize: "24px", fontWeight: 700 }}
              >
                <div className="ml-8">Your cart</div>
                <div className="mr-8">
                  ${parseFloat(cash.toString()).toFixed(2)}
                </div>
              </div>
              <div
                className="grid flex-grow card rounded-box overflow-scroll no-scrollbar h-full"
                style={{
                  borderRadius: "30px",
                  height: "600px",
                  minWidth: "384px",
                  maxWidth: "384px",
                }}
              >
                <CartList
                  carts={cart!}
                  removeItem={removeItem}
                  changeAmount={changeAmount}
                ></CartList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
