import React, { useContext, useState, useEffect }  from 'react';
import AllMenu from './AllMenu';
//import MenuDetail from './MenuDetail';
import {FoodContext} from '../contexts/FoodContext';

const Menu = ({passCart, passTotal}) => {

   const[order, setOrder] = useState('');
   const [total, setTotal] = useState(0);
   const {products} = useContext(FoodContext);
   
   const getTotal = () => {
   		const res = Array.from(order).reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        setTotal(res);
        console.log(res, total);
        passTotal(res);
   }

	const addCart = (id) => {
		
		const post = products.filter(product => {
			return product.id === id;
		})[0];
		
		//find if have same item
		const itemsCheck = Array.from(order).filter(or => {
			return or.id === id;
		})[0];
		//Find index of specific object using findIndex method.    
		const objIndex = Array.from(order).findIndex((obj => obj.id === id));
		
		if (itemsCheck === undefined || itemsCheck.length === 0) {
		setOrder([...order,post]);
		getTotal();
		}else{
			//console.log("Before update: ", order[objIndex]);
			order[objIndex].count = order[objIndex].count + 1;
			//console.log("After update: ", order[objIndex]);
			passCart(order);
			getTotal();

		}
	
	}

	useEffect(() => {
		if (order) {
		passCart(order);
		}		
	},[order, passCart])
	
	return(
		<div className="productList">
		<AllMenu products={products} addCart={addCart}/>
		</div>	
		)
	

}

export default Menu;