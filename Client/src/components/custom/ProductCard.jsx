import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LinkButton from "./LinkButton";
import { starsGenerator } from "@/constants/Helper";

const ProductCard = ({
  name = "Product Title",
  price = 2000,
  rating = 4.5,
  image = {
    url: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    id: "53764gjfdbg",
  },
}) => {
  return (
    <div className="relative border w-fit overflow-clip grid z-1 hover:shadow-md rounded-2xl">
      <img
        src={image.url}
        alt={name}
        className="object-cover w-[30rem] h-[20rem]"
      />
      <div
        className="px-3 grid gap-1 py-2 absolute bg-white dark:bg-zinc-900 w-full bottom-0 translate-y-[3rem]
            hover:translate-y-0 transition-all duration-300 transform ease-in-out rounded-xl"
      >
        <h2>{name}</h2>

        <div className="flex justify-between">
          <div className="flex">{starsGenerator(rating)}</div>
          <span>{price}</span>
        </div>
        <LinkButton to={`/product`} text="View Product" />
      </div>
    </div>
  );
};

export default ProductCard;
