import React, { useState } from 'react';
// import "./DiseaseMain.css";

function Disease({ data, setData }) {
const[currData,setCurrData]=useState()
  const handleOnChange = (e) => {
    setCurrData(e.target.value)
    console.log(data)

  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(currData)
  }
  return (
    <div className='container' style={{ width: "45vw", textAlign: "left" }}>
      <h2>Disease</h2>
      <form onSubmit={handleOnSubmit}>


        <div className="mb-3">
          <label htmlFor="exampleInputname" className="form-label">Name</label>
          <input type="name" className="form-control" id="exampleInputname" placeholder='Enter name' style={{ border: "0.5px solid black", boxShadow: "" }} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputage" className="form-label">Age</label>
          <input type="age" className="form-control" id="exampleInputage" placeholder='Enter age' style={{ border: "0.5px solid black", boxShadow: "" }} />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputcontact" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="exampleInputcontact" placeholder='Enter contact number' style={{ border: "0.5px solid black", boxShadow: "" }} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputdisease" className="form-label">Disease</label>
          <input type="text"  onChange={handleOnChange} className="form-control" id="exampleInputdisease" placeholder='Enter disease' style={{ border: "0.5px solid black", boxShadow: "" }} />
        </div> 

        <div className="mb-3">
          <label htmlFor="exampleInputdescription" className="form-label">Description</label>
          <textarea name="description" id="exampleInputdescription" className="form-control" placeholder='Enter text here...' style={{ border: "0.5px solid black", width: "44vw", height: "15vh", boxShadow: "" }}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Disease;
