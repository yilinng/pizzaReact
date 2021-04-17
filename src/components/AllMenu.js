import React from 'react';

const AllMenu = ({products, addCart}) => {

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return(
	<div className="allmenu grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 place-items-auto my-10 max-w-2xl mx-auto h-auto">

		{products.map(product => {
		return (
				<div className="my-6 md:my-auto" key={product.id} data-id={product.id}>
					<form className="flex flex-col rounded-lg mb-10 shadow-xl" onSubmit={handleSubmit}>
						<div className="mx-auto">
							<img className="rounded-lg h-32" src={product.image} alt={product.title}/>
						</div>
						<div className="flex flex-col">
						<span className="text-2xl font-extrabold text-center my-2 mx-auto">{product.title}</span>
						<span className="text-2xl font-light text-center text-red-600">${product.price}</span>
						<div className="relative mx-auto"> 
							<input className="rounded-lg my-6 w-48 py-3 px-2 bg-purple-500 text-white font-semibold cursor-pointer" onClick={() => addCart(product.id)} type="submit" value="order"/> 
						</div> 
						</div>
					</form>
			   	</div>
		);
	})}
	</div>

	)
}

export default AllMenu;