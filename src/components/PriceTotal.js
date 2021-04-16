import React from 'react';

const PriceTotal = ({carts, total, handleToSql}) => {

	return (
	<div className="priceTotal flex flex-col relative xl:absolute xl:right-0 m-auto xl:mr-20">
	{carts.length > 1 ? (
	carts.map(cart => {
		return(
			<div className="m-auto" data-id={cart.id} key={cart.id}>		
			    <span className="priceChoose text-4xl text-blue-500 tabular-nums">{cart.price}</span>
			    <span className="text-4xl text-blue-500">X</span>
			    <span className="unitChoose text-4xl text-blue-500">{cart.count}</span>
			</div>
			);
		}))	
		: ('')
		}
		<span className="plus text-2xl font-black">+</span>
		<hr/>
	<div className="m-auto lastTotal">
		  <span className="text-2xl text-red-600 text-left">total$</span> 
		  <span className="total text-4xl text-red-700 text-center tabular-nums">{total}</span>		  
	</div>
	{total > 0 ? (
		<div className="passToSql my-3 mx-auto"> 			
			<button className="bg-green-500 text-white text-3xl px-20 py-2 xl:p-2 rounded font-semibold"
			onClick={() => { if (window.confirm('Are you sure you wish to submit this order ?'))
			handleToSql(carts) } }>submit</button>
		</div>
		):('')}
	
	</div>
	)
}

export default PriceTotal;