import React, {useEffect, useState} from 'react';
import firebase from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import OrderDetail from './OrderDetail';

const OrderList = () => {

const [orders, setOrders] = useState('');
const [post, setPost] = useState('');


const handleClick = (order) => {
	setPost(order);
}

useEffect(() => {
	const newArr2 = [];
	const leadsRef = firebase.database().ref('posts');
	leadsRef.on('value', function(snapshot) {
		
	    snapshot.forEach(function(childSnapshot) {
	      const childData = childSnapshot.val();
	      //console.log(childData.carts);
	      newArr2.push(childData.carts)
	    });
		setOrders(newArr2);
	});	
},[]);

/*
useEffect(() => {
	console.log(orders);	
},[orders]);

useEffect(() => {
	console.log(post);	
},[post]);
*/
	const orderList = orders.length ? (
			Array.from(orders).map((order, i) => {
				return(
					<div className="flex flex-col list-decimal" key={uuidv4()}>
						<span className="m-auto text-3xl cursor-pointer hover:text-red-500" onClick={()=> handleClick(order)}>order:{parseInt(i+1)}</span>
					</div>
				)
			})
			):('')
	
	return(
		<div className="orderList mx-auto my-20">
			<div className="flex flex-col">
			<div className="list-decimal mx-auto">
				{orderList}
		{post.length ? (
			<OrderDetail post={post}/>
		):(
		<div className="m-auto font-mono text-3xl">click one !</div>
		)}		
			</div>							
			</div>
		</div>
	)

}

export default OrderList;