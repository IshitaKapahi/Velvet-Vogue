import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { Badge } from '../ui/badge'


const CartDrawer = () => {
    let cartItems = [
        {
            id: 1,
            name: "Product 1",
            price: "300",
            quantity: 1,
        },
        {
            id: 2,
            name: "Product 2",
            price: "200",
            quantity: 1,
        },
    ]

    const totalQuantity = 0;
    const totalPrice = 0;

    return (
        <Drawer>
            <DrawerTrigger className="relative">
                {/* It will display the no. of items in the cart as superscript */}

                {totalQuantity > 0 && (
                    <Badge className={`absolute px-1 py-0`}>{totalQuantity} </Badge>
                )}

                {/* Shopping Cart */}
                <ShoppingCart
                    className="text-grey-800 dark:text-white hover:scale-105 transition-all ease-in-out cursor-pointer"
                    strokeWidth={1.3}
                    size={23} />

            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>
                        Total Items : {totalQuantity}     ,    Total Price : ₹ {totalPrice}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>CheckOut</Button>

                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartDrawer