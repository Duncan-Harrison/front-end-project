'use strict';
/* exported data */
/* exported data */
async function fetchbroccoli() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=broccoli',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchpotatoes() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=potatoes',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchredPepper() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=red_pepper',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchblackBeans() {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=black_beans',
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
async function fetchTestMeal(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    const realMeal = meal.meals[0];
    return realMeal;
  } catch (error) {
    console.error('Error: ', error);
    const noMeal = {
      strMeal: '',
      strMeasure1: '',
      strMeasure2: '',
      strMeasure3: '',
      strMeasure4: '',
      strMeasure5: '',
      strMeasure6: '',
      strMeasure7: '',
      strMeasure8: '',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: '',
      strMeasure17: '',
      strMeasure18: '',
      strMeasure19: '',
      strMeasure20: '',
      strIngredient1: '',
      strIngredient2: '',
      strIngredient3: '',
      strIngredient4: '',
      strIngredient5: '',
      strIngredient6: '',
      strIngredient7: '',
      strIngredient8: '',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: '',
      strIngredient17: '',
      strIngredient18: '',
      strIngredient19: '',
      strIngredient20: '',
      strInstructions: '',
    };
    return noMeal;
  }
}
async function fetchIngredient(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`,
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const meal = await response.json();
    return meal;
  } catch (error) {
    console.error('Error: ', error);
  }
}
fetchIngredient('potatoes');
fetchbroccoli();
fetchpotatoes();
fetchredPepper();
fetchblackBeans();
fetchTestMeal('53000');
const foo = 'hello';
console.log('foo', foo);
