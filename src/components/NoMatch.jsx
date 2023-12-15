// create a component that will be rendered when a user tries to navigate to a route that does not exist

import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
	return (
		<div className='text-center'>
			<h1>404 - Not Found!</h1>
			<Link to='/'>Go Home</Link>
		</div>
	);
}

export default NoMatch;