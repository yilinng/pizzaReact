import React, { useState} from "react";
import Navbar from './components/Navbar';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Menu from './components/Menu';
import Shopcart from './components/Shopcart';
import OrderList from './components/OrderList';
import FoodContextProvider from './contexts/FoodContext';

const App = () => {

  const [carts, setCarts] = useState('');
  const [total, setTotal] = useState(0);

/*
	useEffect(() => {
	  console.log(carts);
	},[carts]);

	useEffect(() => {
	  console.log(total);
	},[total]);
*/
  return (
    <FoodContextProvider>
        <div className="App">
        <BrowserRouter>
          <Navbar carts={carts}/>
          <Route exact path='/' component={Home}/>
          <Route path='/menu'
           render={(props) => (<Menu {...props} passCart={setCarts} passTotal={setTotal}/>
          )}/>
          <Route path='/shopcart'
           render={(props)=> (<Shopcart {...props} 
           carts={carts} passCart={setCarts} total={total} passTotal={setTotal}/>
          )}/>
           <Route exact path='/orderlist' component={OrderList}/>

          </BrowserRouter>  
        </div>
    </FoodContextProvider>

  );
   
}

export default App;
