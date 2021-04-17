import React, {useState} from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import menu from '../images/menu.svg';

const Navbar = ({carts}) => {

  const [show, setShow] = useState(false);

/*
  useEffect(() => {
    console.log(show);
  },[show])
*/ 
	return (
		<div className="navbar top-0 pt-6 px-4 sm:px-6 lg:px-8">
    <div className="menu block md:hidden absolute mr-6 right-0 flex flex-col cursor-pointer" onClick={() => setShow(!show)}>
      <img className="w-10 h-10 z-20" src={menu} alt="menu"/>
      <span className="font-mono mr-2">Menu</span>
    </div>
		<nav className="laptop relative hidden md:block flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/" aria-label="Home">
                <span className="logo hidden md:hidden">Pizza</span>
              </Link>
            </div>
          </div>
          <div className="navbar">
            <NavLink exact to="/" className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</NavLink>
            <NavLink to="/menu" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Menu</NavLink>
            <NavLink to="/shopcart" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Shopcart</NavLink>
            <NavLink to="/orderItems" className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">OrderItems</NavLink>
             <span className="ml-8 font-medium text-indigo-500 hover:text-pink-300 transition duration-150 ease-in-out">
             Currently you have {carts.length} orders</span>
          </div>
    </nav>

  {/*mobile vr. */}
    {show ? (
      <nav className="block md:hidden mobile shadow-xl py-2">
            <div className="flex justify-center">
              <Link to="/" aria-label="Home">
                <span className="logo">Pizza</span>
              </Link>
            </div>         
          <div className="flex flex-col py-4 px-2">
            <NavLink exact to="/" className="py-2 mx-auto font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Home</NavLink>
            <NavLink to="/menu" className="py-2 mx-auto font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Menu</NavLink>
            <NavLink to="/shopcart" className="py-2 mx-auto font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Shopcart</NavLink>
            <NavLink to="/orderItems" className="py-2 mx-auto font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">OrderItems</NavLink>
             <span className="py-2 mx-auto font-medium text-indigo-500 hover:text-pink-300 transition duration-150 ease-in-out">
             Currently you have {carts.length} orders</span>
          </div>
    </nav>
    ):('')}
    

		</div>
	);
}

export default withRouter(Navbar)
