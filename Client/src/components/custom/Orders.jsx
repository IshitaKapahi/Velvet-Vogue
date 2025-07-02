import React from "react";
import { Card } from "../ui/card";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { SelectTrigger, SelectValue } from "../ui/select";
import OrderProductTile from "./OrderProductTile";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Orders = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 ml-3.5">Orders</h1>
      <div className="flex flex-col gap-5 mx-auto">
        <div className="space-y-8">
          <div className="p-4 space-y-4 ">
            <h2 className="text-xl font-medium">Order Summary</h2>

            <div className="grid space-y-1 gap-2 ">
              <Card className="space-y-2 p-3 shadow-md">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {/* Multiple orderd products will be displayed here  */}
                  <OrderProductTile />
                  <OrderProductTile />
                  <OrderProductTile />
                </div>
                <hr />

                <div>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Total:</span>
                    <span className="text-sm text-customGrey">₹560</span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Address:</span>
                    <span className="text-sm text-customGrey">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Name:</span>
                    <span className="text-sm text-customGrey">Raj Khanna</span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Email:</span>
                    <span className="text-sm text-customGrey">
                      raj@gmail.com
                    </span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Payment Id:</span>
                    <span className="text-sm text-customGrey">
                      bcjhdsbkjsdbfvfjkdv
                    </span>
                  </p>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pending" />
                  </SelectTrigger>
                  <SelectContent className="capitalize">
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="packed">Packed</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </Card>
            </div>
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Orders;
