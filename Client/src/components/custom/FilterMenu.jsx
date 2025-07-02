import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"


const categoryData = {
    trigger: "Category",
    items: ["Salwar Suits", "Kurtis", "Jewellery", "Handbags"],
};

const priceData = {
    trigger: "Price",
    items: [1000, 2000, 3000, 4000],
};
const FilterMenu = () => {


    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [search, setSearch] = useState("");

    return (
        <div className="w-[93vw] flex flex-col sm:flex-row justify-between items-center mx-auto my-10 gap-3 sm:gap-8">

            {/* DROPDOWN Filters */}
            <div className="flex sm:w-[30%] w-full gap-3">

                {/* For Category */}
                <Select onValueChange={(value) => setCategory(value)}>
                    <SelectTrigger id={categoryData.trigger}>
                        <SelectValue placeholder={categoryData.trigger} />
                    </SelectTrigger>
                    <SelectContent position="popper" >
                        {/* Mapping the category items into dropdown list  */}
                        {
                            categoryData.items.map((item) => {
                                return <SelectItem key={item} value={item} className="capitalize">{item}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>


                {/* For Price */}
                <Select onValueChange={(value) => setPrice(value)}>
                    <SelectTrigger id={priceData.trigger}>
                        <SelectValue placeholder={priceData.trigger} />
                    </SelectTrigger>
                    <SelectContent position="popper" >
                        {/* Mapping the category items into dropdown list  */}
                        {
                            priceData.items.map((item) => {
                                return <SelectItem key={item} value={item} className="capitalize">Less Than {item}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>


            </div>

            {/* SEARCH INPUT */}

            <div className="sm=w-[60%] w-full">

                <Input id="search" placeholder="Search Here..." onChange={(e) => setSearch(e.target.value)} />

            </div>
        </div>
    )
}

export default FilterMenu