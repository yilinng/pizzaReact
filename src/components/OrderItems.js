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
        <div className="orderItems my-auto sm:my-20 mx-2 sm:mx-6 w-auto sm:w-5/6">
            <header className="page-header">
                <span className="text-2xl text-blue-700 font-extrabold">OrderList</span>
            </header>
            
            {handleSubmit.length ?
                handleSubmit.map((handle, index) => (
                    <article className="orderItem w-auto sm:w-3/4 h-auto rounded-lg border-2 border-gray-300 my-8 sm:my-5" key={index}>
                        <span className="text-xl font-bold mx-4 md:mx-10 w-auto">We're are processing your order</span>
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