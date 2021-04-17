import React from 'react';

const OrderDetail = ({handle}) => {


	return(
		<div className="orderItem w-3/4 md:w-2/4 overflow-auto h-24 m-auto">			
			{handle &&
				handle.map(cart => (
					<ul className="cart list-disc h-auto bg-gray-100" key={cart.id}>
						<li className="orderDetal flex justify-between">
							<span className="w-32 font-sans text-base font-medium">{cart.title}</span>
							<span>X{cart.count}</span>
							<span className="lining-nums">${cart.price}</span>
						</li>
					</ul>
				)
			)}
		</div>
	)
}

export default OrderDetail;