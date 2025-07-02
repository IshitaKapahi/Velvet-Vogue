import { starsGenerator } from "@/constants/Helper";
import { Circle, Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { Colors } from "./../constants/colors";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReviewsComponent from "@/components/custom/ReviewsComponent";

const imagesArray = [
  {
    url: "https://images.unsplash.com/photo-1729146768776-8356708e907d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMGNsb3RoZXN8ZW58MHwyfDB8fHww",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1729146768776-8356708e907d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMGNsb3RoZXN8ZW58MHwyfDB8fHww",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1729146768776-8356708e907d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMGNsb3RoZXN8ZW58MHwyfDB8fHww",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1729146768776-8356708e907d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGluZGlhbiUyMGNsb3RoZXN8ZW58MHwyfDB8fHww",
    id: 4,
  },
];

const productStock = 10;

const Product = () => {
  const [productQuantity, setProductQuantity] = useState(2);
  const [pinCode, setPinCode] = useState("");
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [purchaseProduct, setPurchaseProduct] = useState(false);
  const [address, setAddress] = useState("");
  return (
    <>
      <div>
        <main className="w-[93vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">
          {/* Left Side */}
          <div className=" grid sm:w-[50%] gap-3">
            <img
              src={imagesArray[0].url}
              alt=""
              className="w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none"
            />
            <div className="grid grid-cols-4 gap-3">
              {imagesArray.map(({ url, id }) => (
                <img
                  src={url}
                  key={id}
                  className="rounded-xl filter hover:brightness-50 cursor-pointer 
                  border dark:border-none transition-all ease-in-out duration-300"
                />
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className=" sm:w-[50%] lg:w-[30%]">
            <div className="py-5">
              <h2 className=" font-extrabold text-2xl">Hot Pink Kurta Set</h2>
              <p className=" my-2 text-sm">
                Elevate your style with this vibrant hot pink kurta set
                featuring a sheer design, perfect for any occasion.
              </p>
              <div className="flex items-center">
                {starsGenerator(4.5, "0", 15)}
                <span className=" text-md ml-1">(2)</span>
              </div>
            </div>

            <div className=" py-5  border-t border-b">
              <h3 className="font-bold text-xl">Rs.560 or Rs.34/month</h3>
              <p className=" text-sm ">
                Suggested payments with 6 months special financing.
              </p>
            </div>

            <div className=" py-5 border-b">
              <h3 className=" font-bold text-lg">Choose Color </h3>
              <div className=" flex items-center py-2">
                <Circle
                  fill={Colors.customIsabelline}
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                />
              </div>
            </div>

            <div className=" py-5">
              <div className=" flex gap-3 items-center">
                <div className=" flex items-center gap-5 bg-gray-100 rounded-full px-3 py-2 w-fit">
                  <Minus
                    cursor={"pointer"}
                    stroke={Colors.customGrey}
                    onClick={() =>
                      setProductQuantity((qty) => (qty > 1 ? qty - 1 : 1))
                    }
                  />
                  <span className=" text-slate-950">{productQuantity}</span>
                  <Plus
                    stroke={Colors.customGrey}
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((qty) =>
                        qty < productStock ? qty + 1 : qty
                      )
                    }
                  />
                </div>

                {productStock - productQuantity > 0 && (
                  <div className="grid text-sm font-semibold text-gray-600">
                    <span>
                      Only{" "}
                      <span className=" font-bold text-red-500">
                        {productStock - productQuantity} items{"  "}
                      </span>
                      left!
                    </span>
                    <span>Don't miss it</span>
                  </div>
                )}
              </div>
              <div className="grip gap-3 my-5">
                <div className=" flex gap-3">
                  <Input
                    placeholder="Enter your pincode here"
                    onChange={(e) => setPinCode(e.target.value)}
                  />
                  <Button> Check Availability</Button>
                </div>
                <p className="text-sm px-2"> {availabilityMessage}</p>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => setPurchaseProduct(true)}>
                  {" "}
                  Buy Now
                </Button>
                <Button> Add To Cart</Button>
              </div>
              {purchaseProduct && (
                <div className="my-2 space-y-2">
                  <Input
                    placeholder="Enter Your Address Here...."
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Button>Confirm Order</Button>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Review Section*/}
        <ReviewsComponent />
      </div>
    </>
  );
};

export default Product;
