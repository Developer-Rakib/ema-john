import { useEffect, useState } from "react";
import { getDataFromStore } from "./Storage"

const useCart = () => {
    let [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        let getData = getDataFromStore();
        let key = Object.keys(getData)
        console.log(key);
        fetch("http://localhost:5000/productsByID", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(key),
        })
            .then(res => res.json())
            .then(products => {

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
            })
    }, [])

    return [cartItem, setCartItem]
}
export default useCart;
