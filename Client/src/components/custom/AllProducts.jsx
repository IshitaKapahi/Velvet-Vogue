import React from "react";
import { Input } from "../ui/input";
import { Edit, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const AllProducts = () => {
  return (
    <div className="mx-auto px-4 sm:px-8 -z-10">
      <h1 className="text-3xl font-bold mb-8"> Our Products</h1>
      <div className="mb-8">
        <form action="" className="flex gap-4 items-end sm:w-[50vw]">
          <div className="flex-1 ">
            <label
              className="block text-sm font-medium mb-1 text-gray-700"
              htmlFor="search"
            >
              Search Products
            </label>
            <div className="relative ">
              <Input
                type="text"
                id="search"
                placeholder="Search by name or description"
                className="pl-10"
              />
              <Search
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>
          <div className="w-48">
            <label
              className="block text-sm font-medium mb-1 text-gray-700"
              htmlFor="category"
            >
              Category
            </label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Suit">Suit</SelectItem>
                <SelectItem value="Kurtis">Kurtis</SelectItem>
                <SelectItem value="Jewellery">Jewellery</SelectItem>
                <SelectItem value="Handbags">Handbags</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-2 sm:mx-0">
        <Card className="flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-rectangle relative">
              <img
                src="https://media.istockphoto.com/id/486592060/photo/indian-jewellery.jpg?b=1&s=612x612&w=0&k=20&c=1Q_COHPiRLmznTrd8GK2SB9JasFQ-YfnD5MEshhQjEA="
                alt=""
                className="rounded-t-lg"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <h3 className="text-lg font-semibold mb-2"> Gold Plated Bangles</h3>
            <p className="text-sm text-gray-600 mb-4  ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
              hic commodi.
            </p>
            <p className="text-lg font-bold ">₹675</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="outline">
              <Edit className="mr-3 h-4 s-4" />
              Edit
            </Button>
            <Button>Blacklist Product</Button>
          </CardFooter>
        </Card>
      </div>
      <Dialog>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Poduct</DialogTitle>
          </DialogHeader>
          <form action="">
            <div className="grid gap-4 py-4">
              <div className="grid gap-4 items-center">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name"></Input>
              </div>
              <div className="grid gap-4 items-center">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" name="Description"></Textarea>
              </div>
              <div className="grid gap-4 items-center">
                <Label htmlFor="price">Price</Label>
                <Input type="number" id="price" name="Price"></Input>
              </div>
              <div className="grid gap-4 items-center">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
                  <SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Suit">Suit</SelectItem>
                      <SelectItem value="Kurtis">Kurtis</SelectItem>
                      <SelectItem value="Jewellery">Jewellery</SelectItem>
                      <SelectItem value="Handbags">Handbags</SelectItem>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit"> Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllProducts;
