import Image from "next/image";
import ProductList from "./productList";
import NikeLogo from "./assets/nike.png";

export default function Home() {
  return (
    <div
      className="flex items-center h-screen"
      style={{
        backgroundImage: "url(bg.gif)",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col w-full lg:flex-row justify-center">
        <div
          className="bg-success overflow-hidden shadow-2xl"
          style={{ borderRadius: "30px", height: "600px" }}
        >
          <Image
            src={NikeLogo}
            width={50}
            height={50}
            alt="Logo"
            className="mt-6 ml-8 mb-6"
          ></Image>
          <div
            style={{ fontSize: "24px", fontWeight: 700 }}
            className="flex justify-start ml-8"
          >
            Our products
          </div>
          <div className="grid flex-grow h-screen card rounded-box place-items-center overflow-scroll no-scrollbar">
            <ProductList />
          </div>
        </div>

        <div className="divider"> </div>

        <div
          className="bg-success overflow-hidden shadow-2xl"
          style={{ borderRadius: "30px", height: "600px" }}
        >
          <Image
            src={NikeLogo}
            width={50}
            height={50}
            alt="Logo"
            className="mt-6 ml-8 mb-6"
          ></Image>
          <div
            className="flex justify-between"
            style={{ fontSize: "24px", fontWeight: 700 }}
          >
            <div className="ml-8">Your cart</div>
            <div className="mr-8">$0.00</div>
          </div>
          <div className="grid flex-grow h-screen card rounded-box place-items-center overflow-scroll no-scrollbar">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}
