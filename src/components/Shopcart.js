import React from 'react';
import Cart from './Cart';
import PriceTotal from './PriceTotal';
import firebase from '../firebase';

const Shopcart = ({carts, passCart, total ,passTotal}) => {

   
  const getTotal = () => {
        const res = Array.from(carts).reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        //console.log(res, total);
        passTotal(res);
    };

   const deleteTotal = (findItems) => {
       const res = Array.from(findItems).reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        //console.log(res, total);
        passTotal(res);

   } 
  
  const cutBtn = (id) => {
   //find click item in carts
   const findItem = Array.from(carts).filter(cart => {
      return cart.id === id;
    })[0];
    
   //Find index of specific object using findIndex method. 
   if (findItem.count > 1) {

    const objIndex = Array.from(carts).findIndex((cart => cart.id === id));
    //console.log("Before update: ", carts[objIndex]);
    carts[objIndex].count = carts[objIndex].count - 1;
    //console.log("After update: ", carts[objIndex]);
    passCart(carts);
    getTotal();
   }      
 }

 const addBtn = (id) => {
    const objIndex = Array.from(carts).findIndex((cart => cart.id === id));
    //console.log("Before update: ", carts[objIndex]);
    carts[objIndex].count = carts[objIndex].count + 1;
    //console.log("After update: ", carts[objIndex]);
    passCart(carts);
    getTotal();
 }

 const handleDelete = (id) => {
   const findItems = Array.from(carts).filter(cart => {
      return cart.id !== id;
    });
   passCart(findItems);
   deleteTotal(findItems);
 }

 const handleToSql = (carts) => {
    //this.props.history.push('/orderlist')
    // Create a new post reference with an auto-generated id
    const postListRef = firebase.database().ref('posts');
    const newPostRef = postListRef.push();
    newPostRef.set({
        carts
    });
    cleanCart();
  }

  const cleanCart = () => {
    passCart('');
    passTotal(0);
  }
  
/*
  useEffect(() => {
    console.log('useEffect callback', carts);
  }, [carts]);

  useEffect(() => {
    console.log('useEffect callback', total);
  }, [total]);
*/
	return (
    <div id="order" className="mx-auto xl:mx-12">
      <Cart carts={carts} cutBtn={cutBtn} addBtn={addBtn} handleDelete={handleDelete}/>
  	  <PriceTotal carts={carts} total={total} handleToSql={handleToSql}/>
    </div>
	);
}

export default Shopcart;