import { useEffect, useState } from "react";
import { getDataFromStore } from "./Storage"

const useCart = (products) => {
    let [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        let getData = getDataFromStore();
        let sevedCart = [];
        for (const id in getData) {
            let addedItem = products.find(product => product._id === id);
            if (addedItem) {
                let quantity = getData[id];
                addedItem.quantity = quantity;
                sevedCart.push(addedItem)
            }
        }
        setCartItem(sevedCart)
    }, [products])
    return [cartItem, setCartItem]
}
export default useCart;