import React from 'react'

function Nav() {

	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
		  <div className="flex items-center flex-shrink-0 text-white mr-6">
		    <h1 className="font-semibold text-3xl tracking-tight">banderson</h1>
		  </div>
		    <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
			    <div className="text-sm lg:flex-grow">
			      <a
			      	href="#responsive-header"
			      	className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
			      >Contact</a>
			      <a 
			      	href="#responsive-header" 
			      	className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
			      >About Me</a>
			      			      <a 
			      	href="#responsive-header" 
			      	className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
			      >Resume</a>
			    </div>
			</div>
		</nav>
	)
}

export default Nav