import React, { useEffect, useState } from 'react'
import FoodItems from './FoodItems'
import foodData from '../nutritionFood.json';
import Search from './Search';

const FoodList = () => {
	const [foods, setFoods] = useState([]);
	const [filteredFoods, setFilteredFoods] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const fetchFoodList = async () => {
		// const promise = await fetch(foodData);
		const data = foodData
		console.log(data);
		setFoods(data.foods);
	}

	useEffect(() => {
		fetchFoodList();
	}, []);

	useEffect(() => {
		// Filter foods based on search query
		const filtered = foods.filter(food => food.name.toLowerCase().includes(searchQuery.toLowerCase()));
		setFilteredFoods(filtered);
	}, [searchQuery, foods]);

	const handleSearch = (query) => {
		setSearchQuery(query);
	}




	return (
		<div className='container'>
			<h1 className='text-center my-3'>Food Nutrients</h1>
			<div className="container ">
				<Search onSearch={handleSearch} />
			</div>
			<div className="container row">
				{filteredFoods.map((food, index) => {
					const uniqueKey = `${food.image}-${index}`;
					return (
						<div className="col-md-4" key={uniqueKey}>
							<FoodItems title={food.name} image={food.image} calories={food.nutrition.calories} fat={food.nutrition.fat} carbohydrates={food.nutrition.carbohydrates} protein={food.nutrition.protein} fibre={food.nutrition.fiber} />
						</div>
					)
				})}
			</div>


		</div>
	)
}

export default FoodList