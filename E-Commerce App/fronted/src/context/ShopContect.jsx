import { Children, createContext } from "react";
import { product } from "../assets/assets";
export const ShopContect = createContext();

const ShopContectProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;

    const value = {
        products , currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContectProvider;