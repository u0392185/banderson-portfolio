import React from 'react'

function Header({currentPage, pages, clickLink}) {

	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
		  <div className="flex items-center flex-shrink-0 text-white mr-6">
		    <h1 className="font-semibold text-3xl tracking-tight">banderson</h1>
		  </div>
		    <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
			    <div className="text-md lg:flex-grow">
		    	  { pages.map(({pageName, display}, i) => 
		    	  	(
					    <a
					      	key={display}
					      	onClick={ () => {clickLink(pages[i])} } 
					      	className={'block mt-4 lg:inline-block lg:mt-0 text-teal-100 mr-4 cursor-pointer' + 
					      	(currentPage.pageName === pageName ? ' navActive' : '')}

					      >{display}</a>
	    	  		)
		    	  ) }
			    </div>
			</div>
		</nav>
	)
}

export default Header