import React from 'react'

const Demo = () => {
    const demoDisease ={
        "diseases": [
          {
            "name": "Heart Disease",
            "description": "Heart disease refers to conditions that involve narrowed or blocked blood vessels that can lead to heart attack, chest pain (angina), or stroke.",
            "remedies": [
              "Adopting a healthy diet low in saturated fat, cholesterol, and sodium.",
              "Quitting smoking and avoiding secondhand smoke.",
              "Managing stress through relaxation techniques like meditation or deep breathing.",
              "Taking prescribed medications as directed by a healthcare provider."
            ],
            "exercises": [
              "Walking",
              "Swimming",
              "Cycling",
              "Aerobics"
            ],
            "foods_to_eat": [
              "Fruits (e.g., berries, citrus fruits)",
              "Vegetables (e.g., leafy greens, broccoli)",
              "Whole grains (e.g., oats, quinoa)",
              "Lean proteins (e.g., fish, chicken)",
              "Nuts and seeds (e.g., almonds, flaxseeds)"
            ]
            }
        ]
        
    }
    return (
        <div className='container my-3'>
            {demoDisease.diseases.map((disease,index)=>{
            return (
                <div class="card" style={{width:"800px"}} key={index}>
                <p class="card-title">{disease.name}</p>
                <p class="small-desc">{disease.description}</p>

                <h5 className="card-title">Remedies</h5>
              <ul className="small-desc">
                {disease.remedies.map((remedy, i) => (
                  <li key={i}>{remedy}</li>
                ))}
              </ul>
              <h5 className="card-title">Exercises</h5>
              <ul className="small-desc">
                {disease.exercises.map((exercise, i) => (
                  <li key={i}>{exercise}</li>
                ))}
              </ul>

              <h5 className="card-title">Foods to Eat</h5>
              <ul className="small-desc">
                {disease.foods_to_eat.map((food, i) => (
                  <li key={i}>{food}</li>
                ))}
              </ul>
                <div class="go-corner">
                    <div class="go-arrow">→</div>
                </div>
            </div>
            )
            })}
        </div>
    )
}

export default Demo
