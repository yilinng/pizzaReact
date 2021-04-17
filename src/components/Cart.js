import React from 'react';

const Cart = (props) => {

	const {carts, cutBtn, addBtn, handleDelete} = props;
	
	return carts.length ? (
	<div className="shopCart max-w-screen-md mx-auto my-10 shadow-2xl rounded-lg">
	{carts.map(cart => {
      return(
      <div className="flex flex-col xl:flex-row my-4 xl:my-10 shadow-xl" key={cart.id} data-id={cart.id}>
        <div className="image m-auto">
          <img className="w-auto md:max-w-xs h-36" src={cart.image} alt={cart.title}/>
        </div>
        <div className="topicName m-auto w-auto xl:w-32">
        <span className="font-semibold text-xl">{cart.title}</span>
        </div>
        <div className="flex justify-evenly mt-2 xl:m-auto">
        <button className="cutBtn bg-red-500 text-white w-6 h-6" onClick={() => cutBtn(cart.id)}>-</button>
        <span className="orderUnit">{cart.count}</span>
        <button className="addBtn bg-blue-500 text-white w-6 h-6" onClick={() => addBtn(cart.id)}>+</button>
        </div>
        <div className="font-sans text-2xl px-4 py-2 text-center m-auto">${cart.price}</div>
        <div className="px-4 py-2 m-auto">
          <button type="button" className="deleteItem bg-green-500 text-white w-8 h-8" onClick={() => handleDelete(cart.id)}>X</button>
        </div>
    </div>
     );
    })}
	</div>

	): (
	<div className="text-teal-300 font-semibold text-2xl my-12">not order pick one!</div>
	);
}
  	

export default Cart;