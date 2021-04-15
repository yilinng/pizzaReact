import React, {useEffect} from "react";
import OrderDetail from "./OrderDetail";
import ProgressBar from "./ui/ProgressBar";

const OrderItems = ({carts, total}) => {
    

    useEffect(() => {
       console.log(carts);
    }, [carts])
    return (
        <div className="orderItems m-20">
            <OrderDetail carts={carts}  total={total}/>
           
        </div>
    )
}

export default OrderItems;