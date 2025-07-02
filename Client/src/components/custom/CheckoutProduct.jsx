import { Colors } from "@/constants/colors";
import React from "react";

const CheckoutProduct = ({
  name = "White Cotton Kurti Set",
  price = 299,
  quantity = 2,
  image = {
    url: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlcyUyMGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  color = Colors.customYellow,
}) => {
  return (
    <div className="flex justify-between items-start p-3 rounded-lg bg-gray-100 dark:bg-zinc-900">
      <div className="flex flex-row items-center gap-3">
        <img src={image.url} alt={name} className="w-20 sm:-24 rounded-lg" />
        <div className="grid sm:gap-1">
          <h1 className="font-semibold text-sm sm:text-base">
            White Cotton Kurti Set
          </h1>
          <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-customGray text-xs sm:text-sm my-0 ">
            <span className="font-semibold">
              Color : <span style={{ backgroundColor: color }}>{color}</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold">
              Qty :{" "}
              <span className="font-medium text-customYellow">{quantity}</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold">
              Price :{" "}
              <span className="font-medium text-customYellow">{price}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
