import React, { useState } from 'react';
//import React, { useState } from 'react';
import './Diet.css';
function Diet() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [height,setHeight] = useState('');
  const [diseaseInfo, setDiseaseInfo] = useState('');
  const [sugar, setSugar] = useState('');
  const [dietPlan, setDietPlan] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };


  const handleDiseaseInfoChange = (event) => {
    setDiseaseInfo(event.target.value);
  };
  
  /*const handleChange = (event) => {
    setSugar(event.target.value);
  };
  */

  const handleSugarChange = (event) => {
    setSugar(event.target.value);
  };
 
  
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleGenerate = () => {
    let generatedDietPlan = '';

    // Logic for generating diet plan based on age
    if (age <= 18) {
      generatedDietPlan = `Breakfast:
Whole grain cereal with milk or yogurt
Fresh fruit (e.g., banana, berries)
Whole wheat toast or whole grain muffin

Mid-Morning Snack:
Cheese stick or yogurt
Handful of almonds or other nuts
Carrot or celery sticks with hummus

Lunch:
Turkey or chicken sandwich on whole wheat bread
Side salad with mixed greens, tomatoes, and cucumber
Low-fat yogurt or fruit smoothie

Afternoon Snack:
Apple slices with peanut butter
String cheese
Popcorn (plain or lightly salted)

Dinner:
Grilled chicken or fish
Steamed vegetables (broccoli, carrots, cauliflower)
Brown rice or quinoa
Mixed fruit salad

Evening Snack:
Greek yogurt with honey
Whole grain crackers with cheese
Trail mix with nuts and dried fruits

It's important for teenagers to have a balanced diet that includes a variety of foods from all food groups, including fruits, vegetables, whole grains, lean proteins, and healthy fats. Additionally, staying hydrated by drinking plenty of water throughout the day is essential for overall health. This diet plan provides a good balance of nutrients and can be adjusted based on individual preferences and dietary restrictions.`;
    } else if (age > 18 && age <= 30) {
      generatedDietPlan =  `
      Breakfast:
Whole grain toast with avocado spread
Scrambled eggs or tofu scramble
Mixed berries or a small fruit salad

Mid-Morning Snack:
Greek yogurt with granola and honey
Sliced cucumber or bell peppers with hummus

Lunch:
Grilled chicken or tofu salad with mixed greens, tomatoes, cucumbers, and balsamic vinaigrette
Quinoa or brown rice pilaf
Steamed broccoli or roasted vegetables


Afternoon Snack:
Apple slices with almond butter
Whole grain crackers with cheese
Trail mix with nuts, seeds, and dried fruits


Dinner:
Baked salmon or tempeh with lemon and herbs
Sweet potato or roasted potatoes
Steamed asparagus or green beans
Mixed greens salad with vinaigrette dressing


Evening Snack:
Cottage cheese with pineapple chunks
Whole grain toast with peanut butter
Dark chocolate squares or a small handful of almonds;`
    } else if (age > 30 && age <= 45) {
      generatedDietPlan = `Breakfast:

      Oatmeal with sliced bananas and almonds
      Greek yogurt with honey
      Whole grain toast with almond butter
      
      Mid-Morning Snack:
      Cottage cheese with sliced peaches
      Handful of mixed nuts (almonds, walnuts, cashews)
      
      Lunch:
      Grilled chicken or tofu wrap with whole wheat tortilla, lettuce, tomatoes, and avocado
      Quinoa or barley salad with mixed vegetables and vinaigrette dressing
      Fresh fruit (apple, orange, or grapes)
      
      Afternoon Snack:
      Hummus with whole grain crackers
      Carrot and celery sticks with peanut butter
      
      Dinner:
      Baked salmon or trout with lemon and herbs
      Roasted sweet potatoes or brown rice
      Steamed broccoli or sautéed spinach with garlic
      Mixed greens salad with chickpeas, cherry tomatoes, and balsamic vinaigrette
      
      Evening Snack:
      Greek yogurt with berries
      Whole grain cereal with milk
      Air-popped popcorn seasoned with herbs and spices
      ;`
    } else if(age>45 && age<=60){
      generatedDietPlan = `Breakfast:
     Whole grain toast with mashed avocado and sliced tomatoes
      Poached eggs or egg whites
      Fresh fruit salad with berries, kiwi, and oranges
      
      
      Mid-Morning Snack:
      Low-fat cottage cheese with pineapple chunks
      Handful of almonds or walnuts
      
      Lunch:
      Grilled salmon or chicken breast with quinoa or wild rice
      Steamed vegetables (broccoli, carrots, cauliflower)
      Mixed greens salad with cucumbers, bell peppers, and vinaigrette dressing
     
     
      Afternoon Snack:
      Greek yogurt with granola and honey
      Sliced cucumber or bell peppers with hummus
      
      
      Dinner:
      Baked tofu or lean beef stir-fry with mixed vegetables (bell peppers, snap peas, onions) in a light soy sauce
      Brown rice or whole wheat pasta
      Steamed asparagus or green beans
      
      
      Evening Snack:
      Whole grain crackers with low-fat cheese
      Sliced apples with almond butter
      Herbal tea or a glass of milk
      
      `
    }
    else if(age>60 && age<=75){
      generatedDietPlan=`
      Breakfast:
      Whole grain oatmeal with chopped nuts and dried fruit
      Low-fat or skim milk
      Sliced banana or berries
      
      Mid-Morning Snack:
      Greek yogurt with honey and a sprinkle of cinnamon
      Whole grain crackers with cheese
      
      Lunch:
      Grilled chicken or fish with roasted vegetables (such as carrots, bell peppers, and zucchini)
      Quinoa or barley salad with mixed greens and a light vinaigrette dressing
      Sliced oranges or grapefruit
      
   
      Afternoon Snack:
      Cottage cheese with sliced peaches or pear
      Handful of almonds or walnuts
      
      Dinner:
      Baked salmon or tofu with steamed broccoli and brown rice
      Tomato and cucumber salad with olive oil and balsamic vinegar
      Whole grain dinner roll or bread
      
      
      Evening Snack:
      Air-popped popcorn seasoned with herbs and spices
      Herbal tea or a glass of warm milk
      
      `
    }
    else if(age>=75){
      generatedDietPlan = `
      Breakfast:
      Cooked oatmeal with mashed banana and a sprinkle of cinnamon
      Scrambled eggs or tofu with spinach and tomatoes
      Whole grain toast with a thin layer of nut butter
      
      
      Mid-Morning Snack:
      Low-fat Greek yogurt with chopped walnuts and honey
      Sliced apple or pear
      
      Lunch:
      Lentil soup or chicken vegetable soup
      Whole grain sandwich with lean protein (turkey, chicken, or tofu), lettuce, and tomato
      Side salad with mixed greens, cucumber, and a light vinaigrette dressing
      
      
      Afternoon Snack:
      Hummus with raw vegetable sticks (carrots, celery, bell peppers)
      Whole grain crackers or rice cakes
      
      Dinner:
      Baked fish (such as salmon or tilapia) with steamed vegetables (broccoli, cauliflower, carrots)
      Quinoa or brown rice pilaf
      Mixed berry salad with a dollop of low-fat yogurt
      
      
      Evening Snack:
      Cottage cheese with sliced peaches or pineapple
      Herbal tea or warm milk with a small cookie or piece of dark chocolate

      `
    }

    // ic for generating diet plan based on sugar level
  /*  if (Sugar === 'low') {
      generatedDietPlan += " with low sugar intake";
    } else if (Sugar === 'normal') {
      generatedDietPlan += " with normal sugar intake";
    } else if (Sugar=== 'high') {
      generatedDietPlan += " with high sugar intake";
    }
*/
    setDietPlan(generatedDietPlan);
  };

  /*const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., send data to backend
    
    // Implement your submission logic here
  };
*/
  return (
    <div className="Diet">
      <form onSubmit={handleGenerate}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          <label htmlFor="city">City:</label>
          <br />
          <input type="text" id="city" name="city" value={city} onChange={handleCityChange} />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age:</label>
          <br />
          <input type="number" id="age" name="age" min="0" max="100" value={age} onChange={handleAgeChange} />
        </div>
        <br />
        <div>
          <label htmlFor="height">Height</label>
          <br />
          <input type="text" id="height" name="height" value={height} onChange={handleHeightChange} />
        </div>
        <br />
        <div>
          <label htmlFor="diseaseInfo">Disease Information:</label>
          <br />
          <textarea id="diseaseInfo" name="diseaseInfo" rows="4" value={diseaseInfo} onChange={handleDiseaseInfoChange}></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="sugar">Sugar Level:</label>
          <br />
          <input type="text" id="sugar" name="sugar" value={sugar} onChange={handleSugarChange} />
        </div>
        <br />
        {/*Generate button */}
        <button type="button" onClick={handleGenerate}>Generate</button>
      </form>

      {dietPlan && (
        <div className="generated-text">
          <form>
            <label>Diet Plan:</label>
            <br />
            <textarea rows="25" cols="60" readOnly value={dietPlan}></textarea>
          </form>
        </div>
      )}
    </div>
  );
}

export default Diet;