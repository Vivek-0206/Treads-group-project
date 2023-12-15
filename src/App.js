import {Container} from 'react-bootstrap'
import {Route, Routes} from 'react-router-dom'
import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Vivek from './components/Vivek'
import Yatharth from './components/Yatharth'

import './App.css'

function App() {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/vivek/*' element={<Vivek />} />
						<Route path='/yatharth/*' element={<Yatharth />} />
						<Route path='/vivek/*' element={<Vivek />} />
						<Route path='/vivek/*' element={<Vivek />} />
						<Route path='*' element={<NoMatch />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
