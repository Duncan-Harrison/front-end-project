/* exported data */
/* exported data */

interface Meal {
  strMeal: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
}

interface Re {
  title: string;
  ingredients: string;
  ingredientImage: string[];
  instructions: string;
  EntryId: number;
}

interface Data {
  entries: Re[];
  nextEntryId: number;
}

const dataKey = 'front-end-project-data';

const data = readData();
if (!data) throw new Error('readData() failure');

function readData(): Data {
  let data: Data;
  const localData = localStorage.getItem(dataKey);
  if (localData) {
    data = JSON.parse(localData) as Data;
  } else {
    data = {
      entries: [],
      nextEntryId: 1,
    };
  }
  return data;
}

async function fetchbroccoli(): Promise<void> {
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
async function fetchpotatoes(): Promise<void> {
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
async function fetchredPepper(): Promise<void> {
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
async function fetchblackBeans(): Promise<void> {
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
async function fetchTestMeal(id: string): Promise<Meal> {
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
async function fetchIngredient(id: string): Promise<void> {
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
