import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
	const [formData, setFormData] = useState({
		name: '',
		description: '',
		remedies: '',
		exercises: '',
		foods_to_eat: ''
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:4000/disease/adddisease', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
			if (response.ok) {
				alert('Added to DB successfully');
				navigate('/');
			} else {
				alert('Failed to add disease');
			}
		} catch (error) {
			console.error('Error adding disease:', error);
			alert('Failed to add disease');
		}
	};

	return (
		<div style={{ background: "linear-gradient(rgb(153 214 238 / 72%), rgb(9 151 253 / 95%))" }}>
			<div className="container" >
				<div div className="row justify-content-center" >
					<div className="col-md-8">
						<div className="card my-5 shadow p-4">
							<h2 className="mb-4 text-center">Add Disease</h2>
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="name" className="form-label">Name</label>
									<input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
								</div>
								<div className="mb-3">
									<label htmlFor="description" className="form-label">Description</label>
									<textarea id="description" className="form-control" name="description" value={formData.description} onChange={handleChange} required />
								</div>
								<div className="mb-3">
									<label htmlFor="remedies" className="form-label">Remedies</label>
									<textarea id="remedies" className="form-control" name="remedies" value={formData.remedies} onChange={handleChange} required />
								</div>
								<div className="mb-3">
									<label htmlFor="exercises" className="form-label">Exercises</label>
									<textarea id="exercises" className="form-control" name="exercises" value={formData.exercises} onChange={handleChange} required />
								</div>
								<div className="mb-3">
									<label htmlFor="foods_to_eat" className="form-label">Foods to Eat</label>
									<textarea id="foods_to_eat" className="form-control" name="foods_to_eat" value={formData.foods_to_eat} onChange={handleChange} required />
								</div>
								<div className="text-center">
									<button type="submit" className="btn btn-primary">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div >
			</div >
		</div>
	);
};

export default AddProduct;
