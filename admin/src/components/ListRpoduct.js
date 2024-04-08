import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const ListProduct = () => {
	const [diseases, setDiseases] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		fetchDiseases();
	}, []);

	const fetchDiseases = async () => {
		try {
			const response = await fetch('http://localhost:4000/disease/alldisease');
			const data = await response.json();
			setDiseases(data.diseases);
		} catch (error) {
			console.error('Error fetching diseases:', error);
		}
	};

	const deleteDisease = async (id) => {
		try {
			await fetch(`http://localhost:4000/disease/deletedisease/${id}`, {
				method: 'DELETE'
			});
			setDiseases(diseases.filter(disease => disease._id !== id));
			alert('Disease data deleted successfully');
		} catch (error) {
			console.error('Error deleting disease:', error);
			alert('Failed to delete disease data');
		}
		fetchDiseases();
	};

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredDiseases = diseases.filter(disease =>
		disease.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="container mt-5">
			<h2 className="mb-4">Admin Page</h2>
			<button className="btn btn-primary mb-3" onClick={() => navigate('/')}>Add Disease</button>
			<div className="mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Search by disease name"
					value={searchTerm}
					onChange={handleSearch}
				/>
			</div>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{filteredDiseases.map(disease => (
					<div className="col" key={disease._id}>
						<div className="card h-100 shadow">
							<div className="card-body">
								<h5 className="card-title">{disease.name}</h5>
								<p className="card-text">{disease.description}</p>
								<h6 className="card-subtitle mb-2 text-muted">Remedies:</h6>
								<ul className="list-group list-group-flush">
									{disease.remedies.map((remedy, index) => (
										<li key={index} className="list-group-item">{remedy}</li>
									))}
								</ul>
								<h6 className="card-subtitle mb-2 text-muted mt-3">Exercises:</h6>
								<ul className="list-group list-group-flush">
									{disease.exercises.map((exercise, index) => (
										<li key={index} className="list-group-item">{exercise}</li>
									))}
								</ul>
								<h6 className="card-subtitle mb-2 text-muted mt-3">Foods to Eat:</h6>
								<ul className="list-group list-group-flush">
									{disease.foods_to_eat.map((food, index) => (
										<li key={index} className="list-group-item">{food}</li>
									))}
								</ul>
							</div>
							<div className="card-footer">
								<button className="btn btn-danger" onClick={() => deleteDisease(disease._id)}>Delete</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListProduct;
