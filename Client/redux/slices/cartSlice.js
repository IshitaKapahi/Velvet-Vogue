import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0,
        totalQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            //When this reducer is called, the new item to be added is in action.payload.

            //Checks if the item is already in the cart by matching _id.
            const newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item._id === newItem._id
            );

            /* Push it into cartItems . Add quantity and totalItemPrice */
            if (existingItemIndex === -1) {
                state.cartItems.push({
                    ...newItem,
                    quantity: newItem.quantity,
                    totalItemPrice: newItem.price * newItem.quantity,
                });

                /*Increase the quantity . Update the total price for that specific item */
            } else {
                state.cartItems[existingItemIndex].quantity += newItem.quantity;
                state.cartItems[existingItemIndex].totalItemPrice +=
                    newItem.price * newItem.quantity;
            }
            /* Increase total quantity
            
            Increase total price (rounded to 2 decimal places) */
            state.totalQuantity += newItem.quantity;
            state.totalPrice = Number(
                (state.totalPrice + newItem.price * newItem.quantity).toFixed(2)
            );
        },

        removeFromCart: (state, action) => {
            // /This function removes or decreases the quantity of an item.
            const itemToRemove = action.payload;
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item._id === itemToRemove._id
            );
            //Remove item if quantity reaches 0
            if (existingItemIndex === -1) return;

            const existingItem = state.cartItems[existingItemIndex];
            existingItem.quantity -= itemToRemove.quantity;
            existingItem.totalItemPrice -=
                itemToRemove.price * itemToRemove.quantity;

            state.totalQuantity -= itemToRemove.quantity;
            state.totalPrice = Number(
                (state.totalPrice - itemToRemove.price * itemToRemove.quantity).toFixed(2)
            );

            if (existingItem.quantity === 0) {
                state.cartItems.splice(existingItemIndex, 1);
            }
        },

        emptyCart: (state) => {
            state.cartItems = [];
            state.totalPrice = 0;
            state.totalQuantity = 0;
        }
    },
});

// Export actions and reducer
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
