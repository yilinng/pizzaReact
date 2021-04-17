import React, {Component} from 'react';
import pizza from '../images/homemade-pizza-with-a-lot-of-cheese.jpg';
import { Link } from 'react-router-dom'

class Home extends Component {

	render(){
	return(
		<div className="home mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:mx-12 xl:mt-28">
			<div className="sm:text-center lg:text-left">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Improved<br className="my-4"/> Health
            <br className="xl:hidden"/>
            <span className="text-indigo-600">and safety</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Over the past few weeks, we've been closely monitoring the health environment to ensure we are keeping pace with the situation and to protect the health, safety and peace of mind of our guests and staff
          </p>
          
        </div>
         <div className="m-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link to="/menu">
                <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Let's order</span>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <button  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                free shipping Only today
              </button>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          	<img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          	 src={pizza} alt="pizza" />
          </div>	
		</div>

		)
	}
}


export default Home;