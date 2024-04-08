import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import ListRpoduct from '../components/ListRpoduct';

const Admin = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<AddProduct />} />
				<Route path='/showdisease' element={<ListRpoduct />} />
			</Routes>
		</div>
	)
}

export default Admin