import React from 'react';

const OrderDetail = ({handle}) => {
	
	return(
		<div className="orderItem w-2/4 h-auto bg-gray-200 my-20 mx-auto">			
			{handle ?(
				handle.map(cart => (
					<ul className="cart list-disc" key={cart.id}>
						<li className="orderDetal flex justify-between">
							<span className="w-32 font-sans text-base font-medium">{cart.title}</span>
							<span>X{cart.count}</span>
							<span className="lining-nums">${cart.price}</span>
						</li>
					</ul>	
			))
			):(
				<span className="m-auto font-sans text-xl font-medium">no order</span>
			)}

		</div>
	)
}

export default OrderDetail;