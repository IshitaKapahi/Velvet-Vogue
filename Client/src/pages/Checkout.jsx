import CheckoutProduct from "@/components/custom/CheckoutProduct";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";

const Checkout = () => {
  return (
    <div className="mx-auto w-[98vw] sm:w-[68vw] flex justify-between items-center sm:my-20">
      <div className="flex flex-col sm:flex-row gap-5 mx-auto my-10">
        {/* Product Details */}
        <div className="space-y-8 ">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-medium">Order Summery</h2>
            <div className="space-y-1 text-3xl ">
              <CheckoutProduct />
            </div>
            <hr />
            <div className="p-3 rounded-md">
              <p className="flex justify-between items-center">
                <span className="font-semibold text-customGrey">Subtotal</span>
                <span className="font-bold">₹599</span>
              </p>

              <p className="flex justify-between items-center">
                <span className="font-semibold text-customGrey">Tax:</span>
                <span className="font-bold">₹0</span>
              </p>

              <p className="flex justify-between items-center">
                <span className="font-semibold text-customGrey">
                  Shipping Cost
                </span>
                <span className="font-bold">₹0</span>
              </p>
            </div>
            <hr />
            <p className="flex justify-between items-center px-3">
              <span className="font-bold">Total :</span>
              <span className="font-bold">₹599</span>
            </p>
          </div>
        </div>
        {/* Personal Details */}
        <div className="w-[98vw] sm:w-[28vw]">
          <Card className="p-4 shadow-md space-y-4 ">
            <h2 className="text-xl font-medium"> Billing Infomation </h2>
            <div className="space-y-2">
              <Label htmlFor="name"> Full Name</Label>
              <Input id="name" placeholder="John Woodie" className="w-full" />
              <Label htmlFor="email"> Email Address</Label>
              <Input
                id="email"
                placeholder="JohonWoodie@gmail.com"
                type="email"
                className="w-full"
              />
              <Label htmlFor="address">Shipping Address</Label>
              <Textarea
                rows="7"
                id="address"
                placeholder=" 123 Main St. City , State"
                className="w-full"
              />
            </div>
            <Button className="w-full">Place Order</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
