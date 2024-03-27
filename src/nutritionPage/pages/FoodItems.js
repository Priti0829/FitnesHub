import React from 'react'

const FoodItems = (props) => {
	const { title, image, fibre, protein, calories, carbohydrates, fat } = props;
	return (
		<div className="card my-3" >
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body border border-secondary">
				<h5 className="card-title fw-bolder">{title}</h5>
				<p className="card-text fw-bold fst-italic"> CALORIES : {calories}</p>
				<p className="card-text fw-bold fst-italic"> FAT : {fat}</p>
				<p className="card-text fw-bold fst-italic">CARBOHYDRATES : {carbohydrates}</p>
				<p className="card-text fw-bold fst-italic">PROTEIN : {protein}</p>
				<p className="card-text fw-bold fst-italic">FIBER : {fibre}</p>
			</div>
		</div>
	)
}

export default FoodItems