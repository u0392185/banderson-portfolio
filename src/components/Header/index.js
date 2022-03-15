import React from 'react'
import Nav from '../Nav'

function Header({currentPage, pages, clickLink}) {

	return (
		<Nav currentPage={currentPage} pages={pages} clickLink={clickLink} />
	)
}

export default Header