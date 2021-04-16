import React from "react";
import OrderDetail from "./OrderDetail";
import ProgressBar from "./ui/ProgressBar";

const OrderItems = ({handleSubmit}) => {
    
    	
	//get total cost
	const getTotal = ((handle) => {
        const res = Array.from(handle).reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
		return res;
    });

    return (
        <div className="orderItems my-20 mx-6 w-5/6">
            <header className="page-header">
                <span className="text-2xl text-blue-700 font-extrabold">OrderList</span>
            </header>
            
            {handleSubmit.length ?
                handleSubmit.map((handle, index) => (
                    <article className="orderItem w-3/4 h-72 rounded-lg border-2 border-gray-300 my-5" key={index}>
                        <span className="text-xl font-bold mx-10">We're are processing your order</span>
                        <ProgressBar/>
                        <OrderDetail handle={handle} key={index}/>
                        <div className="flex justify-center">
                            <span className="text-3xl text-blue-700">Total${getTotal(handle)}</span>
                        </div>
                    </article>
            )): <article>no orderList can see :)</article>} 
            
        </div>
    )
}

export default OrderItems;