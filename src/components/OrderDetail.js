import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const OrderDetail = ({carts}) => {

	
	return(
		<div className="orderItem">
			{carts ?(
				carts.map(cart => (
					<div className="cart" key={cart.id}>
						{cart.title}
					</div>
			))
			):(
				<div>no order</div>
			)}

		</div>
	)
}

export default OrderDetail;