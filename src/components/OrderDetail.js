import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const OrderDetail = ({post}) => {

	const orderlist = post.length ? (
		
			Array.from(post).map((po, i) => {
				return(
					<ol className="max-w-max bg-gray-50 font-mono text-left text-2xl p-6 shadow-lg border-b-2" key={uuidv4()}>					
						<li className="text-indigo-800">title:{po.title}</li>
						<li className="text-indigo-700">price:{po.price}</li>
						<li className="text-indigo-700">unit:{po.count}</li>
					</ol>
				)
			})
		):('');
	
	return(
		<div className="orderList">
			<h1 className="text-3xl font-mono mx-auto text-red-500">itemList</h1>
			<div className="list-decimal border border-green-500 rounded-md">
				{orderlist}
			</div>
		</div>

	)
}

export default OrderDetail;